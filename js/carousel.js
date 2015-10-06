	$(document).ready(function() {
 
  		var owlColor = $(".color");
  		var owlSuppliers = $('#suppliers')
 
	  owlColor.owlCarousel({
	      items : 5,
	      itemsDesktop : [1200,5],
	      itemsDesktopSmall : [991,5],
	      itemsTablet: [767,5],
	      itemsMobile : [400,5]
	  });
	  owlSuppliers.owlCarousel({
	      items : 6,
	      itemsDesktop : [1300,6],
	      itemsDesktopSmall : [1199,4],
	      itemsTablet: [991,5],
	      itemsMobile : [767,3]
	  });
 	

	  $(".next-btn").click(function(){
	    $(this).parent().parent().find(owlColor).trigger('owl.next');
	  })
	  $(".prev-btn").click(function(){
	    $(this).parent().parent().find(owlColor).trigger('owl.prev');
	  })

	  $("#next-suppliers").click(function(){
	    owlSuppliers.trigger('owl.next');
	  })
	  $("#prev-suppliers").click(function(){
	    owlSuppliers.trigger('owl.prev');
	  })
	 
});