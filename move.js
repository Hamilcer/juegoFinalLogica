var victory = document.getElementById("victory")
victory.volume = 0.09;
var defeat = document.getElementById("defeat")
defeat.volume = 0.07;
var audio = document.getElementById("audio");
audio.volume = 0.3;

var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", update);

var x = 235;
var y = 230;
var moving = false;
var img1 = false

function update(event){

    var move = 5;
    
    if (x > 0 && x < main.width-61 && y > 0 && y < main.height-66) {
        
        switch(event.keyCode) {
            case keys.UP:
                y = y - move
                dibujar(x, y);
                verificar(x, y);
            break;
            case keys.DOWN:
                y = y + move
                dibujar(x, y);
                verificar(x, y);
            break;
            case keys.LEFT:
                x = x - move
                dibujar(x, y);
                verificar(x, y);
            break;
            case keys.RIGHT:
                x = x + move
                dibujar(x, y);
                verificar(x, y);
            break; 
        }    
    }else{
        // Evitar que el codigo se rompa por desbodamiento 
        if(x <= 0){
            x = 1
        }else if (x >= 439){
            x = 438
        }
        if(y <= 0) {
            y = 1
        }else if (y>=430){
            y = 429
        }
    }
}


function dibujar(x = 235, y = 230)
{
    if (mainTiled.cargaOK)
    { 
        mainctx.drawImage(mainTiled.imagen, 0, 0);
    }
    if (player.cargaOK)
    {
        mainctx.drawImage(player.imagen, x, y)
    }
}

document.addEventListener("keydown", mover);

function mover()
{
    if (img1){
        mainctx.drawImage(player.imagen, x, y)
        img1 = false
    }else{
        mainctx.drawImage(player1.imagen, x, y)
        img1 = true
    } 
}

var player = {
    url: "../player/playermov2.png",
    cargaOK: false
};
var player1 = {
    url: "../player/playermov1.png",
    cargaOK: false
};


player1.imagen = new Image();
player1.imagen.src = player1.url
player1.imagen.addEventListener("load", cargarPlayer1);

player.imagen = new Image();
player.imagen.src = player.url
player.imagen.addEventListener("load", cargarPlayer);


function cargarPlayer1()
{
    player1.cargaOK = true;
}

function cargarPlayer()
{
    player.cargaOK = true;
    dibujar();
}