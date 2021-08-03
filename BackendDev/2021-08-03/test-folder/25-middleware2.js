const express = require('express');

const app = express();
const logger = require('./logger');
const authorise = require('./authorise');


// app.use(logger);
// app.use('/hobbies', logger);
app.use('/hobbies', [logger, authorise]);

app.get('/',  (req,res)=>{
    res.status(200).send('This is my homepage using express framework.')
})

app.get('/about', (req,res)=>{
    res.status(200).send('This is the about page.')
})

app.get('/hobbies/chess', (req,res)=>{
    res.status(200).send('Chess Game.')
})

app.get('/hobbies/diving', (req,res)=>{
    res.status(200).send('Diving Trips.')
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT} ...`);
});