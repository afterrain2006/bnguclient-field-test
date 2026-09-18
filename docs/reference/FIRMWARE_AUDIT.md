# 电控源码与客户端接入核对

核对日期：2026-09-12。来源：[用户提供的底盘工程](https://gitee.com/lik1122/25_beijing_rubber/tree/master/rubber-wheel-chassis_0306)。本地浅克隆固定提交 `e760ef9b22b93861ce4201d330c50a502b46adae`，位于 `external/25_beijing_rubber`；该目录独立保留上游 Git 历史，不纳入参考版源码提交。

除了指定底盘目录，还读取同仓库 `rubber-wheel-gimbal(2)_0306/rubber-wheel-gimbal`，因为底盘 CAN 控制包由这里发送。以下路径以各自工程根目录为起点。检查了 Keil `MDK-ARM/DJI2006.uvprojx` 的源文件清单；底盘目录残留的 `dial.c` 不在其项目清单中，不能据它的 include 判断底盘也启用了图传遥控解析。

本次仅静态读取，没有修改、编译或烧录电控；没有实机串口/CAN 抓包。客户端程序行为也未因本次文档核对而改变。

## 已确认的两条链

底盘接收裁判状态：

```text
底盘 USART6（115200）
  → Core/Src/main.c::Referee_UART_Init(&huart6, &hdma_usart6_rx)
  → Core/Src/stm32f4xx_it.c::USART6_IRQHandler
  → App/refree/refree_to_robot.c::Referee_UART_IRQHandler
  → Referee_FeedBytes → Referee_ParseFrame
  → CRC8/CRC16、帧长与命令字检查 → referee_handle_cmd
  → g_robot_status / g_power_heat / g_robot_pos / g_hurt_data / g_shoot_data
```

例如 `0x0201` 的 payload 复制进 packed `robot_status_t`，其中 `current_HP` 是 `uint16_t`。这证明电控本地能取得裁判 HP，**没有证明 HP 经电控发送到了电脑**。当前 `refree_to_robot()` 只把部分热量、初速和功率限制重新装入 CAN `0x150/0x151`，其中没有 HP。

云台接收遥控并给底盘下发速度：

```text
云台 USART6（921600，21 字节 A9 53 遥控帧）
  → Core/Src/main.c::Refree_Remote_Init
  → USART6_IRQHandler → Refree_Remote_IRQHandler
  → App/refree/refree_Image_Transfer.c::Remote_UpdateFromFrame
  → 长度、CRC16、帧头检查 → memcpy 到 remote_data_t g_remote_data
  → 定时调用 App/Src/omni_wheel.c::omni_wheel_exe
  → dbus_omni_wheel_speed → World_To_Self
  → App/Src/interface.c::gimbal_data_to_chassis
  → CAN1 标准帧 0x111，8 字节
  → 底盘 Bsp/Src/bsp_can.c::HAL_CAN_RxFifo0MsgPendingCallback
  → App/Src/interface.c::interface_callback
  → gimbal_to_chassis → App/Src/omni_wheel.c 的速度控制
```

`A9 53`、21 字节和 921600 的格式与官方 [VT03/VT13 使用说明](https://rm-static.djicdn.com/tem/17348/RoboMaster裁判系统相机图传模块VT03%26VT13使用说明书.pdf) 的遥控数据描述相符（文档印刷页 16–18）。这只能确认协议特征，不能据此确定车上安装的型号或它与 2026 MQTT 服务器的实际转发关系。

`remote_data_t` 包含位域通道、模式、按键，以及鼠标增量和键盘位图。它使用 packed C 位域加 memcpy 解包，依赖嵌入式编译器布局；它既不是 Protobuf 对象，也不是客户端 XML 的 150 字节自定义包。移植时应验证 `sizeof(remote_data_t)==21` 和每个字段的真实位偏移。

## CAN 的真实字段约定

下表多字节整数均由源码按低字节在前组装/拆解。速度的物理单位没有仅凭名字认定；它们在控制算法中还会经过增益和坐标变换。

| 帧 | 方向及入口 | 字节内容 |
| --- | --- | --- |
| `0x111` | 云台 `gimbal_data_to_chassis` → 底盘 `interface_callback` | 0–1 `Vx` int16；2–3 `Vy` int16；4–5 `Vw` int16；6 `motor_flag`；7 bit0 超电容使能 |
| `0x150` | 底盘 `refree_to_robot` → 云台 `interface_callback` | 0–1 缓冲能量 uint16；2–3 17mm 热量 uint16；4 发射频率 uint8；5 初速整数 uint8；6–7 初速×100 uint16 |
| `0x151` | 同上 | 0–1 热量上限；2–3 底盘功率限制；4–5 冷却值，均 uint16；6–7 零 |
| `0x212` | 底盘 CAN2 回调 → `super_capacitor` | 0–1 电池电压 uint16；2–3 电池电流 int16；4–5 电容电压 uint16；6–7 最大输出功率 uint16；结构名标注 10mV/10mA/10mW |
| `0x213` | 底盘 `chassis_to_supercap` → CAN1 | 0–1 原样复制 `chassis_power_limit`；4 bit0 为禁用位，与 `0x111` 的使能位相反；其余零 |
| `0x233` | `IMU_to_PC` → CAN1 | 0–1 Pitch×100；2–3 Roll×100；4–5 Yaw×100；6–7 零。云台 Pitch 来自电机角度，Roll/Yaw 来自 Mahony；底盘同名函数三个量均来自 Mahony |

云台接收 `0x150` 时，只有百分之一精度字段非零且整数部分与 byte5 相符，才使用 byte6–7，否则回退 byte5。不能忽略这个兼容分支。

`0x213` 的本地镜像叫 `limit_power_10mW`，但发送前没有乘 100；发送在 CAN1、`0x212` 接收分派在 CAN2。单位与物理接线需结合超电容协议核实，不能擅自换算或改总线。

`IMU_to_PC` 的函数名容易误导：函数实际发送 CAN，未实现直接到电脑的网络传输。云台 `mahony.c` 中有调用，不能把函数名中的 PC 当作现成 MQTT 通道。

## 与参考客户端之间缺什么

在底盘和云台的 App、Bsp、Core 源码中搜索 MQTT、Protobuf、CustomByteBlock、CustomControl、`0x0310`、`0x0311`，未发现对应实现；结合 UART/CAN 的实际收发入口，不能认定已有自定义数据桥。

| 数据 | 参考客户端已有入口 | 当前电控证据 | 对接判断 |
| --- | --- | --- | --- |
| HP、裁判热量等标准状态 | 官方 MQTT → Protobuf → Store | 电控另从裁判串口解析标准状态 | 优先用官方 MQTT 状态，不必为了 HP 再编造队伍字节包；真实服务器仍需联调 |
| 底盘速度、姿态、超电容细节 | `CustomByteBlock` → 字节布局解析 | MCU 变量及上述 CAN 帧 | 缺少把这些量送至客户端的发送/转发实现，不能直接把 CAN payload 当 XML 包 |
| 键鼠输入 | `KeyboardMouseControl` MQTT | 云台 A9 53 遥控帧 | 需验证设备/服务器中间的转发链，以及遥控器模式；不是把 Protobuf 原封不动送进 UART |
| 队伍自定义控制 | `CustomControl`，最多 30 字节 | 没有找到相应命令接收处理 | 保留接口，尚不能声称能控制对应动作 |
| 电控绘图 | 参考版 Vue UI | 底盘 `App/UI/ui_interface.c` 组装 `0x0301` 串口绘图消息 | 属于另一套客户端绘图链，不能等同 Vue 组件或直接导入 |

内置 `mode=0 + infantry(float) + infantry_ois(int8)` 的 150 字节 XML **仍没有电控发送端证据**。后续可约定遥测结构，但新约定应标成提案，待发送方实现后才启用，不能伪装成此仓库现有协议。

## 从代码发现的联调条件

1. 底盘键鼠分支在云台 `dbus_omni_wheel_speed()` 中实际由 `dbus_ctrl_data.channel.s1 == 0x02` 选择，不是注释中的 `g_remote_data.mode_sw`。云台鼠标控制和超电容选择另有 `g_remote_data.mode_sw` 条件。仅客户端勾选“控制”不能替代这些设备模式条件。
2. Q（bit6）写入持续旋转目标，E（bit7）清零；松开 Q 不会清零 `keyboard_vw_toggle`。因此客户端发送全零释放帧也不等于取消全部机械动作。W/S/A/D 为 bit0–3，Shift 为 bit4。
3. 遥控接收函数仅在有效帧时覆盖 `g_remote_data`，没有在此链路发现按接收时间失效清零的处理；底盘 CAN 回调中的看门狗刷新也是注释状态。这是需要电控确认的具体缺口，不能用客户端“已提交释放帧”代替设备端超时验证。
4. CAN 接收入口在读取 8 字节字段前没有相应 DLC 检查。底盘裁判解析器最大整帧 128 字节，只分派五个标准命令；自定义传输如需复用它，不能只新增一个 case 就认为长度、方向和缓冲都已适配。

这些是静态代码判断，不是实机故障报告。本次不改变这些控制行为。

## 后续最小联调证据

先确认车上实际刷入的提交和图传/裁判模块版本，再用真实 MQTT 状态验证 HP 回读。键鼠链路需要同时观察客户端发送、云台串口有效帧和 CAN `0x111`，并单独检查模式、释放与失联行为。自定义遥测则先确定发送接口和字节表，保存至少一组原始字节与电控变量对照，再启用对应客户端布局。

学习时可从底盘 `referee_handle_cmd` 的 `0x0201` 与客户端 `RobotDynamicStatus` 对照：两端都能有 HP，但属于裁判系统的两个输出分支，不应画成“底盘的 g_robot_status 自动发送为 MQTT”。
