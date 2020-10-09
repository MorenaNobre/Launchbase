server.get('/', function(req, res) {
  return res.render('index', {items:recipes})
})

server.get('/about', function(req, res) {
  return res.render('about')
})

server.get('/recipes', function(req, res) {
  return res.render('recipes', {items:recipes})
})

server.get('/recipe-detail/:id', function(req, res) {
  const id = req.params.id
  const recipe = recipes.find(function(recipe) {
      return recipe.id == id
  })

  if(!recipe) {
      return res.render('not-found')
  }
  return res.render('recipe-detail', {item: recipe})
})

server.get('/not-found', function(req, res) {
  return res.render('not-found')
})

server.use(function(req, res) {
  res.status(404).render('not-found')
})