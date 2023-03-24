const mainCanvas = document.getElementById("canvas");
const context = mainCanvas.getContext("2d");

let initialX;
let initialY;
let colorElegido = 'rgb(8, 8, 8)';
  
const dibujar = (cursorX, cursorY, color) => {
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineWidth = 10;
  context.strokeStyle = color;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();

  initialX = cursorX;
  initialY = cursorY;
}
  
const dibujarPunto = (cursorX, cursorY, color) => {
  context.beginPath();
  context.moveTo(cursorX, cursorY);
  context.lineWidth = 10;
  context.strokeStyle = color;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();
}
  
  
const mouseDown = (evt) =>{
  initialX = evt.offsetX;
  initialY = evt.offsetY;

  dibujarPunto(evt.offsetX, evt.offsetY, colorElegido );
  socket.emit('coordinatePoint', evt.offsetX, evt.offsetY, colorElegido);

  mainCanvas.addEventListener("mousemove", mouseMoving);
}

const mouseMoving = (evt) => {
  socket.emit('coordinateSlider', evt.offsetX, evt.offsetY, colorElegido);
  dibujar(evt.offsetX, evt.offsetY, colorElegido);  
}
  
const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
}
  
mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp)




function CambiarColor(color, typeButton){
  colorElegido = color;
  document.querySelector("#puntoDeColor").style.backgroundColor = colorElegido;
  //document.querySelectorAll("#buttonBlack #buttonRed #buttonBlue #buttonGreen #buttonDraft").style.backgroundColor = colorElegido;
  document.querySelector("#buttonBlack").style.backgroundColor = "#1f2937";
  document.querySelector("#buttonRed").style.backgroundColor = "#1f2937";
  document.querySelector("#buttonBlue").style.backgroundColor = "#1f2937";
  document.querySelector("#buttonGreen").style.backgroundColor = "#1f2937";
  document.querySelector("#buttonDraft").style.backgroundColor = "#1f2937";
  document.querySelector(`#${typeButton}`).style.backgroundColor = colorElegido;
}