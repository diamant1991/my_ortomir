	$(document).ready(function() {
 
  		var owlColor = $(".color");
  		var owlSuppliers = $('#suppliers')
 
	  owlColor.owlCarousel({
	      items : 3,
	      itemsDesktop : [1200,3],
	      itemsDesktopSmall : [991,3],
	      itemsTablet: [767,3],
	      itemsMobile : [400,3]
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