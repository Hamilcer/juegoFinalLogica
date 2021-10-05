var second = document.getElementById("second")
var secondctx = second.getContext("2d");


var secondTiled = {
    url: "./second/second.png",
    cargaOK: false
};

;

var player = {
    url: "./player/player.png",
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



function dibujar(xc = 235, yc = 230)
{
    //console.log("xc, yc")
    //console.log(xc, yc)
    if (secondTiled.cargaOK)
    { 
        secondctx.drawImage(secondTiled.imagen, 0, 0);
    }
    if (player.cargaOK)
    {
        secondctx.drawImage(player.imagen, xc, yc);
    }
}



///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};


document.addEventListener("keydown", update);



var x = 235;
var y = 230;

function update(event){

    
    //combinations.push(event.keyCode)
    //var color = "blue";
    var move = 5;
    
    //console.log(second.width)
        if (x > 0 && x < second.width-61 && y > 0 && y < second.height-66) {
            
            switch(event.keyCode) {
                case keys.UP:
                    y = y - move
                    dibujar(x, y);
                break;
                case keys.DOWN:
                    y = y + move
                    dibujar(x, y);
                break;
                case keys.LEFT:
                    x = x - move
                    dibujar(x, y);
                break;
                case keys.RIGHT:
                    x = x + move
                    dibujar(x, y);
                break; 
    
            }    
    
        }else{
            // Evitar que el codigo se rompa poir desbodamiento 
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
        console.log(x, y)
        // down
        if(x >= 220 && x <= 265 && y <= 500 && y >= 425 ){
            window.location="./secondDown.html";
        }
        // left
        if(x >= 0 && x <= 6 && y <= 250 && y >= 200 ){
            window.location="./main.html";
        }
        //cofre
        if(x >= 430 && x <= 500 && y <= 250 && y >= 215 ){
            answer = prompt("Cuanto es 2+2x2")
            if (answer == "6") {
                alert("Primer numero: 8")
            }else{
                alert("Incorrecto")
            }
        }
    }


