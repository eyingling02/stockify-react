require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const _ = require('lodash')
const fs = require('fs')
const port = 8080
const template = _.template(fs.readFileSync('./index.html'))
const Stockify = require('./js/Stockify').default

const server = express()

server.use('/public', express.static('./public'))

server.use((req, res) => {
  const context = ReactRouter.createServerRenderContext()
  let body = ReactDOMServer.renderToString(
    React.createElement(ReactRouter.ServerRouter, {location: req.url, context: context},
      React.createElement(Stockify)
    )
  )
  res.write(template({body: body}))
  res.end()
})

console.log('listening on ' + port)
server.listen(port)
