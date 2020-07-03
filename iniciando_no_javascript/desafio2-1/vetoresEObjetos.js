//crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha
//armazenar as tecnologias em um array
//as tecnologias tb devem ser objetos contendo nome e especialidade

const programador = [
    {
        nome:'Morena',
        idade: 37,
        tecnologias: {
            nome: 'Javascript',
            especialidade: 'Web/Mobile'
        }
    },
    {
        nome:'Paola',
        idade: 36,
        tecnologias: {
            nome: 'Python',
            especialidade: 'Data Science'
        }
    },
    {
        nome:'Raira',
        idade: 28,
        tecnologias: {
            nome: 'C++',
            especialidade: 'Desktop'
        }
    }
]

//imprima em tela o nome da especialidade da primeira tecnologia que o usuario utiliza
console.log(`O usuárix ${programador[0].nome} tem ${programador[0].idade} anos e usa a tecnologia ${programador[0].tecnologias.nome} com especialidade em ${programador[0].tecnologias.especialidade}.`)