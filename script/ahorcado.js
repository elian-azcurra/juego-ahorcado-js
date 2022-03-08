// Definiendo CANVAS
var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");
    pincel.font = "bold 35px verdana";


// Lista de palabras
var palabras = ["ALURA","ORACLE","ONE"];

// SORTEO lista de palabras
function sortear(){
    var aleatorio = Math.round(Math.random()*(palabras.length-1));
    var palabraSorteada = palabras[aleatorio];
    return palabraSorteada;
}


// Guiones para palabra sorteada
function guiones(palabra) {
    for (var index = 0; index < palabra.length; index++) {
        pincel.beginPath();
        pincel.moveTo((1200+50*index),160);
        pincel.lineTo((1230+50*index),160);
        pincel.stroke();
    }
}


// Verificar que la nueva palabra sea válida
function verificarDatos(texto) {
    var myRegex = /[^A-ZÑ\s]/g;
    var result = myRegex.test(texto);

    if (result) {
        alert("No se permiten vocales con tilde ni caracteres especiales");
        return false;
    }
    else {
        return true;
    }
};


// AGREGAR NUEVA PALABRA EN LISTA
var nuevaPalabra = document.querySelector("#nueva-palabra");

function agregarPalabra() {
    var capturarPalabra = document.querySelector("#input-nueva-palabra");
    var palabraCapturada = capturarPalabra.value.toUpperCase(); 

    if (capturarPalabra.value != "") {    
        if (verificarDatos(palabraCapturada)) {
            if (!palabras.includes(palabraCapturada)) {
                palabras.push(palabraCapturada);
            }
            else {
                alert("Esta palabra YA está ingresada");    
            }
        }

        capturarPalabra.value = "";
    }

    else {
        alert("Recuerda ingresar una nueva palabra en el recuadro");
    }
}

nuevaPalabra.onclick = agregarPalabra;


// JUEGO DEL AHORCADO
var numNoAgrup;
var agrupados;
var numAgrup;

var jugar = document.querySelector("#iniciar-juego");

jugar.addEventListener("click",function(){

    numNoAgrup = 0;
    agrupados = [];
    numAgrup = 0;

    pincel.clearRect(0,0,pantalla.width,pantalla.height);
    dibujarBase();
    var palabraAhorcado = sortear();
    guiones(palabraAhorcado);

    document.addEventListener('keydown',function(event){
        const keyName = event.key;
        var patron = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
        letra = keyName.toUpperCase();
        var palabraAhorcadoString = palabraAhorcado.split("");
    
        var coordX = 750,
            coordY = 50;
           
        if (patron.includes(letra)) {

            if (!agrupados.includes(letra)) {

                for (var index = 0; index < palabraAhorcadoString.length; index++) {
                    if (letra == palabraAhorcadoString[index]) {
                        pincel.fillStyle = "gold";
                        pincel.fillText(letra,(1200+50*index),150);
                        numAgrup = numAgrup + 1;
                    }
                }
                
                if (numAgrup == palabraAhorcadoString.length) {
                    pincel.fillStyle = "green";
                    pincel.fillText("¡¡GANASTE!! Bien ahi",1200,400);
                    pincel.clearRect(0,0,800,pantalla.height);
                    caritaWin();
                    reiniciar.classList.remove("invisible");
                }
                
                if (!palabraAhorcado.includes(letra)) {
                    if (numNoAgrup == 0) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(coordX+50*numNoAgrup),coordY);
                        columna();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 1) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(coordX+50*numNoAgrup),coordY);
                        columnaArriba();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 2) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(coordX+50*numNoAgrup),coordY);
                        soga();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 3) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(coordX+50*numNoAgrup),coordY);
                        cabeza();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 4) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(coordX+50*numNoAgrup),coordY);
                        cuerpo();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 5) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(coordX+50*numNoAgrup),coordY);
                        piernaIzq();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 6) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(coordX+50*numNoAgrup),coordY);
                        piernaDer();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 7) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(coordX+50*numNoAgrup),coordY);
                        brazoIzq();
                        numNoAgrup = numNoAgrup + 1;
                    }
                    else if (numNoAgrup == 8) {
                        pincel.fillStyle = "red";
                        pincel.fillText(letra,(coordX+50*numNoAgrup),coordY);
                        brazoDer();
                        pincel.fillStyle = "red";
                        pincel.fillText("GAME OVER",750,400);
                        pincel.strokeStyle = "red";
                        caritaFinish();
                        pincel.fillText("Más suerte para la próxima",800,600);
                        caritaSuerte();
                        reiniciar.classList.remove("invisible");
                    }
                }

                agrupados.push(letra);
            }
            
            else {
                alert("Por favor NO repetir letras ya seleccionadas");
            }
        }

        else {
            alert("Por favor SOLO usar letras");
        }        

    });

});

var reiniciar = document.querySelector("#reiniciar-juego");

reiniciar.addEventListener("click",function() {

    location.reload();

        }
    )
;