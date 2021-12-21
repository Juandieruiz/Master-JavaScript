$(document).ready(function(){

    // TODO:Load
    // cargamos el contenido de la página
    // $("#datos").load("https://reqres.in/");

    // TODO:Get
    // Obtener datos de una página
    $.get("https://reqres.in/api/users", {page: 2}, function(response) {
    response.data.forEach((element, index) => {
        $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>");
        });
    });


//  Capturamos el evento click del boton
    $("#formulario").submit(function(e){
        // Prevenimos el comportamiento por defecto del formulario
        e.preventDefault();
        // Capturamos el valor del input
        let usuario = {
            
            name: $("input[name='name']").val(),
            web: $("input[name='web']").val()
        };
        console.log(usuario);

    // TODO:Metodo Post normal
        // enviar los datos al servidor
        // $.post($(this).attr("action"),usuario, function(response){
        //     console.log(response);
        //     // si el servidor nos devuelve una respuesta
        // }).done(function(){
        //     alert("Usuario añadido correcto");
        // });

        // TODO:Metodo POST por AJAX
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("A ocurrido un error")
            },
            timeout: 2000
        })

        return false;
    });

});
