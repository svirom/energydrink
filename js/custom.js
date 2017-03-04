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
      $(this).next("div").slideUp("slow").prev('p').removeClass('active');
      $(".accordion:first-of-type .accord_content").slideUp("slow");
    } else {
      $(".accordion .accord_content").slideUp("slow").prev('p').removeClass('active');
      $(this).toggleClass('active').next("div").slideToggle("slow");
    }
  });

  //Popup close
    $('a[data-js="close_form"]').click(function(){
      event.preventDefault();
      $('.popup').fadeOut(300);
    });

//contacts form
  $('#contacts_form').submit(send_form);

  function send_form() {
    var t = $(this);
    var fields = 'input:not([type="submit"])';
    event.preventDefault();
    t.find(fields).each(function() {
      if ($(this).val() == 0) {
        $(this).addClass('error');
      } else {
        $(this).removeClass('error');
      }
    });
    if (t.find('.error').length > 0) { 
      return false;
    } else {
      var form_data = t.serialize();
      $.ajax({
        type: 'POST',
        url: 'sendmail.php',
        data: form_data,
        success: function() {
          $('.popup').fadeIn(300);
          t.find(fields).each(function() {
            $(this).val('');
          });
          t.find('textarea').val('');
        },
        error: function() {
          alert("It's not OK");
        }

      });
    }
    return false;
  }

 
});