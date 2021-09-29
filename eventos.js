var keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

let combinations = [];

document.addEventListener("keydown", dibujarTeclado);
//document.addEventListener("keyup", limpiar);

var canva = document.getElementById("area_de_dibujo");
var context = canva.getContext("2d");

var x = 150;
var y = 150;

dibujarLinea("red", x+1, y-1, x+1, y+1, context)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) { // el contexto es el lienzo
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujarTeclado(event){

    
    combinations.push(event.keyCode)
    console.log(combinations)
    
    var color = "blue";
    var move = 2;
    // Hacer que funcionen ambas al tiempo 
    
    for (i in combinations) {
        if (x > 0 && x < canva.width && y > 0 && y < canva.height) {
    
            switch(combinations[i]) {
                case keys.UP:
                    dibujarLinea(color, x, y,  x,  y - move, context);
                    y = y - move
                break;
                case keys.DOWN:
                    dibujarLinea(color, x, y,  x,  y + move, context);
                    y = y + move
                break;
                case keys.LEFT:
                    dibujarLinea(color, x, y,  x - move,  y, context);
                    x = x - move
                break;
                case keys.RIGHT:
                    dibujarLinea(color, x, y,  x  + move,  y, context);
                    x = x + move
                break; 
    
            }    
    
        }else{
            // Evitar que el codigo se rompa poir desbodamiento 
            switch(x) {
                case 0:
                    x = x + 1
                break;
                case 300:
                    x = x - 1
                break;
            }
            switch(y) {
                case 0:
                    y = y + 1
                break;
                case 300:
                    y = y - 1
                break;
            }
        }
        console.log(x, y)
    }
    combinations = [];
}



function limpiar(){
    //combinations = [];
}


///////////////////
/* 
document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento){
    console.log(evento.keyCode)
} */