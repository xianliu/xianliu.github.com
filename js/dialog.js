(function($) {
	$("document").ready(function() {
		$(".dialog-container").show();
		
		$(".float-button").click(function() {
			$(".dialog-container").show();	
		})
		
		$(".dialog .submit").click(function() {
			console.log("submit");
		});
		
		$(".dialog .cancel").click(function() {
			$(this).closest(".dialog-container").hide();
		})
	}); 
})(jQuery);
