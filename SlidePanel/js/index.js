(function($) {
	$("body").ready(function() {
		slideDiv("slide");	
	})
})(jQuery);


function slideDiv(str){
	var screen_width = $(window).width();
	var mid_screen = screen_width/2; 
	var left;
	var closeable = false;
	
	$("#"+str).mousedown(function(event){
		var offset = $(this).offset(); 
		_x=event.clientX-offset.left; 
		
		$("#"+str).mousemove(function(event){ 
			_xx=event.clientX-_x; 
			this.style.left=_xx+"px";
			
			left = -_xx;
			
		}); 
	}); 
	
	$("#"+str).mouseup(function(){ 
		$(this).unbind("mousemove");
		
		if(closeable == true) {
			$("#"+str).animate({
			    left: "-95%",
			}, 100);
			closeable = false;
		} else {
			if(left < mid_screen) {
			 $("#"+str).animate({
			    left: "0%",
			  }, 100);
			  closeable = true;
			} else {
				$("#"+str).animate({
				    left: "-95%",
				}, 100);
				closeable = false;	
			}
		}
		
	}); 
} 