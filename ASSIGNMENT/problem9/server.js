// HTTP Module

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('server is running!!!');

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('"Server is running at port: 8080"');
})
server.listen(8080);