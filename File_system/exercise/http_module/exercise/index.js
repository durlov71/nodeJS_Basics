// Exercise

// create server
//read a html file
// send this data as a response from server

const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async(req, res) => {
    console.log('server is waiting for response...')
    

    const data = await fs.readFile('./index.html', 'utf-8') //file reading
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
})
server.listen(2000);