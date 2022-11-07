//variables donde seleccionamos el id del elemento html

let contenedor = document.querySelector("#contenedor");
let jugador = document.querySelector("#jugador");
let bloque = document.querySelector("#bloque");
let suelo = document.querySelector("#suelo");
let nubes = document.querySelector("#nubes");
let puntuacion = document.querySelector("#puntuacion");
let gameOver = document.querySelector("#gameOver");

let intervalo = null;
let puntuacionJugador = 0;

let puntuacionCounter = ()=>{
    puntuacionJugador++;
    puntuacion.innerHTML = `Puntuación <b>${puntuacionJugador}</b>`;
    

}


//START 




//FUNCIÓN FLECHA PARA ACTIVAR EL JUEGO EN EL MOMENTO QUE SE PRESIONE LA TECLA ESPACIO

window.addEventListener("keydown", (start)=>{
    //console.log(start);

    if (start.code == "Space"){
        gameOver.style.display ="none";
        bloque.classList.add("bloqueActivo");
        suelo.firstElementChild.style.animation = "sueloAnimate 1.5s linear infinite";
        nubes.firstElementChild.style.animation = "nubesAnimate 50s linear infinite";
        //puntuacion
        let puntuacionJugador = 0; 
        intervalo = setInterval(puntuacionCounter, 200);
        
        
    }
})

//SALTO DEL PERSONAJE
//CUANDO SE PRESIONA LA TECLA HACIA ARRIBA CAMBIAMOS LA CLASE DEL PERSONAJE PARA SIMULAR EL SALTO
window.addEventListener("keydown", (e)=>{
    //console.log(e.key);

    if (e.key == "ArrowUp"){
        //console.log("ha entrado");
        if(jugador.classList != "jugadorActivo"){
            jugador.classList = "jugadorActivo";
            // borramos la clase despues de 0.5 sg
            setTimeout(()=>{
            jugador.classList.remove("jugadorActivo");
            },500);
        }

    }

});

//GameOver SI EL PERSONAJE COLISIONA CON EL BLOQUE

let result = setInterval(()=>{
    let jugadorBottom = parseInt (getComputedStyle(jugador).getPropertyValue("bottom"));
    //console.log("jugadorBotton" + jugadorBottom);

    let bloqueLeft = parseInt (getComputedStyle(bloque).getPropertyValue("left"));
    //console.log("bloqueLeft" + bloqueLeft);


    //GAME OVER - Si el personaje impacta con el bloque 

    if (jugadorBottom <= 90 && bloqueLeft >=20 && bloqueLeft <=145 ) {
//        console.log("GameOver");

        
        gameOver.style.display = "bloque";
        bloque.classList.remove("bloqueActivo");
        suelo.firstElementChild.style.animation = "none";
        nubes.firstElementChild.style.animation = "none";
        clearInterval(intervalo);
        puntuacionJugador = 0;
    }

},10);




