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

//resize menu on scroll
  $(window).scroll(function() {
    if (($(this).scrollTop() > 97) && ($('header.main_header').width() >= 1183)) {
      $('header.main_header').addClass('fixed');
      $('.main').css('margin-top', '97px');
    } else   
    if (($(this).scrollTop() <= 96) && ($('header.main_header').width() >= 1183)) {
      $('header.main_header').removeClass('fixed');
      $('.main').css('margin-top', '0px');
    }
    if (($(this).scrollTop() > 72) && ($('header.main_header').width() < 1183)) {
      $('header.main_header').addClass('fixed');
      $('.main').css('margin-top', '72px');
    } else
    if (($(this).scrollTop() <= 72) && ($('header.main_header').width() < 1183)) {
      $('header.main_header').removeClass('fixed');
      $('.main').css('margin-top', '0px');
    }
  });



});