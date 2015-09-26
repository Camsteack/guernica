$( document ).ready(function() {
  $( ".panel" ).on( "hover", function() {
    $(this).fadeIn(700, function(){
      $('.panel-body').fadeIn(1000);
    });
  });
});