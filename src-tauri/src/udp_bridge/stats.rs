//! Lock-free UDP bridge statistics.
//!
//! `AtomicStats` lives on the hot path and is mutated from the receive loop
//! and decode workers — every field is atomic to avoid mutex contention.
//! `UdpStats` is the serialized snapshot delivered to the frontend.

use std::sync::atomic::{AtomicBool, AtomicU32, AtomicU64, Ordering};

use serde::Serialize;

#[derive(Serialize, Clone)]
#[serde(rename_all = "camelCase")]
pub struct UdpStats {
    pub assembled_frames: u32,
    pub decoded_frames: u32,
    pub dropped_incomplete_frames: u32,
    pub received_frames: u32,
    pub dropped_frames: u32,
    pub dropped_old_frames: u32,
    pub total_bytes: u64,
    pub last_frame_time: u64,
    pub errors: u32,
    pub decode_queue_depth: u32,
    pub decoder_waiting_keyframe: bool,
    pub decoder_backend: String,
    pub decoded_width: u32,
    pub decoded_height: u32,
    pub output_width: u32,
    pub output_height: u32,
    pub assembly_latency_avg_ms: f64,
    pub assembly_latency_max_ms: f64,
    pub decode_queue_wait_avg_ms: f64,
    pub decode_queue_wait_max_ms: f64,
    pub decoder_call_avg_ms: f64,
    pub decoder_call_max_ms: f64,
}

/// Lock-free statistics — avoids mutex contention on every packet.
pub struct AtomicStats {
    pub assembled_frames: AtomicU32,
    pub decoded_frames: AtomicU32,
    pub dropped_incomplete_frames: AtomicU32,
    pub received_frames: AtomicU32,
    pub dropped_frames: AtomicU32,
    pub dropped_old_frames: AtomicU32,
    pub total_bytes: AtomicU64,
    pub last_frame_time: AtomicU64,
    pub errors: AtomicU32,
    pub decode_queue_depth: AtomicU32,
    pub decoder_waiting_keyframe: AtomicBool,
    pub decoder_backend_code: AtomicU32,
    pub decoded_width: AtomicU32,
    pub decoded_height: AtomicU32,
    pub output_width: AtomicU32,
    pub output_height: AtomicU32,
    assembly_latency_count: AtomicU64,
    assembly_latency_total_us: AtomicU64,
    assembly_latency_max_us: AtomicU64,
    decode_queue_wait_count: AtomicU64,
    decode_queue_wait_total_us: AtomicU64,
    decode_queue_wait_max_us: AtomicU64,
    decoder_call_count: AtomicU64,
    decoder_call_total_us: AtomicU64,
    decoder_call_max_us: AtomicU64,
}

impl Default for AtomicStats {
    fn default() -> Self {
        Self {
            assembled_frames: AtomicU32::new(0),
            decoded_frames: AtomicU32::new(0),
            dropped_incomplete_frames: AtomicU32::new(0),
            received_frames: AtomicU32::new(0),
            dropped_frames: AtomicU32::new(0),
            dropped_old_frames: AtomicU32::new(0),
            total_bytes: AtomicU64::new(0),
            last_frame_time: AtomicU64::new(0),
            errors: AtomicU32::new(0),
            decode_queue_depth: AtomicU32::new(0),
            decoder_waiting_keyframe: AtomicBool::new(false),
            decoder_backend_code: AtomicU32::new(0),
            decoded_width: AtomicU32::new(0),
            decoded_height: AtomicU32::new(0),
            output_width: AtomicU32::new(0),
            output_height: AtomicU32::new(0),
            assembly_latency_count: AtomicU64::new(0),
            assembly_latency_total_us: AtomicU64::new(0),
            assembly_latency_max_us: AtomicU64::new(0),
            decode_queue_wait_count: AtomicU64::new(0),
            decode_queue_wait_total_us: AtomicU64::new(0),
            decode_queue_wait_max_us: AtomicU64::new(0),
            decoder_call_count: AtomicU64::new(0),
            decoder_call_total_us: AtomicU64::new(0),
            decoder_call_max_us: AtomicU64::new(0),
        }
    }
}

impl AtomicStats {
    fn record_latency(
        count: &AtomicU64,
        total_us: &AtomicU64,
        max_us: &AtomicU64,
        duration: std::time::Duration,
    ) {
        let value_us = duration.as_micros().min(u64::MAX as u128) as u64;
        count.fetch_add(1, Ordering::Relaxed);
        total_us.fetch_add(value_us, Ordering::Relaxed);
        max_us.fetch_max(value_us, Ordering::Relaxed);
    }

    pub(super) fn record_assembly_latency(&self, duration: std::time::Duration) {
        Self::record_latency(
            &self.assembly_latency_count,
            &self.assembly_latency_total_us,
            &self.assembly_latency_max_us,
            duration,
        );
    }

    pub(super) fn record_decode_queue_wait(&self, duration: std::time::Duration) {
        Self::record_latency(
            &self.decode_queue_wait_count,
            &self.decode_queue_wait_total_us,
            &self.decode_queue_wait_max_us,
            duration,
        );
    }

    pub(super) fn record_decoder_call(&self, duration: std::time::Duration) {
        Self::record_latency(
            &self.decoder_call_count,
            &self.decoder_call_total_us,
            &self.decoder_call_max_us,
            duration,
        );
    }

