require([
    "jquery"
    ], function($){

	$(document).ready(function($){
		$('#product-addtocart-button').on('click',function(){
			setTimeout(function(){ 
				$('.quantity_section').removeClass('size_error');
				$('.quantity_section').removeClass('color_error');
				$('div.mage-error:visible').each(function(){
					var error_elem=$(this).parent().attr('attribute-code');
					var error_elem_extra=error_elem+'_error';          
					$('.quantity_section').addClass(error_elem_extra);
				});
			}, 200);  
		});
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