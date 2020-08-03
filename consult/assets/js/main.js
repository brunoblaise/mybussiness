$(function() {
    "use strict";
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    var myElement = document.querySelector(".headroom");
    var headroom = new Headroom(myElement);
    headroom.init();
    $('#nav').onePageNav({
        currentClass: 'active',
        changeHash: true,
        scrollSpeed: 800,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {},
        end: function() {},
        scrollChange: function($currentListItem) {}
    });
    $.scrollIt({
        scrollTime: 800,
    });
    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });
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
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    $('.container').imagesLoaded(function() {
        var $grid = $('.grid').isotope({
            transitionDuration: '1s',
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {}
        });
        $('.project-menu ul').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        $('.project-menu ul li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
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
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    new WOW().init();
});