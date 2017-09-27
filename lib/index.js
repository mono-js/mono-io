const socketIo = require('socket.io')
const socketIoJwt = require('socketio-jwt')

module.exports = async function (srcDir, http) {
	const log = this.log.module('mono-io')
	const conf = this.conf.io

	let io = socketIo.listen(http.server)

	io.use(socketIoJwt.authorize({
		secret: conf && conf.secret,
		handshake: true
	}));

	log.info(`Listening...`)

	module.exports.io = io
}
