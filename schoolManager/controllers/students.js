const fs = require('fs')
const data = require('../data.json')
const { age , date, escolar } = require('../utils')

//index
exports.index = function(req, res) {
  return res.render('students/index', { students: data.students })
}

//show
exports.show = function(req, res) {
  const { id } = req.params

  const foundStudent = data.students.find(function(student) {
    return id == student.id
  })

  if (!foundStudent) return res.send('Estudante não encontrado(a)')

  const student = {
    ...foundStudent,
    age: age(foundStudent.birth),
    ano_escolar: escolar(foundStudent.ano_escolar)
  }

  return res.render('students/show', { student })
}

//create
exports.create = function(req, res) {
  return res.render('students/create')
}

//(post)
exports.post = function(req, res) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == '') {
      return res.send('Por favor, preencha todos os campos.')
    }
  }

  let { avatar_url, name, email, birth, ano_escolar, carga_horaria} = req.body

  birth = Date.parse(birth)
  const id = Number(data.students.length + 1)

  data.students.push({
    id,
    avatar_url,
    name,
    email,
    birth,
    ano_escolar,
    carga_horaria
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro escrita')

    return res.redirect('/students')
  })

  // return res.send(req.body)
}

//edit
exports.edit = function(req, res) {
  const { id } = req.params

  const foundStudent = data.students.find(function(student) {
    return id == student.id
  })

  if (!foundStudent) return res.send('Estudante não encontrado(a)')

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth)
  }

  return res.render('students/edit', { student })
}

//put - update
exports.put = function(req, res) {
  const { id } = req.body
  let index = 0

  const foundStudent = data.students.find(function(student, foundIndex) {
    if (id == student.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundStudent) return res.send('Estudante não encontrado(a)')

  const student = {
    ...foundStudent,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.students[index] = student

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro de escrita')

    return res.redirect(`/students/${id}`)
  })
}

//delete
exports.delete = function(req, res) {
  const { id } = req.body

  const filteredStudents = data.students.filter(function(student) {
    return student.id != id
  })

  data.students = filteredStudents

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro de escrita.')

    return res.redirect('/students')
  })
}