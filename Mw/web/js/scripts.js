require([
    "jquery"
    ], function($){

	$(document).ready(function($){
		/*your js code here*/
	});    
	/*Smooth Scroll*/
		$('a[href^="#"].smoothScroll').on('click', function(event) {
			var target = $(this.getAttribute('href'));
			if( target.length ) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: parseInt(target.offset().top)-0 //0px space above the section
				}, 500);
			}
		});
	/*End Smooth Scroll*/
	/* Sticky Nav*/
		$(window).scroll(function () {
			if ($(window).scrollTop() > 0 && !$('.mobile-toggle').is(":visible")) {
				$('.top-bar').addClass('nav-sticky');
			} else {
				$('.top-bar').removeClass('nav-sticky');
			}
		});
	/*End Sticky Nav*/
});
