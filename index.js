const five = require('johnny-five');
const board = new five.Board(); //declaramos una constante que contendra la info. de nuestra tarjeta, en este caso arduino uno

const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server);

app.use('/led_control', express.static('public') );

board.on('ready', () => {
    //declaración de la constante led, inidicandole que está conectado al pin #13.
    const led = new five.Led(13);

    io.on('connection', client => {
        client.on('onOff', () => {
            led.toggle();
        });
    });
    
});

server.listen(3000, () => {
    console.log('conection up!');
});
