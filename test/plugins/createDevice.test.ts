import { test } from 'node:test';
import * as assert from 'node:assert'
import { build } from '../helper'

test('should create a device with provided cod and name', async (t) => {
    const app = await build(t)

    const device = app.createDevice('001', 'Test Device');

    assert.strictEqual(device.cod, '001');
    assert.strictEqual(device.name, 'Test Device');
});