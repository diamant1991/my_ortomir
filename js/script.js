var delay = 1000;
  $(document).ready(function() {
    $('.up-btn,.mobile-up').click(function () {
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