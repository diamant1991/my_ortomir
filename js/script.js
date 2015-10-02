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

