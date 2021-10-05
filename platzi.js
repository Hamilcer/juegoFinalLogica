var vp = document.getElementById("villaplatzi")
var papel = vp.getContext("2d");


var fondo = {
    url: "./img/tile.webp",
    cargaOK: false
};

var vaca = {
    url: "./img/vaca.webp",
    cargaOK: false
};

var cerdo = {
    url: "./img/cerdo.webp",
    cargaOK: false
};

var pollo = {
    url: "./img/pollo.webp",
    cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url
pollo.imagen.addEventListener("load", cargarPollos);


function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}


function dibujar(xc = 150, yc = 150)
{
    if (fondo.cargaOK)
    { 
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK)
    { 
        var cantidad = 1 // aleatorio(0,50)
        for ( var v=0; v<cantidad; v++)
        {
            var x = 250//aleatorio(0, 7);
            var y = 250//aleatorio(0, 7);
            //var x = x * 60;
            //var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (cerdo.cargaOK) 
    {
        papel.drawImage(cerdo.imagen, xc, yc);
    }
}



/* function aleatorio(min, max) 
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}
 */
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

let combinations = [];

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("keyup", limpiar);



var x = 150;
var y = 150;

function dibujarTeclado(event){

    
    //combinations.push(event.keyCode)
    console.log(combinations)
    
    //var color = "blue";
    var move = 5;
    //Hacer que funcionen ambas al tiempo 
    
    //for (i in combinations) {
        if (x > 0 && x < vp.width-80 && y > 0 && y < vp.height-70) {
    
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
            }else if (x >= 420){
                x = 419
            }
            if(y <= 0) {
                y = 1
            }else if (y>=430){
                y = 429
            }



/*             switch(x) {
                case 0:
                    x = 1
                break;
                case 420:
                    x = 419
                break;
            }
            switch(y) {
                case 0:
                    y = 1
                break;
                case 420:
                    y = 419
                break;
            } */
        }
      /*   if (combinations.length > 2){
            break;
        } */
        console.log(x, y)
        if(x <= 1 && y <= 1){
            window.location="./flechas.html";
            // alert("pista")
        }
    }
    //combinations = [];
//}



function limpiar(){
    //combinations = [];
}


