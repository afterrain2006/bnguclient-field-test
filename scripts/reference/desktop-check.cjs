const { chromium } = require('playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9223');
  const page = browser.contexts()[0].pages().find(p => p.url().includes(':1430'));
  if (!page) throw new Error('Start the reference desktop with local CDP port 9223 first');
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.reload();
  await page.getByRole('button', { name: '打开菜单', exact: true }).waitFor();
  await page.evaluate(async () => {
    const { useReferenceSession } = await import('/src/reference/session.ts');
    const s = useReferenceSession();
    await s.disconnect(); s.profile.host = '127.0.0.1'; s.profile.port = 1884; s.profile.robotId = 3;
    s.profile.sourceHost = '127.0.0.1'; s.profile.udpPort = 3335;
    await s.connect();
  });
  await page.waitForFunction(async () => {
    const { useReferenceSession } = await import('/src/reference/session.ts');
    const s = useReferenceSession(); return s.received > 30 && s.commandReady;
  }, null, { timeout: 30000 });
  await page.getByRole('button', { name: '启动视频接收', exact: true }).click();
  await page.locator('.live-video').waitFor({ timeout: 20000 });
  await page.waitForFunction(() => document.querySelector('.live-video')?.naturalWidth > 0, null, { timeout: 30000 });
  await page.waitForTimeout(3000);
  const data = await page.evaluate(async () => {
    const { useReferenceSession } = await import('/src/reference/session.ts');
    const s = useReferenceSession();
    const status = await window.api.udpStream.getStatus();
    // Loopback Mock only; a manual command tests frontend encode -> Rust -> broker.
    const sent = await s.send('CommonCommand', { cmdType: 1, param: 50 });
    const oversized = await window.api.mqtt.publishRaw({ topic: 'CustomControl', payload: [10,31,...Array(31).fill(0)] });
    const unknown = await window.api.mqtt.publishRaw({ topic: 'RobotDynamicStatus', payload: [8,1] });
    const tauriStats = await window.api.mqtt.getStats();
    return { mode: s.mode, connection: s.connection, robotId: s.robot.robotId, hp: s.robot.currentHealth, received: s.received, rejected: s.rejected, sent, oversized, unknown, stats: status.stats, tauriStats };
  });
  assert.equal(data.connection, 'connected'); assert.equal(data.robotId, 3); assert(data.received > 30); assert(data.stats.decodedFrames > 0);
  assert.equal(data.sent, true); assert.equal(data.oversized.success, false); assert.equal(data.unknown.success, false);
  await page.screenshot({ path: 'artifacts/desktop-mqtt-video.png', fullPage: true });
  await page.evaluate(async () => { const {useReferenceSession}=await import('/src/reference/session.ts'); await useReferenceSession().disconnect(); await window.api.udpStream.stop(); });
  const disconnected = await page.evaluate(async () => { const {useReferenceSession}=await import('/src/reference/session.ts'); const s=useReferenceSession(); return {stale:s.stale,ready:s.commandReady}; });
  assert.deepEqual(disconnected, { stale: true, ready: false }); assert.deepEqual(errors, []);
  fs.writeFileSync('artifacts/desktop-check.json', JSON.stringify({ checkedAt: new Date().toISOString(), data, disconnected, errors }, null, 2));
  console.log(JSON.stringify({received:data.received, decodedFrames:data.stats.decodedFrames, hp:data.hp, controlSubmitted:data.sent, errors}, null, 2));
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
