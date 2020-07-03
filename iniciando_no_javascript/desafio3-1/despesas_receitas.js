//crie um programa que calcula a soma de receitas e despesas de usuarios
//no fim retorne o saldo (receitas - despesas)
const usuarios = [
    {
        nome: 'Morena',
        receitas: [6590.70, 1700],
        despesas: [1250, 1300, 270, 500, 600, 1000, 250, 390, 5500]
    },
    {
        nome: 'Paola',
        receitas: [5000, 2000],
        despesas: [1250, 500, 1000, 800]
    },
    {
        nome: 'Raira',
        receitas: [7560, 1200],
        despesas: [3000, 1000, 500, 270, 600]
    }
]

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
    let soma = 0

    for ( let numero of numeros) {
        soma = soma + numero
    }

    return soma
}

for ( let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}