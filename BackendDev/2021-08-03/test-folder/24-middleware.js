const express = require('express');

const app = express();


const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();

    console.log(method, url, time);
    next();
}

app.get('/', logger, (req,res)=>{
    res.status(200).send('This is my homepage using express framework.')
})

app.get('/about', logger, (req,res)=>{

    res.status(200).send('This is the about page.')
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT} ...`);
});