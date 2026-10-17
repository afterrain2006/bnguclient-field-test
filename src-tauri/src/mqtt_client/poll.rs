use std::future::Future;
use tokio::time::Interval;

/// Flush batches without cancelling the current MQTT poll. In rumqttc, cancelling
/// poll before CONNACK drops the in-progress connection. The caller may still
/// cancel this entire future when intentionally stopping the connection.
pub(super) async fn poll_with_batch<F, T>(
    poll: F,
    interval: &mut Interval,
    mut flush: impl FnMut(),
) -> T
where
    F: Future<Output = T>,
{
    tokio::pin!(poll);
    loop {
        tokio::select! {
            result = &mut poll => return result,
            _ = interval.tick() => flush(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::poll_with_batch;
    use rumqttc::{AsyncClient, ConnectionError, Event, Incoming, MqttOptions};
    use std::sync::atomic::{AtomicUsize, Ordering};
    use std::sync::Arc;
    use std::time::{Duration, Instant};
    use tokio::io::{AsyncReadExt, AsyncWriteExt};
    use tokio::net::{TcpListener, TcpStream};
    use tokio::sync::Notify;
    use tokio::task::{JoinHandle, JoinSet};
    use tokio::time::{interval, sleep, timeout, MissedTickBehavior};

    struct Broker {
        port: u16,
        connections: Arc<AtomicUsize>,
        task: JoinHandle<()>,
    }

    impl Drop for Broker {
        fn drop(&mut self) {
            self.task.abort();
        }
    }

    async fn acknowledge(mut stream: TcpStream, delay_ms: u64, code: u8, close_after_ack: bool) {
        let Ok(0x10) = stream.read_u8().await else {
            return;
        };
        let mut remaining = 0usize;
        let mut multiplier = 1;
        for _ in 0..4 {
            let Ok(byte) = stream.read_u8().await else {
                return;
            };
            remaining += usize::from(byte & 127) * multiplier;
            if byte & 128 == 0 {
                break;
            }
            multiplier *= 128;
        }
        if remaining > 1024 {
            return;
        }
        let mut payload = vec![0; remaining];
        if stream.read_exact(&mut payload).await.is_err() {
            return;
        }
        // Test the actual MQTT 3.1.1 handshake, not merely a delayed future.
        assert_eq!(
            payload.get(..7),
            Some(&[0, 4, b'M', b'Q', b'T', b'T', 4][..])
        );
        sleep(Duration::from_millis(delay_ms)).await;
        if stream.write_all(&[0x20, 2, 0, code]).await.is_err() {
            return;
        }
        if !close_after_ack {
            let mut byte = [0];
            while matches!(stream.read(&mut byte).await, Ok(n) if n > 0) {}
        }
    }

    async fn broker(delay_ms: u64, code: u8, close_after_ack: bool) -> Broker {
        let listener = TcpListener::bind("127.0.0.1:0").await.unwrap();
        let port = listener.local_addr().unwrap().port();
        let connections = Arc::new(AtomicUsize::new(0));
        let accepted = connections.clone();
        let task = tokio::spawn(async move {
            let mut sessions = JoinSet::new();
            loop {
                tokio::select! {
                    result = listener.accept() => {
                        let (stream, _) = result.unwrap();
                        accepted.fetch_add(1, Ordering::Relaxed);
                        sessions.spawn(acknowledge(stream, delay_ms, code, close_after_ack));
                    }
                    result = sessions.join_next(), if !sessions.is_empty() => {
                        result.unwrap().unwrap();
                    }
                }
            }
        });
        Broker {
            port,
            connections,
            task,
        }
    }

    fn options(port: u16) -> MqttOptions {
        let mut options = MqttOptions::new("3", "127.0.0.1", port);
        options.set_keep_alive(Duration::from_secs(10));
        options
    }

    fn batch_interval() -> tokio::time::Interval {
        let mut ticks = interval(Duration::from_millis(16));
        ticks.set_missed_tick_behavior(MissedTickBehavior::Skip);
        ticks
    }

    #[tokio::test]
    async fn delayed_connack_uses_one_tcp_connection_while_batches_keep_flushing() {
        for delay in [30, 100, 300] {
            let server = broker(delay, 0, false).await;
            let (_client, mut events) = AsyncClient::new(options(server.port), 50);
            let mut ticks = batch_interval();
            let mut flushes = 0;
            let result = timeout(
                Duration::from_secs(3),
                poll_with_batch(events.poll(), &mut ticks, || {
                    flushes += 1;
                }),
            )
            .await
            .expect("CONNACK was lost")
            .unwrap();
            assert!(matches!(result, Event::Incoming(Incoming::ConnAck(_))));
            assert_eq!(
                server.connections.load(Ordering::Relaxed),
                1,
                "delay={delay}"
            );
            assert!(flushes >= 1, "batch timer stopped during handshake");
        }
    }

    #[tokio::test]
    async fn delayed_rejection_is_reported_without_reconnecting() {
        let server = broker(100, 2, true).await;
        let (_client, mut events) = AsyncClient::new(options(server.port), 50);
        let result = timeout(
            Duration::from_secs(3),
            poll_with_batch(events.poll(), &mut batch_interval(), || {}),
        )
        .await
        .unwrap();
        assert!(matches!(result, Err(ConnectionError::ConnectionRefused(_))));
        assert_eq!(server.connections.load(Ordering::Relaxed), 1);
    }

    #[tokio::test]
    async fn explicit_stop_can_cancel_a_pending_handshake() {
        let server = broker(1000, 0, false).await;
        let (_client, mut events) = AsyncClient::new(options(server.port), 50);
        let stop = Arc::new(Notify::new());
        let signal = stop.clone();
        tokio::spawn(async move {
            sleep(Duration::from_millis(80)).await;
            signal.notify_one();
        });
        let mut ticks = batch_interval();
        let started = Instant::now();
        timeout(Duration::from_secs(3), async {
            tokio::select! {
                _ = stop.notified() => {}
                result = poll_with_batch(events.poll(), &mut ticks, || {}) => {
                    panic!("handshake finished before stop: {result:?}");
                }
            }
        })
        .await
        .unwrap();
        assert!(started.elapsed() < Duration::from_millis(800));
        assert_eq!(server.connections.load(Ordering::Relaxed), 1);
    }

    #[tokio::test]
    async fn rebuilt_eventloop_also_survives_delayed_connack() {
        let server = broker(100, 0, true).await;
        let (_client, mut events) = AsyncClient::new(options(server.port), 50);
        let mut ticks = batch_interval();
        let connected = timeout(
            Duration::from_secs(3),
            poll_with_batch(events.poll(), &mut ticks, || {}),
        )
        .await
        .unwrap()
        .unwrap();
        assert!(matches!(connected, Event::Incoming(Incoming::ConnAck(_))));
        // The broker closes after its first CONNACK. Poll through queued events to the I/O error.
        timeout(Duration::from_secs(3), async {
            while poll_with_batch(events.poll(), &mut ticks, || {})
                .await
                .is_ok()
            {}
        })
        .await
        .unwrap();
        let (_next_client, mut next_events) = AsyncClient::new(options(server.port), 50);
        let reconnected = timeout(
            Duration::from_secs(3),
            poll_with_batch(next_events.poll(), &mut ticks, || {}),
        )
        .await
        .unwrap()
        .unwrap();
        assert!(matches!(reconnected, Event::Incoming(Incoming::ConnAck(_))));
        assert_eq!(server.connections.load(Ordering::Relaxed), 2);
    }

    #[tokio::test]
    async fn low_volume_batch_is_delivered_while_network_poll_is_idle() {
        let mut pending = vec!["one message"];
        let mut delivered = Vec::new();
        let mut ticks = batch_interval();
        // Consume the initial immediate tick, then enqueue a low-volume batch.
        ticks.tick().await;
        poll_with_batch(sleep(Duration::from_millis(100)), &mut ticks, || {
            delivered.extend(std::mem::take(&mut pending));
        })
        .await;
        assert_eq!(delivered, ["one message"]);
        assert!(pending.is_empty());
    }
}
