//crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array).
const usuarios = [
    {
        nome: 'Morena',
        tecnologias: [
            'JavaScript',
            'CSS'
        ]
    },
    {
        nome: 'Paola',
        tecnologias: [
            'HTML',
            'CSS'
        ]
    },
    {
        nome: 'Raira',
        tecnologias: [
            'HTML',
            'Node.js'
        ]
    }
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}