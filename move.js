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

    var move = 5;
    
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
