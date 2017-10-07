const _ = require('lodash')
const socketIo = require('socket.io')
const socketIoJwt = require('socketio-jwt')

module.exports = async function () {
	const log = this.log.module('mono-io')

	let io = socketIo.listen(this.server)

	io.use(socketIoJwt.authorize({
		secret: _.get(this.conf, 'mono.jwt.secret', 'secret'), // default MONO secret
		handshake: true
	}));

	log.info(`Listening...`)

	module.exports.io = io
}
