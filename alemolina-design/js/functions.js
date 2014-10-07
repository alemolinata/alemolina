(function($){
    
    $.fn.animatescroll = function(options) {
        
        // fetches options
        var opts = $.extend({},$.fn.animatescroll.defaults,options);
        
        if(opts.element == "html,body") {
            // Get the distance of particular id or class from top
            var offset = this.offset().top;
        
            // Scroll the page to the desired position
            $(opts.element).stop().animate({ scrollTop: offset - opts.padding}, opts.scrollSpeed, opts.easing);
        }
        else {
            // Scroll the element to the desired position
            $(opts.element).stop().animate({ scrollTop: this.offset().top - this.parent().offset().top + this.parent().scrollTop() - opts.padding}, opts.scrollSpeed, opts.easing);
        }
        
    };
    
    // default options
    $.fn.animatescroll.defaults = {        
        easing:"swing",
        scrollSpeed:1000,
        padding:0,
        element:"html,body"
    };   
    
}(jQuery));

	
$('.menu-float').hide();
$('.menu__options').hide();

$('.project__content').hide();
$('.more__content').hide();

$('[id*="js-project__name-"]').on('click', animateProject);
$('#section--work__title h1').on('click', closeProject);
$('.btn--back--work').on('click', closeProject);

window.addEventListener("scroll",function() { 
   if($('html').scrollTop() > 500 || window.scrollY > 500) {
      $('.menu-float').slideDown();
   }
   else {
      $('.menu-float').slideUp();
      $('.menu__options').slideUp();
   }
},false);

function animateProject(){
	number = $(this).attr('id').match(/[\d]+$/);
	$('#section--work').slideUp();
	$('#js-project__content-'+number).slideDown();
	$('#section--work__title h1').addClass('back');
	$('#section--work__title').animatescroll();
}
function closeProject(){
	$('.project__content').slideUp();
	$('#section--work').slideDown();
	$('#section--work__title h1').removeClass('back');
	$('#section--work__title').animatescroll();
}

$('[id*="js-more__name-"]').on('click', animateMore);
$('#section--more__title h1').on('click', closeMore);
$('.btn--back--more').on('click', closeMore);

$( '.web #js-menu' ).hover(function() {
  	$('.menu__options').stop().slideDown();
  }, function(){
  	$('.menu__options').stop().slideUp();
});

$('.mobile .menu__name').on('touchend', function(){
	if (!$('.menu__options').is(':visible')){
		$('.menu__options').slideDown('fast', function(){
	    	$(document).on('touchstart', function() {
			  	$('.menu__options').slideUp('fast', function(){
			  		$(document).off();
			  	});
			});
	    });
	}
	else{
		$('.menu__options').slideUp('fast', function(){
	  		$(document).off();
	  	});
	}
    $('.mobile .menu__options').on('touchstart', function(event){
	    event.stopPropagation();
	});
});


function animateMore(){
	number = $(this).attr('id').match(/[\d]+$/);
	$('#section--more').slideUp();
	$('#js-more__content-'+number).slideDown();
	$('#section--more__title h1').addClass('back');
	$('#section--more__title').animatescroll();
}
function closeMore(){
	$('.more__content').slideUp();
	$('#section--more').slideDown();
	$('#section--more__title h1').removeClass('back');
	$('#section--more__title').animatescroll();
}

$('.js-btn--about').on('click', scrolltoAbout);
$('.js-btn--work').on('click', scrolltoWork);
$('.js-btn--more').on('click', scrolltoMore);
$('.js-btn--contact').on('click', scrolltoContact);


function scrolltoAbout(){
	$('#section--about').animatescroll();
	$('.menu__options').slideUp();
}
function scrolltoWork(){
	if($('#section--work').is(':visible')){
		$('#section--work__title').animatescroll();
	}
	else{
		closeProject();
	}
	$('.menu__options').slideUp();
}
function scrolltoMore(){
	if($('#section--more').is(':visible')){
		$('#section--more__title').animatescroll();
	}
	else{
		closeMore();
	}
	$('.menu__options').slideUp();
}
function scrolltoContact(){
	$('#section--contact').animatescroll();
	$('.menu__options').slideUp();
}