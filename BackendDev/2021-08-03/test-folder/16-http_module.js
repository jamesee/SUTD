const http = require('http');

const server = http.createServer((req,res) => {
    res.write('Welcome to our webpage!');
    res.end();
});

const port = server.listen(5000);