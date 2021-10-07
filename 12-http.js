const http = require('http')


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to our home page')
    }

    if (req.url === '/about') {
        res.write('Welcome to about')
    }

    res.end(`<h1>Oops!!</h1>`)
})




server.listen(5000);