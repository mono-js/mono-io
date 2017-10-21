const socketIo = require('socket.io')

module.exports = async function ({ conf, log }) {
	const monoIoConf = conf.mono.io || {}

	let io = socketIo.listen(this.server, monoIoConf)

	log.info(`Socket io listening...`)

	module.exports.io = io
}
