var main = document.getElementById("second")
var secondctx = main.getContext("2d");

var victory = document.getElementById("victory")
victory.volume = 0.3;
var defeat = document.getElementById("defeat")
defeat.volume = 0.3;
var audio = document.getElementById("audio");
audio.volume = 0.8;

var secondTiled = {
    url: "./img/second.png",
    cargaOK: false
};
var player = {
    url: "../player/player.png",
    cargaOK: false
};


secondTiled.imagen = new Image();
secondTiled.imagen.src = secondTiled.url;
secondTiled.imagen.addEventListener("load", cargarMainTiled);

player.imagen = new Image();
player.imagen.src = player.url
player.imagen.addEventListener("load", cargarPlayer);


function cargarMainTiled()
{
    secondTiled.cargaOK = true;
    dibujar();
}

function cargarPlayer()
{
    player.cargaOK = true;
    dibujar();
}


function dibujar(x = 235, y = 230)
{
    if (secondTiled.cargaOK)
    { 
        secondctx.drawImage(secondTiled.imagen, 0, 0);
    }
    if (player.cargaOK)
    {
        secondctx.drawImage(player.imagen, x, y);
    }

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



