const test = require('ava')

const stdMocks = require('std-mocks')
const express = require('express')

const start = require('../lib')

/*
** Start API
*/
let server
test.before('Start server', async (t) => {
	stdMocks.use()
	// Require server
	const port = 4444
	const app = express()
	server = app.listen(port)
	// Flush logs output
	stdMocks.flush()
	stdMocks.restore()
})

/*
** Tests are run in serial
*/

test('io should be undefined', (t) => {
	t.true(typeof start.io === 'undefined')
})

test('start() should open an io connection', async (t) => {
	stdMocks.use()
	const ctx = {
		conf: {
			mono: {
				jwt: {},
				io: {}
			}
		},
		log: {
			module: () => ctx.log,
			info: console.log
		}
	}
	await start.call(ctx, '', server)
	stdMocks.restore()
	const { stdout, stderr } = stdMocks.flush()
	t.is(stderr.length, 0)
	t.is(stdout.length, 1)
	t.true(stdout[0].includes('Listening...'))
})

