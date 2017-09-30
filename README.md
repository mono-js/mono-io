<h1 align="center"><img src="https://user-images.githubusercontent.com/904724/31045653-d73c6302-a5e8-11e7-8db6-058077d4a848.png" width="350" alt="Mono"/></h1>

> Socket.io module for [Mono](https://github.com/terrajs/mono)

[![npm version](https://img.shields.io/npm/v/@terrajs/mono-io.svg)](https://www.npmjs.com/package/@terrajs/mono-io)
[![Travis](https://img.shields.io/travis/terrajs/mono-io/master.svg)](https://travis-ci.org/terrajs/mono-io)
[![Coverage](https://img.shields.io/codecov/c/github/terrajs/mono-io/master.svg)](https://codecov.io/gh/terrajs/mono-io.js)
[![license](https://img.shields.io/github/license/terrajs/mono-io.svg)](https://github.com/terrajs/mono-io/blob/master/LICENSE)

Mono-io uses [socket.io](https://github.com/socketio/socket.io) and [socketio-jwt](https://github.com/auth0-community/socketio-jwt) to handle sockets with authorization via JWT.

## Installation

```bash
npm install --save @terrajs/mono-io
```

Then, in your configuration file of your Mono application (example: `conf/application.js`):

```js
module.exports = {
  mono: {
    modules: ['@terrajs/mono-io']
  }
}
```

## Configuration

mono-io will use the `io` property of your configuration (example: `conf/development.js`):

```js
module.exports = {
  io: {
    // secret property is optional
    secret: 'your secret or public key'
  }
}
```

You can also provide a function to get the secret:

```js
var SECRETS = {
  'user1': 'secret 1',
  'user2': 'secret 2'
}

module.exports = {
  io: {
    secret: function (request, decodedToken, callback) {
      // SECRETS[decodedToken.userId] will be used a a secret or public key for connection user.
      return callback(null, SECRETS[decodedToken.userId]);
    }
  }
}
```

## Usage

In your modules files, you can access `io` instance:

```js
const { io } = require('@terrajs/mono-io')

io.on('connection', function (socket) {
  console.log(socket.decoded_token.name)
})
```
