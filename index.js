// implement your API here
const db = require('./data/db');
const express = require('express');
const server = express();
const port = 8000;

server.listen(port, () => console.log(`API running on port ${port}`))