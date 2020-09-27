const fs = require('fs')
const data = require('./data.json')
const { age , educacao } = require('./utils')

//show
exports.show = function(req, res) {
  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id
  })

  if (!foundTeacher) return res.send('Professor(a) não encontrado(a)')

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    nivel_educacao: educacao(foundTeacher.nivel_educacao),
    materia: foundTeacher.materia.split(","),
    created_at: '',
  }

  return res.render('teachers/show', { teacher })
}

//create (post)
exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == '') {
      return res.send('Por favor, preencha todos os campos.')
    }
  }

  let { avatar_url, name, birth, nivel_educacao, tipo_aula, materia} = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.teachers.length + 1)

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    nivel_educacao,
    tipo_aula,
    materia,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro escrita')

    return res.redirect('/teachers')
  })

  // return res.send(req.body)
}


//update

//delete