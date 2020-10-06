const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
// const recipes = require('./data-recipes')

const server = express()

server.use(express.static('public'))
server.use(express.static('assets'))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function() {
    console.log('server is running port:5000')
})