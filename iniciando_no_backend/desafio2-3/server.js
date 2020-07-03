const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const course = require('./data') //ficar de olho nisso daqui

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express:server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res) {

    const about = {
        img: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg",
        name_company: "Rocketseat",
        description: "A Rocketseat nasceu em maio de 2017 quando três programadores, Cleiton Souza, Diego Fernandes e Robson Marques, uniram suas paixões por compartilhar conhecimento.<br><br>Sabendo que o mundo da programação é extremamente complexo por conta do grande volume de ferramentas existentes e da velocidade com que as coisas evoluem, a Rocketseat decidiu combinar a eficiência dos bootcamps presenciais com a flexibilidade dos cursos online, potencializando os resultados dos estudantes de acordo com os desafios existentes no mercado.",
        company_works: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo!',
        list: [
            {tech: "Javascript"},
            {tech: "HTML"},
            {tech: "CSS"},
            {tech: "Node.js"},
            {tech: "React"}
        ],
        link: [
            {url: "https://github.com/Rocketseat", img: "https://image.flaticon.com/icons/svg/733/733553.svg"},
            {url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br", img: "https://image.flaticon.com/icons/svg/2111/2111463.svg"},
            {url: "https://pt-br.facebook.com/rocketseat/", img: "https://image.flaticon.com/icons/svg/2111/2111398.svg"}
        ]        
    }

    return res.render('about', { about })
})

server.get('/courses', function(req, res) {
    return res.render('courses', { items: course })
})

server.use(function(req, res) {
    res.status(404).render('not-found')
})

server.listen(5000, function() {
    console.log('server is running')
})