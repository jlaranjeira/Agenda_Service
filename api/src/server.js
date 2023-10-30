require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/', routes);
server.use(express.json());

server.use((req, res, next) => {
    res.header("Acess-Control-Allow-Headers", "Content-Type");
    server.use(cors());
    next()
});

server.listen(process.env.PORT,()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});

