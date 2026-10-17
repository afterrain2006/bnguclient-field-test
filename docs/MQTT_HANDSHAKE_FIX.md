# MQTT 握手修复与验证

当前源码已修复批处理定时器可能取消 MQTT 握手的问题。重新构建桌面程序后生效。

## 修复内容

此前，新建的 `eventloop.poll()` 与 16 ms 批处理 tick 在同一层 `tokio::select!` 中竞争。tick 触发可能取消尚未完成的 poll，导致等待 CONNACK 的 TCP 连接被关闭并重建。

新增 `mqtt_client/poll.rs::poll_with_batch()` 保持同一个 pinned poll future。定时器触发仅发送消息批次；主动断开仍可取消等待，网络错误仍进入重连流程。

## 验证结果

- 两个项目的实际 Tauri 工程分别编译通过，各 5 项 MQTT 回归测试通过。
- 对主项目和队友测试版分别注入 0、5、30、100、300 ms 应答延迟，每种条件各 3 次：共 30 次连接全部成功，每次只建立 1 条 TCP。
- 历史发布版在 30 和 100 ms 的两次失败对照中，分别建立 314 和 305 次 TCP 后超时。
- 延迟拒绝能返回 MQTT 错误；远端关闭能返回连接错误；服务器不应答时仍正常超时。
- 队友测试版的 Mock 类型检查及 16 项测试通过。

测试覆盖延迟握手、拒绝、主动取消、断线后重建连接和网络空闲时低流量消息批次发送。

## 运行回归测试

在项目的 `src-tauri` 目录执行：

```sh
cargo test --locked --lib mqtt_client::poll::tests -- --nocapture
```

队友测试版提供可选的 `official-observed` 测试模式。在 `tools/rm2026-mock-server` 下执行：

```sh
npm ci
npm run typecheck
npm test
npm run dev -- --mqtt-profile official-observed --robot-id 3 --connack-delay 100 --mqtt-port 1884 --udp-port 3335
```

客户端使用 `127.0.0.1:1884`，Client ID 为 `3`。测试模式的登录状态是人工配置的 fixture，不连接官方账号系统；它只记录控制消息，不执行实机动作。首次启动缺少视频素材时需要 FFmpeg。

延迟默认是 0；100 ms 是人工故障注入，不能视为官方默认应答时间。本地结果验证的是客户端修复，现场故障仍需核对连接目标、登录状态、机器人 ID 和实际网络行为。
