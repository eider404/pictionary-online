const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server);


app.use(express.static('public'));


io.on('connection', (socket) => {
  console.log(`El cliente ${socket.id} se a conectado`);

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});


server.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
}); 
