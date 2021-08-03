const http = require('http');
const {readFileSync} = require('fs');

const homepage = readFileSync('./index.html')



const server = http.createServer((req,res) => {
    console.log(req.url);
    console.log(req.method);
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': "text/html"})
        res.write(homepage)
        res.end();
    } else if (req.url === '/plain') {
        res.writeHead(200, {'Content-Type': "text/plain"})
        res.end('This webpage is my plain text blog.');
    } else {
        res.writeHead(404, {'Content-Type': "text/html"})
        res.end(`
            <h1>Sorry</h1>
            <p>This page does not exist yet.</p>
            <a href="/" >Back Home</a>
        `)
    }

});

const port = server.listen(5000);