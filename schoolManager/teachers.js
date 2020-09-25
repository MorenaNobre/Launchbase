const fs = require('fs')
const data = require('./data.json')

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