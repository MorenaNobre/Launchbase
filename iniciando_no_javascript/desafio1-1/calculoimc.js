const nome = 'Morena'
const peso = 84
const altura = 1.69

const imc = peso / (altura * altura)

if (imc <= 18.5) {
    console.log(`${nome}, você está no nível de MAGREZA.`)
} else if (imc > 18.5 && imc <= 24.9) {
    console.log(`${nome}, você está no nível NORMAL.`)
} else if (imc > 24.9 && imc <= 29.9) {
    console.log(`${nome}, você está no nivel de SOBREPESO.`)
} else if (imc > 29.9 && imc <= 39.9) {
    console.log(`${nome}, você está no nível de OBSIDADE.`)
} else {
    console.log(`${nome}, você está no nível de OBSIDADE GRAVE`)
}