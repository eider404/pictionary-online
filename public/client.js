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