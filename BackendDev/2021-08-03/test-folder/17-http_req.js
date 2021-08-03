const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.end('Welcome to our webpage!');
    } else if (req.url === '/about') {
        res.end('This webpage is my blog.');
    } else {
        res.end(`
            <h1>Sorry</h1>
            <p>This page does not exist yet.</p>
            <a href="/" >Back Home</a>
        `)
    }

});

const port = server.listen(5000);