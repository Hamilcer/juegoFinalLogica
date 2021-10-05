var main = document.getElementById("thirdDown")
var mainctx = main.getContext("2d");


var mainTiled = {
    url: "./third/thirdDown.png",
    cargaOK: false
};

;

var player = {
    url: "./player/player.png",
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



function dibujar(xc = 235, yc = 230)
{
    //console.log("xc, yc")
    //console.log(xc, yc)
    if (mainTiled.cargaOK)
    { 
        mainctx.drawImage(mainTiled.imagen, 0, 0);
    }
    if (player.cargaOK)
    {
        mainctx.drawImage(player.imagen, xc, yc);
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
    
    console.log(main.width)
        if (x > 0 && x < main.width-61 && y > 0 && y < main.height-66) {
            
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
        // right
        if(x >= 435 && x <= main.width && y <= 260 && y >= 230 ){
            window.location="./down.html";
        }
        // up
        if(x >= 200 && x <= 250 && y <= 20 && y >= 0 ){
            window.location="./third.html";
        }
        //cofre
        if(x >= 0 && x <= 6 && y <= 250 && y >= 200 ){
            answer = prompt("Cuando tenia 4 años mi hermano tenia la mitad de mi edad, ¿Cuantos años tiene mi hermano ahora que tengo 18?")
            if (answer == "16") {
                alert("Quinto numero: 0")
            }else{
                alert("Incorrecto")
            }
        }
    }


