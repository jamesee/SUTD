const express = require('express');
const app = express();

let { user } = require('./library.js');

app.get('/api/user', (req, res) => {
    res.status(200).json({sucess: true, library: user});
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT} ...`);
});