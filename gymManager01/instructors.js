const fs = require('fs')
const data = require('./data.json')
const { age } = require('./utils')

exports.show = function(req, res) {
  //req.params
  const { id } = req.params

  const foundInstructor = data.instructors.find(function(instructor) {
    return instructor.id == id
  })

  if (!foundInstructor) return res.send('Não encontramos este instrutor.')

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    services: foundInstructor.services.split(','),
    created_at: "",
  }

  return res.render('instructors/show', { instructor })
}

//create
exports.post = function(req, res) {

  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == '') {
      return res.send('Por favor preencha todos os campos')
    }    
  }

  let { avatar_url, name, birth, gender, services } = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.instructors.length + 1)

  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2),function(err) {
    if (err) return res.send('Write file error.')
    return res.redirect('/instructors')
  })

  // return res.send(req.body)
}

//update

//delete