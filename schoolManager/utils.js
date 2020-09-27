module.exports = {
  age: function(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)
    
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()
  
    if (month < 0 || month == 0 && today.getDate() > birthDate.getDate()) {
      age = age -1
    }
  
    return age
  },

  educacao: function (educacao) {
    let nivel_educacao = ''
  
    switch(educacao) {
      case "none":
        nivel_educacao = "Nível de educação não selecionado."
        break
      case "ensino_medio":
        nivel_educacao = "Ensino Médio"
        break
      case "ensino_superior":
        nivel_educacao = "Ensino Superior"
        break
      case "mestrado":
        nivel_educacao = "Mestrado"
        break
      case "doutorado":
        nivel_educacao = "Doutorado"
      default:
        break
    }
  
    return nivel_educacao
  }
}

