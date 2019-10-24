
(function($){
  "use strict";
	
	// Preloader
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(200).fadeOut("slow");
	});
	
	// ready function
	jQuery(document).ready(function($){
   		var $this = $(window);
	
	//bg window height
	var window_height = window.innerHeight;
		$(".prt_home_wrapper").css("height", window_height);
	
	//Portfolio Load 
	$(".prt_loadmore").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".prt_loadmore:hidden").slice(0, 4).slideDown();
        if ($(".prt_loadmore:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
	
	
	
	// Portfolio popup Js
	$('.popup-gallery').magnificPopup({
		delegate: 'a.imageopen',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	
	// Portfolio video Popup js
	$('a.popup-youtube').magnificPopup({
		disableOn: 0,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	
	
	// Open Close main Section Js
	var AplCss;
	var targetSection;
	var tar;
	var timing = 500;
	$('div.prt_menu_wrapper a').on('click' , function(e){
		e.preventDefault();
		tar = $(this).attr('href').split('#')[1];
		targetSection = $('.prt_'+tar+'_wrapper');
		if(tar == 'about'){
			AplCss  = {'left':0};
		}
		else if(tar == 'portfolio'){
			AplCss  = {'right':0};
		}
		targetSection.css('display', 'block');
		targetSection.animate(AplCss, timing);
	});
	$('img.prt_close').on('click' , function(){
		hide_section();
	});
	
	$('img#prt_close_tab').on('click' , function(){
		hide_section();
	});
	function hide_section(){
		if(tar == 'about'){
			AplCss  = {'display':'none', 'left':'100%'};
		}
		else if(tar == 'portfolio'){
			AplCss  = {'display':'none','right':'100%'};
		}
		setTimeout(function(){ targetSection.css('display', 'none'); }, timing);
		targetSection.animate(AplCss, timing);
	};
	
	});
	
})();