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

routes.get('/admin/recipes/create', function(req, res) {
  return res.render('admin/recipes/create')
})

routes.get('/admin/recipes/fields_create', function(req, res) {
  return res.render('admin/recipes/fields_create')
})

routes.use(function(req, res) {
  res.status(404).render('not-found')
})


//admin routes

// routes.get('/admin/recipes', recipes.index)
// routes.get('/admin/recipes/create', recipes.create)
// routes.get('/admin/recipes/:id', recipes.show)
// routes.get('/admin/recipes/:id/edit', recipes.edit)

// routes.post('/admin/recipes', recipes.post)
// routes.put('/admin/recipes', recipes.put)
// routes.delete('/admin/recipes', recipes.delete)



module.exports = routes