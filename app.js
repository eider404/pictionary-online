const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);



app.get('/', (req, res) => {
    console.log("Hi")
})


server.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
}); 
