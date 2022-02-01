var canvas;
var ctx;
var clicado = false;
var cor = "#FF0000";
window.onload = init;

function init(){
canvas = document.getElementById("canvas0");
ctx = canvas.getContext("2d");

canvas.onmousedown = clicou;
canvas.onmouseup = desclicou;
canvas.onmousemove = moveu;

document.body.onkeydown = mudaCor;
}

function mudaCor(event){
 if(event.key == "r"){
   cor = "#FF0000";
 }
 if(event.key == "g"){
   cor = "#00FF00";
 }
 if(event.key == "b"){
   cor = "#0000FF";
 }
}

function moveu(event){
  if(clicado){
    var x = event.offsetX;
    var y = event.offsetY;
    console.log(x,y);
    //ctx.fillRect(x, y, 1, 1);
    ctx.strokeStyle = cor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo( x - event.movementX , y - event.movementY );
    ctx.lineTo(x, y);
    ctx.stroke();

  }
}

function clicou(){
  clicado = true; 
}

function desclicou(){
  clicado = false;
}
