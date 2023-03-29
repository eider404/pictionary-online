# Pictionary Online 🎨 🖋
### 💥 [Ver pagina](https://pictionary-online.fly.dev/ "VER PAGINA") 💥

Este proyecto es una versión en línea del popular juego de mesa Pictionary. Utiliza la biblioteca de Node.js socket.io para permitir que varios usuarios jueguen simultáneamente desde diferentes dispositivos.

## Cómo funciona? ✨
Los usuarios se unen a una sala de juego y un usuario inicia una partida, este usuario genera el nombre de un animal de manera aleatoria con el botón "Generar Animal"  y posteriormente dibuja en la pantalla mientras los demás jugadores tratan de adivinar el animal. 
Los jugadores pueden enviar sus respuestas a través de un formulario y al verificar la respuesta mostrará un mensaje si la palabra es la correcta o no.

![Drawing a Starfish](https://s2.gifyu.com/images/pictionary-online.gif)

## Tecnologías utilizadas 👾  🤖
- **socket.io**: biblioteca de Node.js para la comunicación en tiempo real entre clientes y servidor.

- **Node.js (18.12 versión)**: plataforma de servidor utilizada para ejecutar el código JavaScript.

- **Express**: framework web utilizado para crear el servidor HTTP.

- **Tailwindcss, HTML, CSS y JavaScript**: lenguajes utilizados para la creación de la interfaz de usuario.

## Instalación y ejecución 🔥

1. Clonar este repositorio en su máquina local.
2. Instalar las dependencias con el comando npm install.
3. Ejecutar el servidor con el comando:
```javascript
node app.js
```

4. Acceder a la aplicación a través del navegador web en http://localhost:3000.

