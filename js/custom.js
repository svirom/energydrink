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
        beforeSend: function(){
          $('.on_send').css('display', 'block');
        },
        success: function() {
          $('.on_send').css('display', 'none');
          $('.popup').fadeIn(300);
          t.find(fields).each(function() {
            $(this).val('');
          });
          t.find('textarea').val('');
        },
        error: function() {
          $('.on_send').css('display', 'none');
          alert("It's not OK");
        }

      });
    }
    return false;
  }

  //partners form
  $('#partners_form').submit(send_form2);

  function send_form2() {
    var t2 = $(this);
    var fields2 = 'input:not([type="submit"])';
    event.preventDefault();
    t2.find(fields2).each(function() {
      if ($(this).val() == 0) {
        $(this).addClass('error');
      } else {
        $(this).removeClass('error');
      }
    });
    if (t2.find('.error').length > 0) { 
      return false;
    } else {
      var form_data = t2.serialize();
      $.ajax({
        type: 'POST',
        url: 'sendmail2.php',
        data: form_data,
        beforeSend: function(){
          $('.on_send').css('display', 'block');
        },
        success: function() {
          $('.on_send').css('display', 'none');
          $('.popup').fadeIn(300);
          t2.find(fields2).each(function() {
            $(this).val('');
          });
        },
        error: function() {
          $('.on_send').css('display', 'none');
          alert("It's not OK");
        }

      });
    }
    return false;
  }

//calculator
	$('#calc_form .total_weight').text(0);
	$('#calc_form .total_volume').text(0);
	$('#calc_form .total_value').text(0);
	$('#classic_big').val() == 0;
	$('#classic_small').val() == 0;
	$('#original_big').val() == 0;
	$('#original_small').val() == 0;
	
	$('#calc_form table').change(function(){
		var classic_big = $('#classic_big').val();
		var classic_small = $('#classic_small').val();
		var original_big = $('#original_big').val();
		var original_small = $('#original_small').val();
		var total_weight = 0;
		var total_volume = 0;
		var total_value = 0;

		total_weight += parseInt(classic_big*12);
		$('#calc_form .total_weight').text(total_weight);
		total_weight += parseInt(classic_small*6);
		$('#calc_form .total_weight').text(total_weight);
		total_weight += parseInt(original_big*12);
		$('#calc_form .total_weight').text(total_weight);
		total_weight += parseInt(original_small*6); 
		$('#calc_form .total_weight').text(total_weight);

		total_volume += parseFloat(classic_big*0.1);
		$('#calc_form .total_volume').text(total_volume.toFixed(1));
		total_volume += parseFloat(classic_small*0.05);
		$('#calc_form .total_volume').text(total_volume.toFixed(1));
		total_volume += parseFloat(original_big*0.1);
		$('#calc_form .total_volume').text(total_volume.toFixed(1));
		total_volume += parseFloat(original_small*0.05); 
		$('#calc_form .total_volume').text(total_volume.toFixed(1));

		total_value += parseInt(classic_big*1872);
		$('#calc_form .total_value').text(total_value);
		total_value += parseInt(classic_small*780);
		$('#calc_form .total_value').text(total_value);
		total_value += parseInt(original_big*1872);
		$('#calc_form .total_value').text(total_value);
		total_value += parseInt(original_small*780); 
		$('#calc_form .total_value').text(total_value);
	})
 
//calc form
  $('#calc_form').submit(send_form3);

  function send_form3() {
    var t3 = $(this);
    var fields3 = 'input:not([type="submit"])';
    event.preventDefault();
    
    var form_data = t3.serialize();
      $.ajax({
        type: 'POST',
        url: 'sendmail3.php',
        data: form_data,
        beforeSend: function(){
          $('.on_send').css('display', 'block');
        },
        success: function() {
          $('.on_send').css('display', 'none');
          $('.popup').fadeIn(300);
          t3.find(fields3).each(function() {
            $(this).val('');
          });
          $('#calc_form .total_weight').text(0);
		  $('#calc_form .total_volume').text(0);
		  $('#calc_form .total_value').text(0);
        },
        error: function() {
          $('.on_send').css('display', 'none');
          alert("It's not OK");
        }

      });
    
    return false;
  }

});