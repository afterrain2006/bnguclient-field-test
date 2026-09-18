# Linux 安装与台架验证（Ubuntu 22.04 / 24.04 x86_64）

这份指南对应 `bnguclient-field-test` 的桌面客户端。需要带图形桌面的 Linux；仅在无桌面的服务器或普通容器中编译，不能据此验证窗口、键鼠或图传。推荐在准备使用的 Linux 系统上原生构建，避免较新系统编出的程序因 glibc 版本而无法在较老系统启动。当前 `build.rs` 对 x86_64 的内置解码器启用了 SSE4.1，目标机器 CPU 也需要支持 SSE4.1。

## 1. 安装构建依赖

在 Ubuntu 的终端执行：

```bash
sudo apt update
sudo apt install -y libwebkit2gtk-4.1-dev build-essential curl wget file \
  libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev \
  pkg-config git ffmpeg
```

这组桌面构建依赖按 [Tauri 2 官方 Linux 前置要求](https://v2.tauri.app/start/prerequisites/) 整理；`pkg-config` 供构建检查使用，`ffmpeg` 供 H.265 硬件解码探测使用。程序还编入了 `libde265` CPU 后备解码器，不要求安装 AI Python 服务或 ONNX 模型。

安装 [Rust 稳定工具链](https://www.rust-lang.org/tools/install) 和 [Node.js 22](https://nodejs.org/en/download)（本项目 CI 使用 Node 22），然后开一个新终端核对：

```bash
rustc --version
cargo --version
node --version
npm --version
pkg-config --modversion webkit2gtk-4.1
ffmpeg -version
```

若已有兼容的 Rust 与 Node 工具链，无需重复安装。`pkg-config` 查不到 `webkit2gtk-4.1` 时先修复系统依赖，不能靠 `npm ci` 解决。

## 2. 从源码运行

在本仓库根目录执行：

```bash
npm ci
npm run tauri dev
```

开发模式启动后按 [使用方法](USAGE.md) 连接 MQTT 和 UDP。`npm run dev:demo` 只是浏览器模拟，不会检验真实 MQTT TCP 或 UDP 图传。桌面会话下要能打开窗口；SSH 无图形会话不能作为运行验证。

## 3. 构建与分发

在 Linux 仓库根目录执行：

```bash
npm run build:linux
```

脚本先检查工具链与 WebKitGTK，执行 `npm ci` 和 Tauri release 构建，再生成 `build-linux/bnguclient-field-test-linux-<架构>.tar.gz`。它不会自动运行 `sudo`，也不会下载 AI 模型。解码器会自行选择 FFmpeg 硬件路径或编入的 CPU 后备路径。

在目标 Linux 机器上安装运行库并解压运行：

```bash
sudo apt update
sudo apt install -y libwebkit2gtk-4.1-0 libgtk-3-0 \
  libayatana-appindicator3-1 librsvg2-2 ffmpeg
tar -xzf bnguclient-field-test-linux-x86_64.tar.gz
cd bnguclient-field-test-linux-x86_64
./run.sh
```

如果目标机器是其他架构，以生成的压缩包文件名为准。压缩包内有可执行文件、配置资源和测试指南，不需要 Node、Rust 或源码。`run.sh` 会切换到解压目录并创建可写的 `Cache` 目录；请解压到当前用户有写入权限的位置。这个 tarball 不是跨发行版通用的静态包，目标机仍须满足系统库与 glibc 要求；Tauri [官方 Debian 分发说明](https://v2.tauri.app/distribute/debian/) 也强调应在拟支持的最老系统上构建。

## 4. 判定是否配置成功

在构建机检查 `npm run build:linux` 正常退出，且压缩包里有 `bnguclient`、`resources/MessageMQTTConfig.yaml`、`run.sh`。在目标机运行 `ldd ./bnguclient | grep 'not found'` 应无输出；执行 `./run.sh` 应弹出客户端窗口。然后按 [裁判系统与超电测试指南](FIELD_TEST.md) 先验证 Mock MQTT/UDP，再进行真实裁判系统的只读联调。只有窗口打开、状态消息解码并显示、UDP 画面出现，才算桌面链路验证完成；构建成功本身不证明现场设备兼容。

常见问题：

- `webkit2gtk-4.1` 找不到：重做第 1 步，确认系统是提供 WebKitGTK 4.1 的发行版。
- `GLIBC_x.y not found`：在更老的兼容系统上重新构建；不要只复制较新系统的二进制到旧机器。
- 有 MQTT 状态却没有图传：核对 UDP 监听端口与发送端过滤，再确认 `ffmpeg -version` 可运行；FFmpeg 不可用时程序应尝试 CPU 后备解码，但性能可能下降。
- AI 检测不可用：测试包没有 AI 服务与模型；本轮裁判状态、超电状态和 UDP 图传测试不依赖它。
