'use strict';
console.log("Users en Fetch con Reqres.in");

// API REST : Servicio o Back-end que nos devuelve datos en JSON, Con todos lo metodos HTTP.
// Fetch(AJAX) y Peticiones a servicios ( apis rest )

// Variable para guardar los usuarios
let div_usuarios = document.querySelector("#usuarios");
let div_janet = document.querySelector("#janet");
let div_profesor = document.querySelector("#profesor");


// TODO:Funcion para convertir el objeto a JSON
    getUsuarios()
        .then(data  => data.json())
        .then(users => {
    listadoUsuarios(users.data);
    
        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;
        return getJanet();
    })
        .then(data => data.json())
        .then(user => {
    mostrarJanet(user.data)
    })
    .catch(error =>
        alert(error + " - Error en la peticion")
        );

// !Funcion para mostrar todos los usuarios
    function getUsuarios(){
    return fetch('https://reqres.in/api/users');
    }
// !Funcion para mostrar a un usuario especial
function getJanet(){
    return fetch('https://reqres.in/api/users/2');
}
// !Funcion para crear un nuevo usuario
function getInfo(){
    let profesor = {
        nombre: 'Juan Diego',
        apellido: 'Gomez',
        url: 'https://www.linkedin.com/in/juandieruiz/'
    };
    // !Devolvemos creando una promesa PROMISE CHAIN
    return new Promise((resolve, reject) => {
        // creamos una variable para guardar la peticion
        let profesor_string = "";
            setTimeout(() => {
            profesor_string = JSON.stringify(profesor);
        // si la variable es diferente de string, devolvemos un error
        if(typeof profesor_string != 'string' || profesor_string == '') reject('Error');
        // si no, devolvemos la promesa
        return resolve(profesor_string);
        },3000);
        
    });

}

// !Funcion para mostrar los usuarios
    function listadoUsuarios(usuarios) {
    // Recorremos el array de usuarios
        usuarios.map((user, i) =>{
            // Creamos el elemento
            let nombre = document.createElement('h2');
            // Le damos un contenido
            nombre.innerHTML = i + " . " + user.first_name + " " + user.last_name;
            // Lo añadimos al div
            div_usuarios.appendChild(nombre);
            // Mientras no hayamos añadido todos los usuarios, mostramos un mensaje
            document.querySelector(".loading").style.display = 'none';
        });
    }
// !Funcion Mostrar Janet
    function mostrarJanet(user) {
                // Creamos el elemento
                console.log(user);
                let nombre = document.createElement('h4');
                let avatar = document.createElement('img');
                // Le damos un contenido
                nombre.innerHTML = "Nombre: " + user.first_name + " " + user.last_name + " Email: " + user.email;
                avatar.src = user.avatar;
                avatar.width = '100';
                // Lo añadimos al div
                div_janet.appendChild(nombre);
                div_janet.appendChild(avatar);
                // Mientras no hayamos añadido todos los usuarios, mostramos un mensaje
                document.querySelector("#janet .loading").style.display = 'none';
            };
        
