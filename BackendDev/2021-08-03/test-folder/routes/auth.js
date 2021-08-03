const express = require('express');
const router = express.Router();

router.post('/login', (req, res)=>{
    const { name } = req.body;
    if (name) {
        return  res
                .set({"Content-Type": "text/html"})
                .status(200)
                .send(`
                <h1>Welcome ${name} !</h1>
                <a href="/">Back Home</a>
                `)
                .end();

    } else {
        return  res
                .set({"Content-Type": "text/html"})
                .status(401)
                .send(`
                <h1>Please provide something</h1>
                <a href="/">Back Home</a>
                `)
                .end();
    }
})

module.exports = router;
