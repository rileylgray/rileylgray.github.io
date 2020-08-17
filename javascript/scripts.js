$(document).ready(function(){
   $('.scroll-work').click(function(){
      $('html, body').animate({scrollTop: $('.jswork').offset().top},1000);
   });
    $('.scroll-me').click(function(){
      $('html, body').animate({scrollTop: $('.jsabout').offset().top},1000);
   });
    $('.scroll-policy').click(function(){
      $('html, body').animate({scrollTop: $('.jspolicy').offset().top},1000);
   });
});
