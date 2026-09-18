# 练习 01：让血量显示值得信任

在原学习工程 `D:/projects/SharkClient` 完成，由你写代码，导师负责提示、评审和验收。不要复制参考版的整套实现。

## 问题证据

- `src/components/Dashboard/RobotStatus/RobotHealthBar.vue` 的 props 默认 `currentHealth=0`、`maxHealth=600`；组件没有“未收到”和“过期”的输入。
- 它的使用者 `src/components/Dashboard/RobotStateManager.vue` 同样用 `currentRobot.value?.currentHealth ?? 0`、`maxHealth ?? 600` 兜底，未知信息在传入组件前就可能被转换成数字。
- `src/store/modules/mqtt_data.ts` 初始化机器人时也给默认血量；动态状态、静态状态、位置、模块状态都会更新 `robot.lastUpdate`。
- `src/views/Dashboard.vue` 的 `currentRobotHealthPercentage` 和低血量视觉效果值得一起检查：没有有效 HP 时不应制造“已阵亡”的视觉信号。

先找到组件的真实使用路径，再判断具体页面何时会出现问题。

## 验收条件

| 输入情形 | 期待界面 |
| --- | --- |
| 尚未收到所选机器人的有效 HP | 显示“等待血量”或 `—`，不显示伪造的 0/600，不触发低血量红屏 |
| 收到 HP=300，最大值=400 | 显示 300/400，血条 75% |
| 有效 HP=0 | 显示真实 0，不当成“未收到” |
| 三秒没有新的有效血量，即使位置消息持续到达 | 标记“已过期”，最后值可以保留，但明确区别于实时值 |
| 重新收到有效 HP | 自动恢复正常显示 |
| 切换机器人或卸载组件 | 不沿用上一机器人有效性，不遗留定时器 |

练习阈值为 3000ms，后续再考虑配置化。HP 已收到而 maxHealth 尚未知时，不使用默认最大值伪装完整比例，这是基础条件完成后的加分项。

## 先调查，暂不写实现

1. 搜索 `RobotHealthBar`，找出真实使用者以及传入 props 的表达式。
2. 搜索 `lastUpdate`，列出写入点。判断哪些能证明 HP 更新、哪些不能。
3. 查找所有修改 `currentHealth` 的位置，确认动态状态之外是否还有血量来源。
4. 用文字描述“未收到、有效、过期”的转换条件，再说明需要保存什么信息、放在哪一层。

把第 1、2 项判断发给导师后再设计修改。重点理解 props、computed、时间驱动的响应式更新和清理，不先重构整个 Store。思考：`computed(() => Date.now() - ...)` 会不会仅仅因为时间流逝自动重新计算？

实现后只提交本任务相关差异，用可重复的消息或 Mock 场景验证上表，不通过直接把界面数字改成 300 来代替验证。
