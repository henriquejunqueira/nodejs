const http = require('http');
const express = require('express');
const aplicacao = express();
const endereco = '192.168.1.101'; // alterar valor pelo domínio

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

// Declaração de arrow function (funções seta)
io.addListener('connection', (socket) => {
    console.log('um usuário conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    })
})

aplicacao.use(express.static('public'));

//servidorHttp.listen(3000);
servidorHttp.listen(3000, {endereco});