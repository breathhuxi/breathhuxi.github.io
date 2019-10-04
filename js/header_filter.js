$(document).ready(function(){

  $(".portfolioFilter a").click(function(){
        var selector = $(this).attr('data-filter');

        if(selector == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+selector).hide('3000');
            $('.filter').filter('.'+selector).show('3000');

        }
    });
});
