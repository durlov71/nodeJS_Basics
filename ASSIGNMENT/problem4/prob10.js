// Create Route and give json data as a response

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/greetings') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello from node.js' }));
    }
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('404 - Not Found');
});
server.listen(8081);