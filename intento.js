var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';

       // console.log(map)
    
}


let combinaciones = [];
document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("keyup", limpiar);

function dibujarTeclado(evento){
    combinaciones.push(evento.keyCode)
    console.log("down")
    console.log(combinaciones)
}

function limpiar(){
    combinaciones = [];
    console.log("up")
    console.log(combinaciones)
}
