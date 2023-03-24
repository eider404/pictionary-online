const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server);


app.use(express.static('public'));


io.on('connection', (socket) => {
  console.log(`El cliente ${socket.id} se ha conectado :)`);

  //recibe las coordenadas del plano a pintar y un color
  socket.on('coordinateSlider', (x, y, color) => {
    /* console.log(`${x} / ${y} / ${color}`); */
    io.emit('dibujar', x , y , color);  
  });



  socket.on('disconnect', () => {
    console.log(`El cliente ${socket.id} se ha desconectado :(`);
  });
});


server.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
}); 
