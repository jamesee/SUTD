const express = require('express');

const app = express();

app.use(express.static('./public'));

app.get('/', (req,res)=>{cd
    console.log('User reaches the server.');
    res.sendFile(path.resolve(__dirname, './public/index.html'))
    // res.status(200).send('This is my homepage using express framework.')
})

app.get('/about', (req,res)=>{
    console.log('User reaches the server.');
    res.status(200).send('This is my about page.')
})

app.all('*', (req,res)=>{
    console.log('User reaches the server.');
    res.status(404).send('Resource not found !')
})
app.listen(5000, ()=>{
    console.log('Server is listening at port 5000 ...');
})