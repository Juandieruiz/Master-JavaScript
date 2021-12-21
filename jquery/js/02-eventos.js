$(document).ready(function(){

    // TODO:MouseOver y  MouseOut
    let caja = $("#caja");
    
    // caja.mouseover(function(){ 
    //     $(this).css("background","darkred");
    // });

    // caja.mouseout(function(){
    //     $(this).css("background","lightgreen");
    // });

    // TODO:HOVER
    // Creamos las funciones

    function cambiaAmarillo(){
        $(this).css("background","yellow");
    }

    function cambiaAzul(){
        $(this).css("background","blue")
                .css("color", "white")
    }

    caja.hover(cambiaAmarillo,cambiaAzul);

    // TODO:Click, Doble Click
    caja.click(function(){
        $(this).css("background","green")
        .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background","purple")
        .css("color","yellow");
    });

    // TODO:Focus y Blur
    let campo = $('#nombre');

    campo.focus(function(){
        $(this).css("border", "3px solid green");
    });
    
    let datos = $('#datos');

    campo.blur(function(){
        $(this).css("border", " 2px solid #ccc");

        let mensaje = $(this).val();
        datos.text(mensaje).show();

        });
    
    // TODO: Mousedown y MouseUp

    datos.mousedown(function() {
        $(this).css("border-color" , "gray");
    })

    datos.mouseup(function() {
        $(this).css("border-color" , "red")
    });

    // TODO: MouseMove
    let circle = $("#circle");
    let body = $("body");

    $(document).mousemove(function(event){
        circle.css("left", event.clientX)
                .css("top", event.clientY);
    body.css("cursor" , "none");

    })
});