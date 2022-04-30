// Assignment 11
const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(async(req, res) => {
    const pageUrl = new URL(req.url, 'http://localhost:8085/');
    if (pageUrl.pathname === '/homepage') {
        const page = await fs.readFile(`./html/homepage.html`, 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(page);
    }
    if (pageUrl.pathname === '/contactus') {
        const page = await fs.readFile(`./html/contactus.html`, 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(page);
    }
    if (pageUrl.pathname === '/about') {
        const page = await fs.readFile(`./html/about.html`, 'utf-8');
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(page);
    }
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>Page not found</h1>');
});
server.listen(8085);