var main = document.getElementById("secondDown")
var mainctx = main.getContext("2d");

var mainTiled = {
    url: "./img/secondDown.png",
    cargaOK: false
};


mainTiled.imagen = new Image();
mainTiled.imagen.src = mainTiled.url;
mainTiled.imagen.addEventListener("load", cargarMainTiled);


function cargarMainTiled()
{
    mainTiled.cargaOK = true;
    dibujar();
}


function verificar(x = 235, y = 230)
{
    // up
    if(x >= 200 && x <= 250 && y <= 20 && y >= 0 ){
        window.location="./second.html";
    }
    // left
    if(x >= 0 && x <= 6 && y <= 250 && y >= 200 ){
        window.location="../down/down.html";
    }
    //cofre
    if(x >= 415 && x <= 500 && y <= 235 && y >= 200 ){
        answer = prompt("Cual es el residuo de 520 ÷ 61")
        if (answer == "32") {
            victory.play();
            alert("Cuarto numero: 1")
        }else{
            defeat.play();
            alert("Incorrecto")
        }
    }
}


