const socket = io();

// Escuchar el evento 'connect' para saber cuándo se ha establecido la conexión
socket.on('connect', () => {
    console.log('Conectado al servidor');
});

// Escuchar el evento 'disconnect' para saber cuándo se ha perdido la conexión
socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

// Escuchar el evento 'error' para saber cuándo ha ocurrido un error en la conexión
socket.on('error', (error) => {
    console.log(`Error en la conexión: ${error}`);
});



//Cuando un cliente externo envie datos a coordinatePoint este emitira ESTE evento para que cliente pueda ver los datos del cliente externo
socket.on('dibujarSlider', (x , y, color) => {
    dibujar(x, y, color);
});

//Cuando un cliente externo envie datos a coordinatePoint este emitira ESTE evento para que cliente pueda ver los datos del cliente externo
socket.on('dibujarPoint', (x , y, color) => {
    dibujarPunto(x, y, color);

    //regresa a undefined para que el proximo click no tenga los datos anteriores, y no se genere una linea extrania entre en antiguo dato y el nuevo click
    initialX = undefined;
    initialX = undefined;
});
