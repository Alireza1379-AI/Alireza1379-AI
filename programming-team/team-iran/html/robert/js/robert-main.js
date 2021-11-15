(function ($) {
	
"use strict";

$(document).ready(function(){
	
/* header_sticky */
	$(window).on('scroll',function() {
	   var scroll = $(window).scrollTop();
	   if (scroll < 150) {
		$("#header-sticky").removeClass("scroll-header");
	   }else{
		$("#header-sticky").addClass("scroll-header");
	   }
	});
	
/* Preloader */ 

    $(window).on('load', (function () {
        var preLoder = $(".hola");
        preLoder.fadeOut(1000);
    }));

	
	if ( $( "#pagepiling" ).length ) {

		$('#pagepiling').pagepiling({
			direction: 'horizontal',
			menu: '.menu',
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
			sectionsColor: [],
			navigation: {
				'position': 'right',
				'tooltips': ['صفحه اصلی', 'درباره ما', 'خدمات', 'پورتفو', 'بلاگ', 'در ارتباط با ما'],
			},
			loopBottom: true,
	        loopTop: true,
			normalScrollElements: null,
			 normalScrollElements: '.owl-stage-outer',
	        normalScrollElementTouchThreshold: 5,
			afterRender: function(){
				$('#pp-nav').addClass('custom');
			},
			afterLoad: function(anchorLink, index){
				if(index>1){
					$('#pp-nav').removeClass('custom');
				}else{
					$('#pp-nav').addClass('custom');
				}
			}
		});
	
	}

/* Progress Bar */ 
	$(document).ready(function(){
		$('.bar1').barfiller({duration: 3000 });
		$('.bar2').barfiller({duration: 3000 });
		$('.bar3').barfiller({duration: 3000 });
		$('.bar4').barfiller({duration: 3000 });
		$('.bar5').barfiller({duration: 3000 });
		$('.bar6').barfiller({duration: 3000 });
		$('.bar7').barfiller({duration: 3000 });
	});
	
/* Counter Up */
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

/* SCROLL UP */
	$.scrollUp({
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade',
		scrollText: '<i class="fa fa-angle-up"></i>',
	});
	
	
/* Mobile Nav */
	$('#nav-13').slicknav();
	$(".slicknav_menu").appendTo(".small-menu");
	
/* Type Text*/	
    if ($("#typewriting").length) {
        var app = document.getElementById("typewriting");
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('Way to achieve success').pauseFor(2000).deleteAll()
            .typeString('Style to achieve success').pauseFor(2000).deleteAll()
            .typeString('Method to achieve success').start();
    }
    if ($("#personal").length) {
        var app = document.getElementById("personal");
        var personal = new Typewriter(app, {
            loop: true
        });
        personal.typeString('UI/UX Designer.').pauseFor(2000).deleteAll()
            .typeString('Web Developer.').pauseFor(2000).deleteAll()
            .typeString('Wordpress Developer.').start();
    }
	
	
	
	/* POPUP VIDEO */  
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {  
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });    
    }
	
	
	/* Scrolling Effect js */
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 500, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	});	
	
})

})(jQuery);