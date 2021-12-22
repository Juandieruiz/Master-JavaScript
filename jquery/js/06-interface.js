$(document).ready(function(){

    // Draggable 
    // Sirve para mover elementos
    $(".elemento").draggable();

    // Resizable
    // Sirve para cambiar el tamaño de un elemento
    $(".elemento").resizable();

    // Selectable
    // Sirve para seleccionar elementos
    $(".lista-seleccionable").selectable();

    // Sortable
    // Sirve para ordenar elementos
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("Cambiando: Nuevo Ranking");
        }
    });

    // Droppable
    // Sirve para añadir elementos
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado un objeto en el area")
        }
    });

    // Efectos
    $("#lanza-efecto").click(function(){
        console.log("Click en el boton");
        // Ahora se puede usar el efecto
        $(".caja-efectos").toggle("explode", 4000);
    });

    // Tooltip
    // Sirve para mostrar un texto al pasar el ratón por encima de un elemento
    $("#tooltip").tooltip();



});