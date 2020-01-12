/*  Table of Contents 
01. FLEXSLIDER DASHBOARD SLIDER
02. Video App Header On/Off Clickable Items
03. Video App Header On/Off Clickable Items
04. Range Slider in Header Search
05. Add to Favorites Menu ON/Off
06. Rating Selector
*/

jQuery(document).ready(function($) {
	 'use strict';



	 
/*
=============================================== 01. FLEXSLIDER DASHBOARD SLIDER  ===============================================
*/
/*PARENT KOMPONENTA MOVIE PROFILE
=============================================== 02. Video App Header On/Off Clickable Items  ===============================================
*/
	
	/* If clicking outside of boxes, automatically hide */
	$(document).click(function(e) {
	    if (e.target.id != 'header-user-profile' && !$('#header-user-profile').find(e.target).length) {
	        if ($("#header-user-profile").hasClass('active')) {
	        	$("#header-user-profile").removeClass('active').addClass('hide');
	        }
	    }
		
	    if (e.target.id != 'header-user-notification' && !$('#header-user-notification').find(e.target).length) {
	        if ($("#header-user-notification").hasClass('active')) {
	        	$("#header-user-notification").removeClass('active').addClass('hide');
	        }
	    }
		
	    if (e.target.id != 'video-search-header' && !$('#video-search-header').find(e.target).length) {
	        if ($("#video-search-header").hasClass('active')) {
	        	$("#video-search-header").removeClass('active').addClass('hide');
	        }
	    }
	});
	
/*
=============================================== 03. Range Slider in Header Search  ===============================================
*/	
    $(".range-example-rating-input").asRange({
		range: true,
		limit: false,
		tip: true,
    });	
	
/*
=============================================== 04. Range Slider in Header Search  ===============================================
*/
	
    $('.circle-rating-pro').circleProgress();
	
/*
=============================================== 05. Add to Favorites Menu ON/Off  ===============================================
*/


/*
=============================================== 06. Rating Selector  ===============================================
*/
	$('.rating-pro input').change(function () {
	  var $radio = $(this);
	  $('.rating-pro .selected').removeClass('selected');
	  $radio.closest('label').addClass('selected');
	});

	 	 
});