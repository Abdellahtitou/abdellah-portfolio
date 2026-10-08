import test from 'node:test'
import assert from 'node:assert/strict'
import handler from '../api/visitor.ts'

test('returns a helpful error when Telegram env vars are missing', async () => {
  delete process.env.TELEGRAM_BOT_TOKEN
  delete process.env.TELEGRAM_CHAT_ID

  let response
  const res = {
    status(code) {
      return {
        json(data) {
          response = { code, data }
          return data
        },
      }
    },
  }

  await handler({ method: 'POST' }, res)

  assert.equal(response.code, 500)
  assert.match(response.data.message, /TELEGRAM_BOT_TOKEN|TELEGRAM_CHAT_ID/i)
})
