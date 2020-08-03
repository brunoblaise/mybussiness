$(function() {
    "use strict";
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar-4 .navbar-brand img").attr("src", "assets/images/logo-4.png");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar-4 .navbar-brand img").attr("src", "assets/images/logo.png");
        }
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
    var scrollLink = $('.page-scroll');
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
    $('.testimonial-author-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-content'
    });
    $('.testimonial-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni-arrow-right"></i></span>',
        asNavFor: '.testimonial-author-slider',
        dots: false,
        focusOnSelect: true
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
    var wow = new WOW({
        boxClass: 'wow',
        mobile: false,
    })
    wow.init();
});