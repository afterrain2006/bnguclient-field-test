# 官方协议核对记录

核对日期：2026-09-12。固定基准，不声称是此后所有比赛的最新公告。

- [官方通信协议 V1.3.0，2026-03-27](https://bbs-web-static.robomaster.com/ef4f084944e34393aa70378a4a405c681774586313231/RoboMaster%202026%20%E6%9C%BA%E7%94%B2%E5%A4%A7%E5%B8%88%E9%AB%98%E6%A0%A1%E7%B3%BB%E5%88%97%E8%B5%9B%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE%20V1.3.0%EF%BC%8820260327%EF%BC%89.pdf)
- [官方机器人制作规范 V1.3.0，2026-02-09](https://bbs-web-static.robomaster.com/715e2519e5384666a5d13edda17c6b831770696773838/RoboMaster%202026%20%E6%9C%BA%E7%94%B2%E5%A4%A7%E5%B8%88%E9%AB%98%E6%A0%A1%E7%B3%BB%E5%88%97%E8%B5%9B%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%88%B6%E4%BD%9C%E8%A7%84%E8%8C%83%E6%89%8B%E5%86%8CV1.3.0%EF%BC%8820260209%EF%BC%89.pdf)

## 采用的通信约束

通信协议第 42 页及第 2 节：MQTT 传输 Protobuf v3，主题采用消息名。默认服务器 `192.168.12.1:3333`，客户端地址 `192.168.12.2`；clientID 为机器人编号。UDP 接收端口 3334。上行最高 QoS 为 1。

键鼠与 CustomControl 上限 75 Hz，CustomControl 数据最多 30 字节。Common、Assembly、PerformanceSelection、HeroDeploy、RuneActivate、Dart、SentryCtrl 等触发指令上限 10 Hz。MapClick 与 AirSupport 在参考版另设保守的本地 1 Hz 限制，不把这个实现值当作所有场景的官方额定频率。

## 本次纠正的差异

| 仓库情况 | 官方依据与处理 |
| --- | --- |
| `.proto` 注释笼统写“最新” | 固定 V1.3.0 并记录来源 |
| 标量未写 optional | 第 2 节消息声明使用 optional；参考版补齐，保留显式 0/false 与字段缺失的区别 |
| CustomByteBlock 注释 1.2 kbit | 第 64 页为 2.4 kbit，即 300 字节；解析器容许布局到 300，默认队伍 XML 仍为 150 |
| MapClickInfoNotify 第 3/6 字段注释互换 | 第 62–63 页：`mode` 为标记种类 1…4，`type` 为地图/机器人模式 1…2；按字段编号核对并修正 |
| AirSupportCommand 取消值写 3 | 第 71 页取消值为 0，免费/付费为 1/2；校验拒绝 3 |
| 购买在本地直接加弹量 | 第 67 页按 CommonCommand 提交，等待状态回读 |
| 全局血量按每方 7 个槽、固定红方先解析 | 第 49 页实际每方按 1/2/3/4/7 共 5 个槽，己方优先；已修正蓝方身份与哨兵映射 |

协议文档 RadarInfoToClient 代码段本身有排版/声明疑点（缺字段编号且类型与随后结构说明不一致）。本工程保留既有嵌套 `RadarSingleRobotInfo` 字段 1 方案，**该项需用赛场服务器真实样本核验**，没有把猜测写成已认证结论。额外 `MapClickInfo` 是仓库遗留类型，不进入参考版的官方上行允许列表；`RadarSingleRobotInfo` 是结构类型，不单独订阅。

`CustomByteBlock.data` 内部的 mode、float、ImageBlock、150 字节布局是队伍约定，不属于裁判系统的字段定义。源 XML 的实际 offset 是参考解析依据，旧 `.proto` 注释里的示例字段不能代替它。

生产构建使用 [protobuf.js 官方静态生成方式](https://github.com/protobufjs/protobuf.js/blob/master/cli/README.md)，`npm run generate:mqtt-proto` 同时生成 JSON 元数据和静态 JS/TS 声明。浏览器无需运行时 eval，保留原 CSP 的限制。

## 比赛终端约束

制作规范 S63/S64 涉及无线与客户端互联限制，S88 要求自定义客户端操作系统开源。参考版主工作流使用有线 MQTT/UDP，不启用客户端间直连；Windows 构建用于本地学习联调。赛前仍需复核对应赛事增补、Linux 驱动、设备与规则检查。

这些检查覆盖当前工程实际使用的数据/命令路径，**不是官方认证，也不等于对全部串口命令和所有赛事规则做了形式化验证**。
