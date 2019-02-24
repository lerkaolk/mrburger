$(document).ready(function () {

    'use strict'

    /**
     * Phone Menu
     */
    const hamburgerMenu = $('#hamburger-menu'),
    mobileMenu = $('#phone-menu'),
    closeMenu = $('#close-menu');

    hamburgerMenu.on('click', function (e) {
        e.preventDefault()
        mobileMenu.fadeIn();

    });

    closeMenu.on('click', function (e) {
        e.preventDefault()
        mobileMenu.fadeOut();

    });

    /**
     * Burger slider
     */
	$(".owl-carousel").owlCarousel({
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		}
    });

    /**
     * Burger slider ingredients
     */
    $('.ingredients').hover(function () {
		$('.composition').slideToggle(300);
    });


    /**
     * Team Section
     */
    $('.team-accordeon__view').on('click', function (e) {
        e.preventDefault();

        var name = $(this),
            item = name.parent(),
            items = $('.team-accordeon__item'),
            content = item.find('.team-accordeon__content'),
            otherContent = $('.team-accordeon__content');

        if (!item.hasClass('team-accordeon__item--active')) {
            items.removeClass('team-accordeon__item--active');
            item.addClass('team-accordeon__item--active');

            otherContent.css({
                'height': 0,
                'animation': 'slideUp .3s'
            })

            content.css({
                'height': '100%',
                'animation': 'slideDown .3s'
            })
        } else {
            item.removeClass('team-accordeon__item--active')
            content.css({
                'height': 0,
                'animation': 'slideUp .3s'
            })
        }


    });

    /**
     * Accordeon Menu
     */
    $('.menu__item').on('click', function (e) {
		e.preventDefault()

		let item = $(this),
			item_content = item.find('.menu__desc-wrap'),
			items = $('.menu__item.menu__item--active');

		if (!item.hasClass('menu__item--active')) {
			items.removeClass('menu__item--active');
			item.addClass('menu__item--active');

			$('.menu__desc-wrap').css({
				'width': 0
			})

			item_content.css({
				'width': '20rem'
			})
		} else {
			item.removeClass('menu__item--active')
			item_content.css({
				'width': 0
			})
		}
    });

    /**
     * Reviews
     */
    $('.reviews__button').fancybox();
	$('.close__link').on('click', function (e) {
		e.preventDefault()

		$.fancybox.close();
    });

    /**
     * Contact form
     */
    $("#send-mail").on("submit", function(e) {
		e.preventDefault()
        let form = $(this),
            url = form.attr("action"),
            data = form.serialize();

        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            dataType: 'JSON'
        }).done(function(msg) {
            let mes = msg.mes,
            status = msg.status;
            if (status === 'OK') {
                $("#form-popup p").text("Ok.");
                form[0].reset();
            } else {
                $("#form-popup p").text(mes);
                form[0].reset();
            }

            $("#form-popup").fancybox().trigger('click');
        }).fail( function(jqXHR, textStatus) {
            $("#form-popup p").text("Request failed: " + textStatus);
            $("#form-popup").fancybox().trigger('click');
            form[0].reset();
        });
    });
});