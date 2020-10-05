const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
  return res.render('index')
})

routes.get('/about', function(req, res) {
  return res.render('about')
})

routes.get('/recipes', function(req, res) {
  return res.render('recipes')
})

module.exports = routes