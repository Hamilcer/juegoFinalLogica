var main = document.getElementById("secondDown")
var mainctx = main.getContext("2d");

var victory = document.getElementById("victory")
victory.volume = 0.3;
var defeat = document.getElementById("defeat")
defeat.volume = 0.3;
var audio = document.getElementById("audio");
audio.volume = 0.2;

var mainTiled = {
    url: "./img/secondDown.png",
    cargaOK: false
};

var player = {
    url: "../player/player.png",
    cargaOK: false
};


mainTiled.imagen = new Image();
mainTiled.imagen.src = mainTiled.url;
mainTiled.imagen.addEventListener("load", cargarMainTiled);

player.imagen = new Image();
player.imagen.src = player.url
player.imagen.addEventListener("load", cargarPlayer);


function cargarMainTiled()
{
    mainTiled.cargaOK = true;
    dibujar();
}

function cargarPlayer()
{
    player.cargaOK = true;
    dibujar();
}


function dibujar(x = 235, y = 230)
{
    if (mainTiled.cargaOK)
    { 
        mainctx.drawImage(mainTiled.imagen, 0, 0);
    }
    if (player.cargaOK)
    {
        mainctx.drawImage(player.imagen, x, y);
    }

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


