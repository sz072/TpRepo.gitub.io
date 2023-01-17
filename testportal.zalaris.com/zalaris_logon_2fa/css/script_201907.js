/**
 *  @fileoverview Zalaris HR Portal - Logon
 *  @preserve Copyright 2012 Rayon Visual Concepts
 *  @requires jQuery
 *  @version 1.0
-----------------------------------------------------------*/
(function(window, document, $) {
	"use strict";
	$(document).ready(function() {
             //Local storage get by Njaal Stabell
        if (typeof(localStorage) == 'undefined' ) {
			//browser does not support LS
        } else {
            try {
				//if($.browser.msie) {
				var uparam = localStorage.getItem("uparam");
				
				if(uparam != null) {
					document.getElementById("logonuidfield").value = uparam;
				}
			} catch (e) { }
               //save param when next field has focus
			    $("#logonpassfield").focus(function (){
					localStorage.setItem("uparam", document.getElementById("logonuidfield").value);
				});
		}


		/** IE-Hax
		-------------------------------------------------------*/
		if((/msie|trident/i).test(navigator.userAgent)) {
			$('body').addClass('ie');
			$('input[type=submit]').addClass('hax-submit');
			$('input[type=text], input[type=password]').addClass('hax-input');
		}
		
		/** Linebreaks
		-------------------------------------------------------*/
		$('input[type=text], input[type=password]').after('<br />');

		$('#Banner h1, #Wrap').show();
		
		$(window).bind('resize', function() {
			if((/msie|trident/i).test(navigator.userAgent)) {
				var w;
				if(!window.innerWidth){
					if(!(document.documentElement.clientWidth == 0)){
						//strict mode
						w = document.documentElement.clientWidth;
					} else{
						//quirks mode
						w = document.body.clientWidth;
					}
				} else {
					//w3c
					w = window.innerWidth;
				}

				if(w < 960 && w >= 496) {
					$('body').addClass('lt60em');
					$('body').removeClass('lt22em');
					$('body').removeClass('lt31em');
				}
				else if(w < 496 && w >= 352) {
					$('body').addClass('lt31em');
					$('body').removeClass('lt22em');
					$('body').removeClass('lt60em');
				}
				else if(w < 352) {
					$('body').addClass('lt22em');
					$('body').removeClass('lt60em');
					$('body').removeClass('lt31em');
				}
				else {
					$('body').removeClass('lt22em');
					$('body').removeClass('lt60em');
					$('body').removeClass('lt31em');
				}
			}
		}).trigger('resize');
		
		//system message
		$('#SysMsg').hide();
	});
}(window, document, jQuery.noConflict()));