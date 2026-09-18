# 台架测试记录模板

复制此文件为一次测试记录，填入实际观测值。未收到字段写“缺失”，收到数字零写 `0`，不要混用。

## 环境

| 项目 | 本次记录 |
| --- | --- |
| 日期与时段 | |
| 测试人员 | |
| bnguclient 提交号（`git rev-parse --short HEAD`） | |
| 运行方式（开发版 / release） | |
| 操作系统与电脑型号 | |
| 裁判服务器版本、IP、MQTT 端口 | |
| 机器人 ID / clientID | |
| 电控固件提交号、超电模块型号 | |
| UDP 端口、实际发送端 IP | |
| 测试类型（Mock / 真机） | |

## 状态链路

| 检查项 | 预期或观测值 | 时间 / 证据文件 |
| --- | --- | --- |
| MQTT 连接状态 | | |
| 30 秒内消息数、解析失败数 | | |
| RobotStaticStatus.robotId / maxHealth | | |
| RobotDynamicStatus.currentHealth | | |
| RobotDynamicStatus.currentChassisEnergy | | |
| RobotDynamicStatus.currentBufferEnergy | | |
| RobotModuleStatus.capacitor | | |
| CustomByteBlock 是否收到；长度与原始包位置 | | |
| HP 未收到 / 0 / 过期 / 恢复显示 | | |
| 电控侧同一时刻的 CAN `0x212` / 仪表值 | | |

## 图传（如测试）

| 检查项 | 结果 |
| --- | --- |
| UDP 包是否到达、来源 IP | |
| 画面 / FPS / 解码队列 | |
| 丢帧或断流现象 | |

## 结果与证据

- 会话 JSON 文件：
- 原始 MQTT payload / 服务器日志 / 抓包文件：
- 电控串口或 CAN 日志、仪表照片：
- 客户端截图或视频：
- 观察到的问题、复现步骤：
- 本次可以确认的结论：
- 仍需核对的字段或物理单位：
