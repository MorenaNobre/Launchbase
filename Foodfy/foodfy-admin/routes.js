const express = require('express')
const routes = express.Router()

//website routes
routes.get('/', function(req, res) {
  return res.render('index')
})

routes.get('/about', function(req, res) {
  return res.render('about')
})

routes.get('/recipes', function(req, res) {
  return res.render('recipes')
})

routes.get('/recipe-detail', function(req, res) {
  return res.render('recipe-detail')
})

routes.use(function(req, res) {
  res.status(404).render('not-found')
})

//admin routes



module.exports = routes