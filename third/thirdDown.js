var main = document.getElementById("thirdDown")
var mainctx = main.getContext("2d");

var mainTiled = {
    url: "./img/thirdDown.png",
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


