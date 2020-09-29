const fs = require('fs')
const data = require('./data.json')
const { age , educacao, date } = require('./utils')

//index
exports.index = function(req, res) {
  return res.render('teachers/index', { teachers: data.teachers })
}

//show
exports.show = function(req, res) {
  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher) {
    return id == teacher.id
  })

  if (!foundTeacher) return res.send('Professor(a) não encontrado(a)')

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    nivel_educacao: educacao(foundTeacher.nivel_educacao),
    materia: foundTeacher.materia.split(","),
    created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
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

//edit
exports.edit = function(req, res) {
  const { id } = req.params

  const foundTeacher = data.teachers.find(function(teacher) {
    return id == teacher.id
  })

  if (!foundTeacher) return res.send('Professor(a) não encontrado(a)')

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth)
  }

  return res.render('teachers/edit', { teacher })
}

//put - update
exports.put = function(req, res) {
  const { id } = req.body
  let index = 0

  const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
    if (id == teacher.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundTeacher) return res.send('Professor(a) não encontrado(a)')

  const teacher = {
    ...foundTeacher,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.teachers[index] = teacher

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro de escrita')

    return res.redirect(`/teachers/${id}`)
  })
}

//delete
exports.delete = function(req, res) {
  const { id } = req.body

  const filteredTeachers = data.teachers.filter(function(teacher) {
    return teacher.id != id
  })

  data.teachers = filteredTeachers

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro de escrita.')

    return res.redirect('/teachers')
  })
}