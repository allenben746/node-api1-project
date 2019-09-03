// implement your API here
const db = require('./data/db');
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = 8000;
server.use(bodyParser());

server.listen(port, () => console.log(`API running on port ${port}`))

server.route('/api/users')
    .post((req, res) => {
        console.log(req.body);
        let user = req.body;
        if(!user.name || !user.bio){
            res.status(400).json({ errorMessage: "Name or bio missing - please try again."});
        } 
    })