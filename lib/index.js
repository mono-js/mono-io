const socketIo = require('socket.io')

module.exports = async function () {
	const log = this.log.module('mono-io')
	const monoIoConf = this.conf.mono.io || {}

	let io = socketIo.listen(this.server, monoIoConf)

	log.info(`Socket io listening...`)

	module.exports.io = io
}
