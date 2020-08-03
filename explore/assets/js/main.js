$(function() {

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

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });


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

    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function() {
            return '<button class="sub-nav-toggler"> <span></span> </button>';
        });

        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function() {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });

    }


    //===== Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });


    //===== Isotope Project 1

    $('.container').imagesLoaded(function() {
        var $grid = $('.grid').isotope({
            // options
            transitionDuration: '1s',
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {

            }

        });

        // filter items on button click
        $('.project-menu ul').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        //for menu active class
        $('.project-menu ul li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
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


    //=====  services progress

    if ($('.our-services-progress').length) {
        $('.our-services-progress').appear(function() {
            Circles.create({
                id: 'circles-1',
                radius: 50,
                value: 95,
                maxValue: 100,
                width: 3,
                text: function(value) {
                    return value + '%';
                },
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }

    if ($('.our-services-progress').length) {
        $('.our-services-progress').appear(function() {
            Circles.create({
                id: 'circles-2',
                radius: 50,
                value: 85,
                maxValue: 100,
                width: 3,
                text: function(value) {
                    return value + '%';
                },
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }

    if ($('.our-services-progress').length) {
        $('.our-services-progress').appear(function() {
            Circles.create({
                id: 'circles-3',
                radius: 50,
                value: 75,
                maxValue: 100,
                width: 3,
                text: function(value) {
                    return value + '%';
                },
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }

    if ($('.our-services-progress').length) {
        $('.our-services-progress').appear(function() {
            Circles.create({
                id: 'circles-4',
                radius: 50,
                value: 70,
                maxValue: 100,
                width: 3,
                text: function(value) {
                    return value + '%';
                },
                colors: ['#f0f0f0', '#f14836'],
                duration: 1000,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text',
                styleWrapper: true,
                styleText: true,
            });
        });
    }


    //===== slick Testimonial

    $('.testimonial-active').slick({
        dots: false,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni-arrow-right"></i></span>',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 1,
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });

    //=====  WOW active

    new WOW().init();



});