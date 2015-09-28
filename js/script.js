var delay = 1000;
  $(document).ready(function() {
    $('.up-btn,.mobile-up').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });