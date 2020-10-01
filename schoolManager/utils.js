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

  date: function(timestamp) {
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return `${year}-${month}-${day}`
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
  },

  escolar: function (escolar) {
    let ano_escolar = ''
  
    switch(escolar) {
      case "none":
        ano_escolar = "Ano escolar não selecionado."
        break
      case "5ano":
        ano_escolar = "5º ano - ensino fundamental"
        break
      case "6ano":
        ano_escolar = "6º ano - ensino fundamental"
        break
      case "7ano":
        ano_escolar = "7º ano - ensino fundamental"
        break
      case "8ano":
        ano_escolar = "8º ano - ensino fundamental"
      case "9ano":
        ano_escolar = "9º ano - ensino fundamental"
      case "1ano":
        ano_escolar = "1º ano - ensino médio"
      case "2ano":
        ano_escolar = "2º ano - ensino médio"
      case "3ano":
        ano_escolar = "3º ano - ensino médio"
      default:
        break
    }
  
    return ano_escolar
  }

}