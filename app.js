const http = require('http')
const url = require('url')


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'})

    let q = url.parse(req.url, true).query
    res.write(q.a + " " + q.b)

    res.end()
}).listen(3000, 'localhost', () => {
    console.log("Powinno działać")
})