const express = require('express')
const routes = express.Router()

//inicial pages routes
routes.get('/', function(req, res) {
  return res.render('admin/recipes/index')
})
routes.get('/about', function(req, res) {
  return res.render('admin/recipes/about')
})
routes.get('/recipes', function(req, res) {
  return res.render('recipes')
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