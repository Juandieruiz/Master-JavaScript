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
    })
});