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

// for (let usuario of usuarios) {
//     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
// }

//baseado no desafio anterior (usuariosETecnologia) - acima
//crie uma função que recebe os dados de um objeto de usuarios e
//retorna SE o usuário trabalha com CSS ou não.
//a função deve retornar um boolean true/false

function checaSeUsuarioUsaCSS(usuario){
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

for ( let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS.`)
    }
}