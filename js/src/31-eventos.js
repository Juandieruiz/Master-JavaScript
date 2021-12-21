"use strict";

// Evento Load (Se ejecuta cuando la pagina se ha cargado)

window.addEventListener("load", () => {

    // TODO: Eventos de teclado y mouse
    let caja = document.querySelector("#micaja");
    caja.innerHTML = "Eventos con Mouse:";

    // TODO:Eventos del ratón

    // !Manera Correcta de Hacer Eventos

    // Llamando al elemento por ID
    let boton = document.querySelector("#botonColor");

    // Agregandole la funcion a ejecutar con el addEventListener
    boton.addEventListener("click", function () {
        cambiarColor();
    });
    // Funcion a ejecutar esperando ser llamada por el addEventListener
    function cambiarColor() {
        console.log("Me has dado click");

        let bg = botonColor.style.background;
        if (bg == "green") {
        botonColor.style.background = "yellow";
        } else {
        botonColor.style.background = "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid #000 ";
        return true;
    }

    // Evento Mouse Over

    boton.addEventListener("mouseover", function () {
        this.style.background = "#ccc";
    });

    //Evento Mouse Out

    boton.addEventListener("mouseout", function () {
        this.style.background = "red";
    });

    // Evento Focus
    let input = document.querySelector("#campo_nombre");
    input.addEventListener("focus", function () {
        input.style.border = "2px solid blue";
        console.log("[focus]Estas dentro del input");
    });

    // Blur
    input.addEventListener("blur", function () {
        this.style.border = "2px solid red";
        console.log("[blur]Estas fuera del input");
    });

    // Evento Keydown
    input.addEventListener("keydown", function (event) {
        console.log(
        "[keydown]Estas pulsando la tecla" +
            " " +
            String.fromCharCode(event.keyCode)
        );
    });

    // Evento Keypress
    input.addEventListener("keypress", function (event) {
        console.log(
        "[keypress]Tecla Presionada" + " " + String.fromCharCode(event.keyCode)
        );
    });

    // Evento Keyup
    input.addEventListener("keyup", function (event) {
        console.log(
        "[keyup]Tecla Soltada" + " " + String.fromCharCode(event.keyCode)
        );
    });
});

// !Codigo Spagueti metiendo JS en Html
let botonalert = document.querySelector("#botonAlert");

function modoAlerta() {
  console.log("Modo Alerta");

  let ba = botonalert.style.background;

  if (ba == "black") {
    botonalert.style.background = "blue";
  } else {
    botonalert.style.background = "black";
  }
  return true;
  // 98qd*lsL0
}