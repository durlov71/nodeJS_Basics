// HTTP Module


const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('server is running!!!');

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('<h1>Hello from Server</h1> This is Istiak');
// })
// server.listen(3000);


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<_______URL MODULE_______>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
const url = require('url');
const server = http.createServer((req, res) => {
    console.log('server is running!!!');
    if (req.url === '/favicon.ico') return; // ignore favicon.ico

    const myURL = new URL(req.url, 'http://localhost:3000/')
    console.log(myURL.pathname);
    console.log(myURL.searchParams.get('id'));
    console.log(myURL.searchParams.get('catagory'));


    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello from Server</h1> For testing purpose only');
})
server.listen(3000);