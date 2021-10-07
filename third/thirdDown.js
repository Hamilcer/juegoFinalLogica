var main = document.getElementById("thirdDown")
var mainctx = main.getContext("2d");

var victory = document.getElementById("victory")
victory.volume = 0.3;
var defeat = document.getElementById("defeat")
defeat.volume = 0.3;
var audio = document.getElementById("audio");
audio.volume = 0.7;

var mainTiled = {
    url: "./img/thirdDown.png",
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
    if(x >= 435 && x <= main.width && y <= 260 && y >= 230 ){
        window.location="../down/down.html";
    }
    // up
    if(x >= 200 && x <= 250 && y <= 20 && y >= 0 ){
        window.location="./third.html";
    }
    //cofre
    if(x >= 0 && x <= 6 && y <= 250 && y >= 200 ){
        answer = prompt("Cuando tenia 4 años mi hermano tenia la mitad de mi edad, ¿Cuantos años tiene mi hermano ahora que tengo 18?")
        if (answer == "16") {
            victory.play();
            alert("Quinto numero: 0")
        }else{
            defeat.play();
            alert("Incorrecto")
        }
    }
}


