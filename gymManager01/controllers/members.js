const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')

//index
exports.index = function(req, res) {
  return res.render('members/index', { members: data.members })
}

//show
exports.show = function(req, res) {
  //req.params
  const { id } = req.params

  const foundMember = data.members.find(function(member) {
    return member.id == id
  })

  if (!foundMember) return res.send('Não encontramos este membro.')

  const member = {
    ...foundMember,
    age: age(foundMember.birth)
  }

  return res.render('members/show', { member })
}

//create
exports.create = function(req, res) {
  return res.render('members/create')
}

//post
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
  const id = Number(data.members.length + 1)

  data.members.push({
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
    return res.redirect('/members')
  })

  // return res.send(req.body)
}

//edit - é só a página para edição, não faz o update
exports.edit = function(req, res) {

  const { id } = req.params

  const foundMember = data.members.find(function(member) {
    return member.id == id
  })

  if (!foundMember) return res.send('Não encontramos este membro.')

  //yyyy-mm-dd
  //member.birth = 0934029349380592945
  //date(member.birth)
  //return -> yyyy-mm-dd

  const member = {
    ...foundMember,
    birth: date(foundMember.birth)
  }

  return res.render('members/edit', { member })
}

//update - put
exports.put = function(req, res) {
  const { id } = req.body
  let index = 0

  const foundMember = data.members.find(function(member, foundIndex) {
    if (id == member.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundMember) return res.send('Não encontramos este membro.')

  const member = {
    ...foundMember,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.members[index] = member

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro de escrita!')

    return res.redirect(`/members/${id}`)
  })

}

//delete
exports.delete = function(req, res) {
  const { id } = req.body

  const filteredMembers = data.members.filter(function(member) {
    return member.id != id
  })

  data.members = filteredMembers

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Erro escrita!')

    return res.redirect('/members')
  })
}