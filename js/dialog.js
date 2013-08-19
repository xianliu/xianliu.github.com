(function($) {
	$("document").ready(function() {
		$(".dialog-container").fadeIn("slow");
		
		$(".float-button").click(function() {
			$(".dialog-container").fadeIn("slow");	
		})
		
		$(".dialog .submit").click(function() {
			console.log("submit");
		});
		
		$(".dialog .cancel").click(function() {
			$(this).closest(".dialog-container").fadeOut("slow");
		})
	}); 
})(jQuery);
