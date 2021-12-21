'use strict'

window.addEventListener('load',() => { 

    function intervalo() {


            // Timers
            let tiempo = setInterval(() => {
                console.log("SetInterval Ejecutado");
                
            let tt = document.querySelector("#title");
                if (tt.innerHTML == "Juan Diego Gómez Ruiz"){
                    tt.innerHTML = "Master en JavaScript";
                }else{
                    tt.innerHTML = "Juan Diego Gómez Ruiz";
                }
    },1000);
    return tiempo;
    }
    let tiempo = intervalo();

    // stop
    let stop = document.querySelector("#stop");

    stop.addEventListener("click", () => {
        alert("Paraste el Bucle");
        clearInterval(tiempo);

    });

    // start
    let start = document.querySelector("#start");

    start.addEventListener("click", () => {
        console.log("Iniciaste el bucle")
        intervalo();
    });
});