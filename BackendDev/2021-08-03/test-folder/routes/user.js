const express = require('express');
const router = express.Router();

let { user } = require('../library');

router.get('/api/user', (req, res)=>{
    res.status(200).json({success: true, library: user})
});

router.post('/api/user', (req, res)=>{
    const { name } = req.body;
    if (!name) {
        return  res
                .status(400)
                .json({success: false, msg: "Please provide a name." });
    }
    
    res
    .status(201)
    .send({success: true, msg: `Welcome ${name}`})
});

module.exports = router;
