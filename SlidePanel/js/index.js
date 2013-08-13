(function($) {
	$("body").ready(function() {
		slideDiv();	
	})
})(jQuery);

function slideDiv(){
	var screen_width = $(window).width();
	var mid_screen = screen_width/2; 
	var left;
	var closeable = false;
    var _move=false;
    var _x;
        $(".drag").mousedown(function(e){  
            _move=true;  
            _x=e.pageX-parseInt($(".drag").css("left")); 
        });  

        $(document).mousemove(function(e){  
            if(_move){  
                var x=e.pageX-_x;
                $(".drag").css({left:x});
            }  
        }).mouseup(function(e){  
        	_move=false;  

        	var x=e.pageX-_x;
        	left = -x;

	        if(closeable == true) {
				$(".drag").animate({
				    left: "-95%",
				}, 100);
				closeable = false;
			} else {
				if(left < mid_screen) {
				 $(".drag").animate({
				    left: "0%",
				  }, 100);
				  closeable = true;
				} else {
					$(".drag").animate({
					    left: "-95%",
					}, 100);
					closeable = false;	
				}
			}

      });  

} 