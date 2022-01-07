'use strict'

window.addEventListener("load",() =>{
    console.log('Ejecutando DOM');
       
//   let input = document.querySelector("#nombre");
//   input.addEventListener("blur", function () {
//       input.style.border = "2px solid red";
//       console.log("[blur]Estas fuera del input");
//   });
    // Variables declaradas
    let formulario = document.querySelector("#formulario");
    let containerB = document.querySelector("#container-B");
    containerB.style.display = "none";

    //
    formulario.addEventListener('submit', () =>{
        console.log("Submit Ejecutado");

        // Datos

        let nombre = document.querySelector("#nombre").value;
        let apellidos = document.querySelector("#apellidos").value;
        let edad = parseInt(document.querySelector("#edad").value);

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("Nombre no válido");
            return false;
        }
        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Apellidos no válidos");
            return false;
        }
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("Edad no válida");
            return false;
        }

        containerB.style.display = "block";
        // TODO: Tipo 1 - Mostrar los datos por bucle
        // let data_user = [nombre,apellidos,edad];
        
        // for (const item in data_user) {
        //     let p = document.createElement("p");
        //     p.textContent = data_user[item];
        //     containerB.appendChild(p);
        // }
        // TODO: Tipo 2 - insertando elementos
        let p_nombre = document.querySelector("#p_nombre span");
        let p_apellidos = document.querySelector("#p_apellidos span");
        let p_edad = document.querySelector("#p_edad span");
        
        p_nombre.innerHTML = nombre;
        p_apellidos.textContent = apellidos;
        p_edad.textContent = edad;


        
    });
});