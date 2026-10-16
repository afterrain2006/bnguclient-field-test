# MQTT 首次握手超时复现（仅本机实验）

目标：复现“端口可达但 BNGUClient MQTT 连接失败”，并区分网络超时、Broker 拒绝、UI 会话状态错误。**这不是裁判系统实机测试，也不能推断赛事引擎故障。**

## 准备

- 使用本分支的 Windows/Linux Tauri 桌面程序。浏览器演示模式无法连接真实 MQTT。
- 测试期间关闭官方选手端、真实机器人控制和其他使用相同 ClientID 的客户端。
- 本地测试统一使用 MQTT 主机 `127.0.0.1`、机器人 ID / ClientID `3`。
- 不要同时在同一端口启动常规 Mock 和故障注入服务器。
- 第一轮只检查连接，**不要启用键鼠控制或向真实设备发控制命令**。

## A. 正常基线（完整 Mock Broker）

一个终端：

```powershell
npm ci --prefix tools/rm2026-mock-server
npm run dev --prefix tools/rm2026-mock-server -- --mqtt-port 1884 --udp-port 3335
```

另一个终端启动客户端：

```powershell
npm ci
npm run tauri dev
```

Esc → 设置 → 裁判系统连接：主机 `127.0.0.1`、端口 `1884`、ID `3`。先点“测试 TCP 端口”，然后点“连接裁判系统”。应建立 MQTT 会话并可收到模拟状态。

## B. TCP 已开放，但服务器不回应 CONNACK

关闭正常 Mock，用 Node 自带运行时启动原始 TCP 故障端点：

```powershell
node tools/rm2026-mock-server/scripts/fault-mqtt-server.mjs --mode silent --port 1885
```

客户端改为 `127.0.0.1:1885`。先测试 TCP（应可达），再连接 MQTT。

预期：故障端点记录收到 CONNECT，却不返回 CONNACK；客户端报告 MQTT 握手超时。前端最多进行 3 次瞬时故障重试，最终回到可重新编辑和连接的界面。首次尝试可能由 rumqttc 内部的 5 秒 NetworkTimeout 结束，而非外层 7 秒兜底。

## C. 延迟确认

```powershell
node tools/rm2026-mock-server/scripts/fault-mqtt-server.mjs --mode delayed --delay-ms 7000 --port 1885
```

预期：TCP 通，MQTT 首次握手超过 rumqttc 内部 5 秒期限。延迟确认不会自动证明服务出错，只能证明当前客户端在此时限内未建立会话。

## D. Broker 明确拒绝 CONNECT

```powershell
node tools/rm2026-mock-server/scripts/fault-mqtt-server.mjs --mode rejected --port 1885
```

预期：TCP 通，CONNACK 拒绝码是 `0x02`（MQTT 3.1.1 标识符拒绝），rumqttc 应明确返回 ConnectionRefused；客户端不应将其标记为成功，也不应重复尝试三次。

## 自动测试故障端点

```powershell
node --test tools/rm2026-mock-server/test/fault-mqtt-server.test.mjs
```

模拟测试只验证 TCP/CONNECT/CONNACK 行为，不等于 Tauri/Rust 集成验证。完整前后端和 Rust 检查仍需在安装依赖及 Rust 工具链的电脑上执行：

```powershell
npm run check
cargo test --manifest-path src-tauri/Cargo.toml
```

## 现场补充证据

记录客户端提交版本、系统 IP/端口、ClientID、TCP 探测结果、完整 MQTT 错误、相应时间戳；有条件时抓包过滤 `tcp.port == 3333`，观察 CONNECT 是否发出、CONNACK 是否返回、拒绝码或断开时间。

注意：TCP 探针仅建立并关闭一个 TCP 连接，不会发 MQTT CONNECT。显示“TCP 可达”**不能**说明 MQTT 握手成功。

## 说明

- rumqttc 0.25.1 本身在读取 CONNACK 时已经核查 return code 并在拒绝时返回 `ConnectionRefused`。本分支只补充日志和错误分类，不重复实现一份 MQTT 解析器。
- 初次失败的有限重试由前端 `src/reference/session.ts` 执行；连接成功后的自动重连仍由 Rust 后端负责。
- 由于当前改动未经实机验证，严禁将本地 Mock 通过写成“裁判系统联调通过”。
