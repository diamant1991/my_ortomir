	$(document).ready(function() {
 
  		var owlColor = $(".color");
  		var owlSuppliers = $('#suppliers')
 
	  owlColor.owlCarousel({
	      items : 3
	  });
	  owlSuppliers.owlCarousel({
	      items : 6
	  });
 	

	  $(".prev-btn").click(function(){
	    $(this).parent().parent().find(owlColor).trigger('owl.next');
	  })
	  $(".next-btn").click(function(){
	    $(this).parent().parent().find(owlColor).trigger('owl.prev');
	  })

	  $("#prev-suppliers").click(function(){
	    owlSuppliers.trigger('owl.next');
	  })
	  $("#next-suppliers").click(function(){
	    owlSuppliers.trigger('owl.prev');
	  })
	 
	});