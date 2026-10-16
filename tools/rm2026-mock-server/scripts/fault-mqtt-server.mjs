// Fault-injection TCP endpoint for MQTT 3.1.1 handshake tests.
// NOT a full MQTT broker. Run the existing Aedes Mock Server for the success baseline.
import net from 'node:net'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const modes = new Set(['silent', 'delayed', 'rejected'])

function completeConnectLength(buffer) {
  if (buffer.length < 2) return null
  if (buffer[0] !== 0x10) throw new Error('Expected MQTT CONNECT (0x10)')
  let remaining = 0
  let factor = 1
  for (let offset = 1; offset < 5; offset++) {
    if (buffer.length <= offset) return null
    const digit = buffer[offset]
    remaining += (digit & 0x7f) * factor
    if (!(digit & 0x80)) return offset + 1 + remaining
    factor *= 128
  }
  throw new Error('Invalid MQTT remaining length')
}

export async function startFaultBroker({ host = '127.0.0.1', port = 1885, mode = 'silent', delayMs = 7000 } = {}) {
  if (!modes.has(mode)) throw new Error('mode must be silent, delayed, or rejected')
  if (!Number.isInteger(delayMs) || delayMs < 0) throw new Error('delayMs must be a nonnegative integer')
  const sockets = new Set()
  const stats = { tcpConnections: 0, mqttConnects: 0, connacksSent: 0 }
  const server = net.createServer(socket => {
    sockets.add(socket)
    stats.tcpConnections++
    let buffered = Buffer.alloc(0)
    let handled = false
    let replyTimer
    socket.on('close', () => { sockets.delete(socket); clearTimeout(replyTimer) })
    socket.on('error', error => console.warn('[fault-broker] socket error:', error.message))
    socket.on('data', chunk => {
      if (handled) return
      buffered = Buffer.concat([buffered, chunk])
      try {
        const expected = completeConnectLength(buffered)
        if (expected === null || buffered.length < expected) return
        handled = true
        stats.mqttConnects++
        console.log('[fault-broker] MQTT CONNECT received; mode=' + mode)
        if (mode === 'silent') return
        replyTimer = setTimeout(() => {
          if (socket.destroyed) return
          // MQTT 3.1.1 CONNACK: accepted (0) or identifier rejected (2).
          socket.write(Buffer.from([0x20, 0x02, 0x00, mode === 'rejected' ? 0x02 : 0x00]))
          stats.connacksSent++
          console.log('[fault-broker] CONNACK sent')
        }, mode === 'delayed' ? delayMs : 0)
      } catch (error) {
        handled = true
        console.warn('[fault-broker] malformed CONNECT:', error.message)
        socket.destroy()
      }
    })
  })
  await new Promise((yes, no) => {
    server.once('error', no)
    server.listen(port, host, () => { server.off('error', no); yes() })
  })
  const boundPort = server.address().port
  return {
    host, port: boundPort, stats,
    async close() {
      for (const socket of sockets) socket.destroy()
      await new Promise(yes => server.close(yes))
    }
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const option = (name, fallback) => {
    const i = process.argv.indexOf(name)
    return i < 0 ? fallback : process.argv[i + 1]
  }
  const mode = option('--mode', 'silent')
  const port = Number(option('--port', '1885'))
  const delayMs = Number(option('--delay-ms', '7000'))
  const broker = await startFaultBroker({ mode, port, delayMs })
  console.log(`[fault-broker] Listening on ${broker.host}:${broker.port}; mode=${mode}`)
  console.log('[fault-broker] Use ClientID=3, MQTT port=' + broker.port + '. Ctrl+C stops it.')
  process.once('SIGINT', async () => { await broker.close(); process.exit(0) })
}
