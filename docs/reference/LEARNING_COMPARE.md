# 怎样用参考版继续学习

不要一次读完参考版。先在原目录完成自己的追踪，再用本目录验证判断。

## 真实运行路线

```text
MQTT Incoming::Publish
  ↓ src-tauri/src/mqtt_client.rs — mqtt_connect 的 eventloop
MqttMessagePayload { topic, payload: Vec<u8> }
  ↓ emit_mqtt_message_batch → mqtt-message-batch
src/api-shim.ts — onMessage / createMqttMessageQueue
  ↓ Worker.postMessage
src/mqtt/mqttDecoder.worker.ts — self.onmessage
  ↓ decodeMqttEventPayload
src/mqtt/mqttPayloadDecoder.ts — getMessageCodec / decode / toObject
  ↓ convertProtobufData + presentFields
Worker.postMessage → resultQueue → callback
  ↓ src/reference/session.ts — receive / statePatch
src/store/modules/mqtt_data.ts — handleMessage
  ├─ robot_dynamic_status → updateRobotDynamicStatus
  │    ↓ reactive Map → session.robot → computed hp
  │  src/reference/ReferenceApp.vue — health-value
  └─ custom_byte_block → parseCustomByteBlock
       ↓ api.parseCustomData → resolveCustomLayout → decodeCustomByteBlock
       ↓ customData Map / customImages Map
     ReferenceApp.vue — 电控字段 / 图片预览
```

原工作台同样由 `api-shim.onMessage` 进入 `Dashboard.vue` 的队列，再调用 `mqttDataStore.handleMessage`。新增参考主界面用 `session.ts` 集中维护连接和时效；没有把它说成原仓库本来就有的文件。

原代码运行时 `lookupType`，参考版改为 `protocol/codecs.ts` 按消息名取构建时生成的编解码函数。消息的 Protobuf 格式和“topic 决定类型”没有改变；改变的是代码生成时间，目的是支持生产 CSP。

## 建议比较顺序

1. 原 `mqttPayloadDecoder.ts` 与参考文件：为什么 topic 决定解码类型？`[8,172,2]` 怎样成为 HP 300？
2. `.proto` 的 optional 和 `state-patch.ts`：字段没来、字段值为 0、字段值为 false 是否相同？
3. `mqtt_data.ts`：从 Map 新建返回值到响应式对象；为什么对原始对象赋值可能不刷新 UI？
4. `custom-byte-block.ts` 与 infantry.xml：offset 是双方约定还是客户端猜的？`DataView` 为什么带 byteOffset？
5. `ReferenceApp.vue` 的 hp、hpPercent、session.robot：Pinia 与 computed 怎样传播变化？
6. `commands.ts`、`control-pump.ts`、Rust command_policy：上行为什么要边界检查、限流和确认回读？

每次只比较一个问题：

```powershell
git diff 20d3fed -- src/mqtt/mqttPayloadDecoder.ts
git diff 20d3fed -- src/store/modules/mqtt_data.ts
git show 20d3fed:src/api-shim.ts
```

## 最后由你独立完成

在 HP、remainingAmmo、currentHeat 中选一个，**先关闭这份文档**。从原项目搜索字段，画出网络、事件、Worker、解码、Store、组件的文件/函数路径，找到每次类型变化，然后用一条你自己选的合法报文说明 UI 应显示什么。

导师只检查你的路径和推断；不直接替你补图。学习验收尚未完成，因为这一步需要你亲自解释。
