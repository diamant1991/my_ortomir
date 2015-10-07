var top_show = 450;
  var delay = 1000;
  $(document).ready(function() {
    $(window).scroll(function () { 
      if ($(this).scrollTop() > top_show) $('.up_btn').fadeIn();
      else $('.up_btn').fadeOut();
    });
    $('.up_btn').click(function () { 
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });


 $(document).ready(function() {
   	$('.mobile-catalog-toogle').click(function() {
   		$(this).parent().find('.mobile-cat-drop').toggleClass('active');
   	});
});

jQuery(function($){
    $(".tel-input").mask("+7 (999) 999-9999");
});


// Select
$('.slct').click(function(){
  var dropBlock = $(this).parent().find('.drop');

  if( dropBlock.is(':hidden') ) {
    dropBlock.show();

    $(this).addClass('active');
    $('.drop').find('li').click(function(){
      var selectResult = $(this).html();
      $(this).parent().parent().find('input').val(selectResult);
      $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

      dropBlock.hide();
    });
  
  } else {
    $(this).removeClass('active');
    dropBlock.hide();
  }

  return false;
});

$(document).mouseup(function (e) {
    var container = $(".drop");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});