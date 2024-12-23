import { test } from 'node:test'
import * as assert from 'node:assert'
import { build } from '../helper'

test('get device list', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/device/all'
  })

  const expected = JSON.stringify([{
    cod: '123',
    name: 'Device 1'
  }])

  assert.equal(res.payload, expected)
})

test('get a device', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/device'
  })

  const expected = JSON.stringify({
    cod: '123',
    name: 'Device 1'
  })

  assert.equal(res.payload, expected)
})