    fn latency_avg_ms(count: &AtomicU64, total_us: &AtomicU64) -> f64 {
        let count = count.load(Ordering::Relaxed);
        if count == 0 {
            return 0.0;
        }
        total_us.load(Ordering::Relaxed) as f64 / count as f64 / 1000.0
    }

    pub(super) fn set_decoder_backend(&self, backend_name: &str) {
        let code = if backend_name.starts_with("internal") {
            1
        } else if backend_name.starts_with("gpu") {
            2
        } else if backend_name.starts_with("cpu") {
            3
        } else if backend_name.starts_with("mjpeg") || backend_name.starts_with("backend-mjpeg") {
            4
        } else {
            0
        };
        self.decoder_backend_code.store(code, Ordering::Relaxed);
    }

    pub(super) fn set_frame_dimensions(
        &self,
        decoded_width: u32,
        decoded_height: u32,
        output_width: u32,
        output_height: u32,
    ) {
        self.decoded_width.store(decoded_width, Ordering::Relaxed);
        self.decoded_height.store(decoded_height, Ordering::Relaxed);
        self.output_width.store(output_width, Ordering::Relaxed);
        self.output_height.store(output_height, Ordering::Relaxed);
    }

    pub(super) fn snapshot(&self) -> UdpStats {
        let decoder_backend = match self.decoder_backend_code.load(Ordering::Relaxed) {
            1 => "internal-ffmpeg",
            2 => "gpu-ffmpeg",
            3 => "cpu-libde265",
            4 => "mjpeg-passthrough",
            _ => "unknown",
        }
        .to_string();

        UdpStats {
            assembled_frames: self.assembled_frames.load(Ordering::Relaxed),
            decoded_frames: self.decoded_frames.load(Ordering::Relaxed),
            dropped_incomplete_frames: self.dropped_incomplete_frames.load(Ordering::Relaxed),
            received_frames: self.received_frames.load(Ordering::Relaxed),
            dropped_frames: self.dropped_frames.load(Ordering::Relaxed),
            dropped_old_frames: self.dropped_old_frames.load(Ordering::Relaxed),
            total_bytes: self.total_bytes.load(Ordering::Relaxed),
            last_frame_time: self.last_frame_time.load(Ordering::Relaxed),
            errors: self.errors.load(Ordering::Relaxed),
            decode_queue_depth: self.decode_queue_depth.load(Ordering::Relaxed),
            decoder_waiting_keyframe: self.decoder_waiting_keyframe.load(Ordering::Relaxed),
            decoder_backend,
            decoded_width: self.decoded_width.load(Ordering::Relaxed),
            decoded_height: self.decoded_height.load(Ordering::Relaxed),
            output_width: self.output_width.load(Ordering::Relaxed),
            output_height: self.output_height.load(Ordering::Relaxed),
            assembly_latency_avg_ms: Self::latency_avg_ms(
                &self.assembly_latency_count,
                &self.assembly_latency_total_us,
            ),
            assembly_latency_max_ms: self.assembly_latency_max_us.load(Ordering::Relaxed) as f64
                / 1000.0,
            decode_queue_wait_avg_ms: Self::latency_avg_ms(
                &self.decode_queue_wait_count,
                &self.decode_queue_wait_total_us,
            ),
            decode_queue_wait_max_ms: self.decode_queue_wait_max_us.load(Ordering::Relaxed) as f64
                / 1000.0,
            decoder_call_avg_ms: Self::latency_avg_ms(
                &self.decoder_call_count,
                &self.decoder_call_total_us,
            ),
            decoder_call_max_ms: self.decoder_call_max_us.load(Ordering::Relaxed) as f64 / 1000.0,
        }
    }

    pub(super) fn reset(&self) {
        self.assembled_frames.store(0, Ordering::Relaxed);
        self.decoded_frames.store(0, Ordering::Relaxed);
        self.dropped_incomplete_frames.store(0, Ordering::Relaxed);
        self.received_frames.store(0, Ordering::Relaxed);
        self.dropped_frames.store(0, Ordering::Relaxed);
        self.dropped_old_frames.store(0, Ordering::Relaxed);
        self.total_bytes.store(0, Ordering::Relaxed);
        self.last_frame_time.store(0, Ordering::Relaxed);
        self.errors.store(0, Ordering::Relaxed);
        self.decode_queue_depth.store(0, Ordering::Relaxed);
        self.decoder_waiting_keyframe
            .store(false, Ordering::Relaxed);
        self.decoder_backend_code.store(0, Ordering::Relaxed);
        self.decoded_width.store(0, Ordering::Relaxed);
        self.decoded_height.store(0, Ordering::Relaxed);
        self.output_width.store(0, Ordering::Relaxed);
        self.output_height.store(0, Ordering::Relaxed);
        self.assembly_latency_count.store(0, Ordering::Relaxed);
        self.assembly_latency_total_us.store(0, Ordering::Relaxed);
        self.assembly_latency_max_us.store(0, Ordering::Relaxed);
        self.decode_queue_wait_count.store(0, Ordering::Relaxed);
        self.decode_queue_wait_total_us.store(0, Ordering::Relaxed);
        self.decode_queue_wait_max_us.store(0, Ordering::Relaxed);
        self.decoder_call_count.store(0, Ordering::Relaxed);
        self.decoder_call_total_us.store(0, Ordering::Relaxed);
        self.decoder_call_max_us.store(0, Ordering::Relaxed);
    }
}
