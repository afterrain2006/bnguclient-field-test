# 验证与交付记录

> 以下是先前 bnguclient 对照版的本地验证记录。队友测试版的本次软件检查与后续实机记录，请分别查看仓库 README 和 `docs/TEST_RECORD.md`；旧记录不代表新版本已经通过实机验收。

## FPS 界面调整（2026-09-12）

- 默认全屏视频视野、边缘 HP/弹量/热量与小地图；主导航只在 Esc 菜单出现。
- 菜单使用原生 modal dialog；打开时释放输入、退出指针锁定；关闭后不自动重新启用控制。视频节点保留，状态接收继续。
- 修复原生异步 close 事件在快速重新打开菜单后覆盖 Vue 状态的问题。
- 浏览器检查通过：默认隐藏菜单、Esc 开关及长按防重复、焦点恢复、背景 inert、持续收数、四个功能页、字节解析和日志导出。1600×1000 与 1024×768 截图无页面溢出；无页面运行错误。
- 最终前端类型检查和生产构建通过。截图见 `artifacts/fps-cockpit.png`、`artifacts/fps-menu.png`；可复跑 `npm run test:browser`。
- 最终 release 桌面程序已重新构建；在 `http://tauri.localhost/` 使用本机 Mock 验证 MQTT 与 H.265，检查时已解码 99 帧。实际启用输入采集后按 Esc，采集层移除；菜单打开期间解码帧数继续增加，关闭菜单后未自动重新采集。页面和控制台错误均为零，见 `artifacts/release-check.json`。这是本机软件联调，不是实机停车验证。


## 已通过的检查

- Vue/TypeScript 全项目类型检查。
- 19 项协议/边界测试：HP=300、显式 0/false、字段缺失、蓝方全局血量顺序、非法字节、300/150 字节布局、大小端、有符号数、NaN、64 位整数导出、上行枚举/频率、有界控制队列与释放、图片乱序/重复/过期。
- Rust 后端编译与控制策略单测；原仓库没有更多 `cargo test --lib` 测试可计入，本次不虚报 UDP 测试数量。
- 生产前端构建；原 HUD 按需加载，默认入口约 146 KB，静态协议代码单独分包。静态生成增加协议包体积，但取消运行时 eval/生成开销，使生产 CSP 可保持限制。
- 浏览器五页交互、1600 与 1024 宽度截图、无横向溢出、演示禁用控制、150 字节离线解析、会话导出：`artifacts/browser-check.json`。
- 桌面开发构建真实 MQTT → Rust/Tauri → Worker → Store → UI，以及 UDP H.265：`artifacts/desktop-check.json`。第二轮收到 230 条消息、解码 93 帧、无页面错误，CommonCommand 提交到本机 Mock，非法 CustomControl/下行主题发布被 Rust 拒绝。

**正式构建已通过**嵌入资源验收：页面来源 `http://tauri.localhost/`，无需 Vite；本地演示、真实 MQTT 与 UDP 图传均正常，测试期间解码 68 帧，errors/consoleErrors 都为空。详细记录见 `artifacts/release-check.json`，实际画面见 `artifacts/release-mqtt-video.png`。

## 已发现并修正的问题

1. API 中 `parseCustomData` 空实现、持久化空实现及部分 HUD 按钮只输出日志。
2. Map 新建后返回原始对象，后续赋值可能绕开 Vue 响应式追踪。
3. optional 字段缺失/零值混淆；可选首帧把 Store 默认值覆盖为 undefined。
4. uint64 转为 BigInt 后直接 JSON.stringify 导致界面/导出抛异常。
5. 实机 MQTT 字段契约与旧注释不一致，包括 CustomByteBlock 长度、地图枚举、空中支援取消值和全局 HP 顺序。
6. 开发版正常、正式版 CSP 拒绝 Protobuf 动态代码生成：改用官方静态生成，未放宽 unsafe-eval。
7. 图片块不能使用单条“只保留最新值”策略：改为有界 FIFO 与重组，记录解析失败。
8. 配置读改写竞争：Rust 锁保护与临时文件替换；参考目录、标识、端口和缓存独立。

## 明确未验证/未连接

- 官方赛场服务器、真实机器人执行结果、真实电控自定义布局与失联保护、正式地图标定。
- Linux 比赛设备上的构建、驱动、输入、显示和性能。当前验证主机是 Windows，不能替代 S88 的比赛设备验收。
- 外部视觉模型、相机/CAN/串口及队伍私有电控功能；保留接口和原有工具档案，不假装已实现设备端。
- 协议 PDF 的 RadarInfoToClient 声明疑点，需要官方实际报文验证，见协议核对记录。
- `npm audit fix` 已清除当时报告的高/中风险项目；仍有 6 项低风险间接依赖报告，来自构建期 node polyfill/elliptic 链。未通过强制降级破坏构建来消除计数。

本参考版完成软件对照与本地验证，不代表机器人或赛事设备已经通过验收。学习任务也仍需你亲自独立追踪一次状态量。
