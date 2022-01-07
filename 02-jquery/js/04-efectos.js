$(document).ready(function(){

    // Hide y Show

    let caja = $('#caja');
    let mostrar = $('#mostrar');
    let ocultar = $('#ocultar');


    mostrar.hide();

    mostrar.click(function(){
        $(this).hide();
        ocultar.show();
        caja.slideDown('slow');
    })

    ocultar.click(function(){
        $(this).hide();
        mostrar.show();
        caja.slideUp('slow', function(){
        console.log("Cartel ocultado");
        });

    })

    let todoEnUno = $('#todoEnUno');

    todoEnUno.click(function(){
        caja.toggle('fast');
    });

    $("#animar").click(function(){
        console.log("click");
        caja.animate({
                    marginLeft:'500px',
                    fontSize: '40px',
                    height: '110px'
                    }, 'slow')
            .animate({
                    borderRadius: '900px',
                    marginTop: '80px',
                    },'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px',
                    },'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px',
                    },'slow')
            .animate({
                marginLeft:'500px',
                fontSize: '40px',
                height: '110px'
                }, 'slow')
    });







})