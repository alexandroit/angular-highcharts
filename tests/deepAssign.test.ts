import assert from 'node:assert/strict';
import test from 'node:test';
import { deepAssign } from '../src/deepAssign';

test('deepAssign preserves nested Highcharts options', () => {
    const merged = deepAssign(
        {},
        { chart: { type: 'line', animation: true }, series: [{ data: [1, 2] }] },
        { chart: { animation: false }, title: { text: 'Revenue' } }
    );

    assert.deepEqual(merged.chart, { type: 'line', animation: false });
    assert.deepEqual(merged.series, [{ data: [1, 2] }]);
    assert.deepEqual(merged.title, { text: 'Revenue' });
});

test('deepAssign ignores prototype-pollution keys at every depth', () => {
    delete (Object.prototype as Record<string, unknown>).polluted;

    const payload = JSON.parse(
        '{"__proto__":{"polluted":"yes"},"chart":{"constructor":{"prototype":{"polluted":"yes"}}},"series":{"prototype":{"polluted":"yes"}}}'
    );
    const merged = deepAssign({}, payload);

    assert.equal((Object.prototype as Record<string, unknown>).polluted, undefined);
    assert.equal(Object.prototype.hasOwnProperty.call(merged, '__proto__'), false);
    assert.equal(Object.prototype.hasOwnProperty.call(merged.chart, 'constructor'), false);
    assert.equal(Object.prototype.hasOwnProperty.call(merged.series, 'prototype'), false);
});

test('deepAssign ignores dangerous own properties created without JSON parsing', () => {
    const payload = Object.create(null) as Record<string, unknown>;
    Object.defineProperties(payload, {
        __proto__: { value: { polluted: true }, enumerable: true },
        prototype: { value: { polluted: true }, enumerable: true },
        constructor: { value: { prototype: { polluted: true } }, enumerable: true }
    });
    payload.safe = { enabled: true };

    const merged = deepAssign({}, payload);

    assert.deepEqual(merged, { safe: { enabled: true } });
    assert.equal(({} as Record<string, unknown>).polluted, undefined);
});
