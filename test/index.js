const test = require('ava')
const { join } = require('path')

const ioModule = require('../lib')
const SocketIO = require('socket.io')

const { start, stop, $get } = require('mono-test-utils')

let ctx

test('Io should be undefined when connection not opened', (t) => {
	t.true(typeof ioModule.io === 'undefined')
})

test('Start mono server', async (t) => {
	ctx = await start(join(__dirname, 'fixtures/ok/'))

	t.true(ctx.stdout.join().includes('[mono-io:mono-io] Socket io listening...'))
	t.true(ioModule.io instanceof SocketIO)

})

test('GET /socket.io/socket.io.js should exists', async (t) => {
	const { statusCode } = await $get('/socket.io/socket.io.js')

	t.is(statusCode, 200)
})

test.after('Stop mono server', async () => {
	await stop(ctx.server)
})
