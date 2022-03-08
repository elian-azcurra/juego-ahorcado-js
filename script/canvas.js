var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
//Para evitar que se desenfoque
pantalla.width = window.innerWidth;
pantalla.height = window.innerHeight;

//Reglas
/*
function dibujarReglas(x,y) {
    var x = 25,
        y = 55,
        espaciado = 55;
        pincel.fillStyle = "gold";
        pincel.fillText("REGLAS:",x,y);
        pincel.fillText("1. Si previamente al juego, deseas agregar una nueva palabra a la lista de palabras originales",x,y + espaciado);
        pincel.fillText("a adivinar, puedes hacerlo escribiendo en el box correspondiente y dando click en el botón",x,y + espaciado*2);
        pincel.fillText("AGREGAR PALABRA.",x,y + espaciado * 3);
        pincel.fillText("2. Luego del paso previo, puedes comenzar a jugar dando click en el boton INICIAR JUEGO",x,y + espaciado * 4);
        pincel.fillText("3. Recuerda SOLO usar letras de tu teclado para completar el juego y poder ganar.",x,y + espaciado * 5);
        pincel.fillText("    Solo tendrás nueve intentos para adivinar (no se contabilizan las letras repetidas y/o los ",x,y + espaciado * 6);
        pincel.fillText("    caracteres o teclas que NO son letras.",x,y + espaciado * 7);
        pincel.fillText("4.- Cuando finalice el juego, recibirás un mensaje de victoria o derrota. Para volver a jugar, es ",x,y + espaciado * 8);
        pincel.fillText("      IMPORTANTE darle click al botón",x,y + espaciado * 9);
        pincel.fillText("      REINICIAR JUEGO* que aparecerá al final, o puedes volver a cargar la página con el botón",x,y + espaciado * 10);
        pincel.fillText("      actualizar del navegador.",x,y + espaciado * 11);

}
*/
//Triángulo de base

pincel.lineWidth = 12;

function dibujarBase() {

    pincel.beginPath();
    pincel.moveTo(10,800);
    pincel.lineTo(510,800);
    pincel.lineTo(260,750);
    pincel.stroke();
    pincel.closePath();
    pincel.stroke();
    pincel.fillStyle = "brown";
    pincel.fillRect(10,800,500,120);
    pincel.strokeRect(10,800,500,120);

}

//Poste

function columna() {

    pincel.beginPath();
    //Línea del medio
    pincel.moveTo(260,750);
    pincel.lineTo(260,100);
    pincel.stroke();
    //Linea izquierda
    pincel.moveTo(10,800);
    pincel.lineTo(260,100);
    pincel.stroke();
    //Línea derecha
    pincel.moveTo(510,800);
    pincel.lineTo(260,100);
    pincel.stroke();

}

//Parte de arriba del ahorcado
function columnaArriba() {

    pincel.fillStyle = "brown";
    pincel.arc(260,100,10,0,2*Math.PI);
    pincel.fillRect(258,90,450,20);
    pincel.fill();

}

//Soga
function soga() {

    pincel.fillStyle = "white";
    pincel.fillRect(684,100,15,200);

}

//Cabeza
function cabeza() {

    pincel.beginPath();
    pincel.arc(694,340,40,0,2*3.1416);
    pincel.stroke();

}

//Tronco
function cuerpo() {

    pincel.beginPath();
    pincel.moveTo(694,380);
    pincel.lineTo(694,600);
    pincel.stroke();

}


//Pierna izquierda
function piernaIzq() {

    pincel.beginPath();
    pincel.moveTo(694,600);
    pincel.lineTo(644,720);
    pincel.stroke();

}

//Pierna derecha
function piernaDer() {

    pincel.beginPath();
    pincel.moveTo(694,600);
    pincel.lineTo(744,720);
    pincel.stroke();

}

//Brazo izquierdo
function brazoIzq() {

    pincel.beginPath();
    pincel.moveTo(694,450);
    pincel.lineTo(640,540);
    pincel.stroke();

}

//Brazo derecho
function brazoDer() {
    
    pincel.beginPath();
    pincel.moveTo(694,450);
    pincel.lineTo(748,540);
    pincel.stroke();

}

function caritaWin() {

    pincel.beginPath();
	pincel.arc(1350,400,350,0.4 * Math.PI,0.6 * Math.PI);
    pincel.moveTo(1300,550);
    pincel.lineTo(1300,700);
    pincel.moveTo(1400,550);
    pincel.lineTo(1400,700);
    pincel.stroke();

}

function caritaFinish() {

    pincel.beginPath();
    pincel.moveTo(674,325);
    pincel.lineTo(714,340);
    pincel.moveTo(674,340);
    pincel.lineTo(714,325);
    pincel.moveTo(670,360);
    pincel.lineTo(718,360);
    pincel.lineWidth = 5;
    pincel.stroke();

}

function caritaSuerte() {
    pincel.fillRect(1370,570,20,5);
    pincel.beginPath();
    pincel.arc(1410,575,5,0,2*Math.PI);
    pincel.fill();
    pincel.stroke();
    pincel.closePath();
    pincel.beginPath();	  
	pincel.arc(1395,520,80, 0.4*Math.PI, 0.6*Math.PI)
	pincel.stroke();
}

	