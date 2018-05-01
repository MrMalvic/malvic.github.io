$(".aboutInfo").hide().fadeIn(2000);


$('.scrollLink').click( function() {
   $('html, body').animate({
        scrollTop: $('#scrollToThis').offset().top
   }, 800);
});
$('.scrollLink2').click( function() {
   $('html, body').animate({
        scrollTop: $('#scrollToThis2').offset().top
   }, 800);
});
$('.scrollLink3').click( function() {
   $('html, body').animate({
        scrollTop: $('#scrollToThis3').offset().top
   }, 800);
});
if ($('.scrollToTop')[0]){
   $('.scrollToTop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 800);
   });
}

$(document).ready(function() {
   $("body").addClass("animated hinge");
  });
