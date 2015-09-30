$(document).ready(function() {
 
  	  var owlSizes = $(".sizes-carousel");
  	  var owlColor = $(".color");
 
	  owlSizes.owlCarousel({
	      items : 3,
	      itemsDesktop : [1200,3],
	      itemsDesktopSmall : [991,3],
	      itemsTablet: [767,3],
	      itemsMobile : [400,3]
	  });

	  owlColor.owlCarousel({
	      items : 3,
	      itemsDesktop : [1200,3],
	      itemsDesktopSmall : [991,3],
	      itemsTablet: [767,3],
	      itemsMobile : [400,3]
	  });

	  $(".next-btn").click(function(){
	    $(this).parent().parent().find(owlSizes).trigger('owl.next');
	  })
	  $(".prev-btn").click(function(){
	    $(this).parent().parent().find(owlSizes).trigger('owl.prev');
	  })

	  $(".next-btn").click(function(){
	    $(this).parent().parent().find(owlColor).trigger('owl.next');
	  })
	  $(".prev-btn").click(function(){
	    $(this).parent().parent().find(owlColor).trigger('owl.prev');
	  })
 
});