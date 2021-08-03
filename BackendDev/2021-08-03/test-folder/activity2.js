const express = require('express');
const app = express();

const auth = require('./routes/auth')

app.use(express.static('./method-public'));
app.use(express.urlencoded({ extended: false}));

app.use('/', auth);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT} ...`);
});
