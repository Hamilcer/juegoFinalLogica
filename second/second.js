var main = document.getElementById("second")
var mainctx = main.getContext("2d");

var mainTiled = {
    url: "./img/second.png",
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
    // down
    if(x >= 220 && x <= 265 && y <= 500 && y >= 425 ){
        window.location="./secondDown.html";
    }
    // left
    if(x >= 0 && x <= 6 && y <= 250 && y >= 200 ){
        window.location="../main/main.html";
    }
    //cofre
    if(x >= 430 && x <= 500 && y <= 250 && y >= 215 ){
        answer = prompt("Cuanto es 2+2x2")
        if (answer == "6") {
            victory.play();
            alert("Primer numero: 8")
        }else{
            defeat.play();
            alert("Incorrecto")
        }
    }
}



