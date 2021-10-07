var main = document.getElementById("third")
var mainctx = main.getContext("2d");

var victory = document.getElementById("victory")
victory.volume = 0.3;
var defeat = document.getElementById("defeat")
defeat.volume = 0.3;
var audio = document.getElementById("audio");
audio.volume = 0.2;

var mainTiled = {
    url: "./img/third.png",
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
    
    // right
    if(x >= 435 && x <= main.width && y <= 240 && y >= 185 ){
        window.location="../main/main.html";
    }
    //down
    if(x >= 185 && x <= 245 && y <= 500 && y >= 404 ){
        window.location="./third/thirdDown.html";
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


