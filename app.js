const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server);

const router = require('./src/routes');


app.use(express.static('public'));


io.on('connection', (socket) => {
  console.log(`El cliente ${socket.id} se ha conectado :)`);

  //recibe las coordenadas del plano a pintar y un color
  //este evento es para recibir las coordenadas (Al mover el puntero) emitidas por un cliente y este evento se lo envia a los otros clientes
  socket.on('coordinateSlider', (x, y, color) => {
    /* console.log(`${x} / ${y} / ${color}`); */
    io.emit('dibujarSlider', x , y , color);  
  });

  
  //este evento es para recibir las coordenadas (Al hacer Click) emitidas por un cliente y este evento se lo envia a los otros clientes
  socket.on('coordinatePoint', (x, y, color) => {
    /* console.log(`${x} / ${y} / ${color}`); */
    io.emit('dibujarPoint', x , y, color);  
  });


  socket.on('disconnect', () => {
    console.log(`El cliente ${socket.id} se ha desconectado :(`);
  });
});


app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/',router);


server.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
}); 
