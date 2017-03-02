$(document).ready(function(){

//mobile menu button
  $('a.nav-opener').click(function() {
    if ($('body').width() < 1183)
      $(this).toggleClass('nav-active').next('nav').find('ul').slideToggle(500);
    //$('nav#main_menu>ul').slideToggle(500);
  });

//show menu after resize from smaller resolution
  $(window).resize(function() {
  	if ($('body').width() < 1183)
      $('nav#main_menu>ul').css("display", "none");
    $('a.nav-opener').removeClass('nav-active');
    if ($('body').width() >= 1183)
      $('nav#main_menu>ul').css("display", "block");
  });

//accordion single product page
  $(".accordion .accord_item>p").click(function() {
    if ($(this).next("div").is(":visible")) {
      $(this).next("div").slideUp("slow").removeClass('active');
      $(".accordion:first-of-type .accord_content").slideUp("slow");
    } else {
      $(".accordion .accord_content").slideUp("slow").prev('p').removeClass('active');
      $(this).toggleClass('active').next("div").slideToggle("slow");
    }
  });
 
});