var main = document.getElementById("main")
var mainctx = main.getContext("2d");

var mainTiled = {
    url: "./img/main.png",
    cargaOK: false
};


mainTiled.imagen = new Image();
mainTiled.imagen.src = mainTiled.url;
mainTiled.imagen.addEventListener("load", cargarMainTiled);


function cargarMainTiled()
{
    mainTiled.cargaOK = true;
    dibujar();
}


function verificar(x = 235, y = 230)
{
    // right
    if(x >= 435 && x <= main.width && y <= 260 && y >= 230 ){
        window.location="../second/second.html";
    }
    // left
    if(x >= 0 && x <= 6 && y <= 250 && y >= 200 ){
        window.location="../third/third.html";
    }
    //cofre GANO
    if(x >= 210 && x <= 235 && y <= 4 && y >= 0 ){
        code = prompt("¿Cuál es el código")
        if (code == '83210') {
            victory.play();
            main.remove();
            document.getElementById("winimg").innerHTML='<img src="./img/win.gif"/ height="250">'; 
            document.getElementById("wintext").innerHTML='<h1>Ganaste!</h1>'; 
        }else{
            defeat.play();
            alert("Incorrecto")
        }
    }
}
    
    
    
    