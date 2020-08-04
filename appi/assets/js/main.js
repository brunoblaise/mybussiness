(function() {
    "use strict";
    window.onload = function() {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }
    window.onscroll = function() {
        var header_navbar = document.getElementById("header_navbar");
        var sticky = header_navbar.offsetTop;
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }
        var backToTo = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "block";
        } else {
            backToTo.style.display = "none";
        }
    };
    var pageLink = document.querySelectorAll('.page-scroll');
    pageLink.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 1 - 60,
            });
        });
    });

    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
    };
    window.document.addEventListener('scroll', onScroll);
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    document.querySelectorAll(".page-scroll").forEach(e => e.addEventListener("click", () => {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove('show')
    }));
    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
    });
    var cu = new counterUp({
        start: 0,
        duration: 2000,
        intvalues: true,
        interval: 100,
        append: 'k'
    });
    cu.start();
    const myGallery = GLightbox({
        'href': 'assets/video/Free App Landing Page Template - AppLand.mp4',
        'type': 'video',
        'source': 'youtube',
        'width': 900,
        'autoplayVideos': true,
    });
    var slider = new tns({
        container: '.testimonial-slider',
        items: 2.4,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        gutter: 60,
        nav: false,
        controlsText: ['<i class="lni lni-arrow-left"></i>', '<i class="lni lni-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            992: {
                items: 1.8,
                gutter: 30,
            },
            1200: {
                items: 2,
                gutter: 100,
            },
            1400: {
                items: 2.4,
            },
        }
    });
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        speed: 1000,
        loop: true,
        centeredSlides: true,
        slidesPerView: 5,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        }
    })
    var wow = new WOW({
        mobile: false
    });
    wow.init();
})();