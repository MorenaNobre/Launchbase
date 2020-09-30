module.exports = {
  age: function age(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)
  
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()
  
    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1
    }
  
    return age
  
  },

  date: function(timestamp) {
    const date = new Date(timestamp)

    //yyyy
    const year = date.getUTCFullYear()

    //mm
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)

    //dd
    const day = `0${date.getUTCDate()}`.slice(-2)

    //return yyyy-mm-dd
    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    }
  },

  blood: function(typeBlood) {
    let blood = ''

    switch(typeBlood) {
      case "A1":
        blood = "A+"
        break
      case "A0":
        blood = "A-"
        break
      case "B1":
        blood = "B+"
        break
      case "B0":
        blood = "B-"
        break
      case "AB1":
        blood = "AB+"
        break
      case "AB0":
        blood = "AB-"
        break
      case "O1":
        blood = "O+"
        break
      case "O0":
        blood = "O-"
        break
      default:
        break
    }

    return blood
  }
}