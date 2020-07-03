//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Progranação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

//imprima em tela utilizando console.log o nome da empresa e seu endereço - utiliza template string
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)