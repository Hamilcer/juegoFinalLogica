var main = document.getElementById("third")
var mainctx = main.getContext("2d");

var mainTiled = {
    url: "./img/third.png",
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
    // right
    if(x >= 435 && x <= main.width && y <= 240 && y >= 185 ){
        window.location="../main/main.html";
    }
    //down
    if(x >= 185 && x <= 245 && y <= 500 && y >= 404 ){
        window.location="./thirdDown.html";
    }
    // cofre
    if(x >= 0 && x <= 15 && y <= 245 && y >= 200 ){
        answer = prompt("Escriba un numero menor a, menos cinco")
        if (answer < -5) {
            victory.play();
            alert("Segundo numero: 3")
        }else{
            defeat.play();
            alert("Incorrecto")
        }
    }
}


