var main = document.getElementById("down")
var mainctx = main.getContext("2d");

var victory = document.getElementById("victory")
victory.volume = 0.3;
var defeat = document.getElementById("defeat")
defeat.volume = 0.3;
var audio = document.getElementById("audio");
audio.volume = 0.5;

var mainTiled = {
    url: "./img/down.png",
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
        window.location="../second/secondDown.html";
    }
    // left
    if(x >= 0 && x <= 6 && y <= 250 && y >= 200 ){
        window.location="../third/thirdDown.html";
    }
    //cofre
    if(x >= 220 && x <= 265 && y <= 500 && y >= 425 ){
        answer = prompt("¡Cuanto es: nueve mil noventa y nueve, mas uno? (escribir el numero)")
        if (answer == "9100") {
            victory.play();
            alert("Tercer numero: 2")
        }else{
            defeat.play();
            alert("Incorrecto")
        }
    }
}


