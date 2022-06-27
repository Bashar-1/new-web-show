$(window).on ("load",function(){
    $(".lds-ripple").fadeOut(1000,function(){
        $(this).parent().fadeOut(1000);
    })
})