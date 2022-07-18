const express = require('express')
const server = express()

// Configurar pasta pública.
server.use(express.static('public'))

// Utilizando template engine.
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Configurar caminhos da minha aplicação:
// Página inicial.
server.get('/', (req, res) => {
    return res.render('index.html')
})

// Cadastro de ponto de coleta.
server.get('/create-point', (req, res) => {
    return res.render('create-point.html')
})

// Pesquisa de ponto de coleta.
server.get('/search', (req, res) => {
    return res.render('search-results.html')
})

// Ligar o servidor.
server.listen(3000)

