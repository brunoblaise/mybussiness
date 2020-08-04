(function($) {

    "use strict";

    //===== Prealoder

    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky");
        }
    });


    //===== Section Menu Active

    //    var scrollLink = $('.page-scroll');
    //        // Active link switching
    //        $(window).scroll(function() {
    //        var scrollbarLocation = $(this).scrollTop();
    //
    //        scrollLink.each(function() {
    //
    //          var sectionOffset = $(this.hash).offset().top - 73;
    //
    //          if ( sectionOffset <= scrollbarLocation ) {
    //            $(this).parent().addClass('active');
    //            $(this).parent().siblings().removeClass('active');
    //          }
    //        });
    //    });


    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });


    //===== Mobile Menu

    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });


    // WOW active
    new WOW().init();


    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== author

    $('.author-active').slick({
        autoplay: true,
        dots: true,
        fade: true,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    //===== Featured

    $('.featured-active').slick({
        autoplay: true,
        dots: true,
        arrows: false,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });


    //===== Scroll It

    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: 'linear',
        scrollTime: 1200,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -70,
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });





})(jQuery);