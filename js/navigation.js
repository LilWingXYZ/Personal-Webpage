
var ww = document.body.clientWidth;

$(document).ready(function() {
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".menu").toggle();
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 768) {
		$(".toggleMenu").css("display", "inline-block");
		if (!$(".toggleMenu").hasClass("active")) {
			$(".menu").hide();
		} else {
			$(".menu").show();
		}
		$(".menu li").unbind('mouseenter mouseleave');
		$(".menu li a.parent").unbind('click').bind('click', function(e) {
			
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 768) {
		$(".toggleMenu").css("display", "none");
		$(".menu").show();
		$(".menu li").removeClass("hover");
		$(".menu li a").unbind('click');
		$(".menu li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	
		 	$(this).toggleClass('hover');
		});
	}
}

