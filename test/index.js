const test = require('ava')

const express = require('express')

const start = require('../lib')

let server
test.before('Start mono server', async (t) => {
	const ctx = await mono('/fixtures/ko/')
})

// /*
// ** Tests are run in serial
// */

// test('io should be undefined', (t) => {
// 	t.true(typeof start.io === 'undefined')
// })

<<<<<<< HEAD
test('start() should open an io connection', async (t) => {
	stdMocks.use()
	const ctx = {
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
=======
// test('start() should open an io connection', async (t) => {
// 	stdMocks.use()
// 	const ctx = {
// 		conf: {
// 			io: {}
// 		},
// 		log: {
// 			module: () => ctx.log,
// 			info: console.log
// 		}
// 	}
// 	await start.call(ctx, '', server)
// 	stdMocks.restore()
// 	const { stdout, stderr } = stdMocks.flush()
// 	t.is(stderr.length, 0)
// 	t.is(stdout.length, 1)
// 	t.true(stdout[0].includes('Listening...'))
// })
>>>>>>> test: Update tests

