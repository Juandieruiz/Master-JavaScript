$(document).ready(function(){

    
    reloadLinks();
    // Texto
    let btnLink = $('#add_link_btn');
    let newLink = $('#add_link');
    let menu = $('#menu')

        btnLink
        .removeAttr('disabled')
        .click(function(){
        newLink.val();
            menu.prepend('<li><a href="' + newLink.val() + '"></a></li>');
            newLink.val('')
            reloadLinks();
    });

});

function reloadLinks(){
    $('a').each(function(index){
        let that = $(this);
        let enlace = that.attr("href");

        that.attr('target','_blank');

        that.text(enlace)
    });
}