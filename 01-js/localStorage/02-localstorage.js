'use strict'

// LOCALSTORAGE
    let nuevotitulo = document.querySelector("#titulo")
// COMPROBACION DE LOCALSTORAGE
    if(typeof(Storage) !== undefined){
        console.log("LocalStorage Compatible")
    }else{
        console.log("Incompatible LocalStorage")
    }

    // Guardar Datos 
    localStorage.setItem("titulo","Bienvenidos Developers");

    // Recuperar elemento
    nuevotitulo.innerHTML = localStorage.getItem("titulo");

    // Guardar Objeto
    let usuario = {
        nombre: "Juan Diego",
        email: "juandieruiz@protonmail.com",
        web: "juandieruiz.dev"
    };

    localStorage.setItem("usuario",JSON.stringify(usuario));

    // Recuperar Objeto
    let userJs = JSON.parse(localStorage.getItem("usuario"));

    document.querySelector("#datos").append(userJs.nombre + " - " + userJs.email);

    // localStorage.clear();