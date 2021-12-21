// $ y la Palabra JQuery son el objeto jQuery
// $ es una variable global
// ready es una función que se ejecuta cuando el documento está listo


$(document).ready(function() {
    console.log("Ejecutando JQuery");

    // Selector de ID
    $( "#rojo" ).css({ background : "red" })
    .css({ color : "white" });
    $( "#amarillo" ).css({ background: "yellow" })
    .css({ color : "grenn" });

    $( "#verde" ).css({ background: "green" })
    .css({ color : "white" });

    // TODO:Selector de clase
    let fondo = $( ".bordes").css({ "padding" : "10px" });
    
    $('.sin_borde').click(function() {
    console.log("Click en elemento sin borde");
        $(this).addClass("bordes");
    });

    // TODO:Selector de etiqueta
    let parrafos = $('p').css({ "cursor" : "pointer" });

    parrafos.click(function() {
        let that = $(this);
        if (!that.hasClass('grande')) {
            that.addClass('grande');
        
        }else{
            that.removeClass('grande');
        }

    });

    // TODO:Selector de atributo
    
    $('[title="Google"]').css({ background : "lightgreen" });
    $('[title="Facebook"]').css({ background : "lightblue" });


    // todo: Otros Selectores
    // $('p , a').addClass('margen-superior');

    
    // Find y Parent
    let busqueda = $('#elemento2').parent().parent().find('.resaltado');

    console.log(busqueda);
    busqueda.css({ background : "yellow" });








});
