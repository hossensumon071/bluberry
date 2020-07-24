/*
 * Blueberry
 * @version: 2.0.0 (Mon, 25 Nov 2019)
 * @requires: jQuery v3.0 or later
 * @author: Nimusoft
 * @event-namespace: .HSCore
 * @license: Nimusoft Libraries ()
 * Copyright 2020 Nimusoft
 */
'use strict';

$.extend({
	HSCore: {
		init: function () {
			$(document).ready(function () {
				// Botostrap Tootltips
				$('[data-toggle="tooltip"]').tooltip();

				// Bootstrap Popovers
				$('[data-toggle="popover"]').popover();
			});
		},

		components: {}
	}
});

$.HSCore.init();

$(document).on('ready', function () {
	// initialization of header
	var header = new HSHeader($('#header')).init();

	// initialization of HSMegaMenu component
	var megaMenu = new HSMegaMenu($('.js-mega-menu')).init();

	// initialization of unfold
	var unfold = new HSUnfold('.js-hs-unfold-invoker').init();

	// initialization of form validation
	$('.js-validate').each(function() {
		$.HSCore.components.HSValidation.init($(this), {
			rules: {
				confirmPassword: {
					equalTo: '#signupPassword'
				}
			}
		});
	});

	// initialization of show animations
	$('.js-animation-link').each(function () {
		var showAnimation = new HSShowAnimation($(this)).init();
	});
});