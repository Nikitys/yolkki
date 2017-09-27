$(document).ready(function() {
    var mainCarousel = $('.main').slick({
        infinite: true,
        dots: true
    });
    // $(document).on('click', '.header-nav__item--mob-nav', function(e){
    //     e.preventDefault();
    //     $('.header-mob-menu').toggleClass('header-mob-menu--active animated bounceInDown');
    //     $(this).toggleClass('header-nav__item--mob-nav--active');
    // });
    var carouselScreen3 = $('.screen3-main--slider').slick({
        infinite: true
    });
    $(document).on('click', '.screen3-main-item-desc-arrows__left', function(e){
        e.preventDefault();
        carouselScreen3.slick('slickPrev');
    })
    $(document).on('click', '.screen3-main-item-desc-arrows__right', function(e){
        e.preventDefault();
        carouselScreen3.slick('slickNext');
    })
    var carouselScreen6 = $('.screen6-main--slider').slick({
        infinite: true
    });
    $(document).on('click', '.screen6-main-item-desc-arrows__left', function(e){
        e.preventDefault();
        carouselScreen6.slick('slickPrev');
    })
    $(document).on('click', '.screen6-main-item-desc-arrows__right', function(e){
        e.preventDefault();
        carouselScreen6.slick('slickNext');
    })
    var carouselScreen7 = $('.screen7-main--slider').slick({
        infinite: true
    });
    $(document).on('click', '.screen7-main-item-desc-arrows__left', function(e){
        e.preventDefault();
        carouselScreen7.slick('slickPrev');
    })
    $(document).on('click', '.screen7-main-item-desc-arrows__right', function(e){
        e.preventDefault();
        carouselScreen7.slick('slickNext');
    })
    var carouselScreen14 = $('.screen14-main--slider').slick({
        infinite: true,
        slidesToShow:4,
        slidesToScroll:2
    });
    $(document).on('click', '.screen14-main-arr__left', function(e){
        e.preventDefault();
        carouselScreen14.slick('slickPrev');
    })
    $(document).on('click', '.screen14-main-arr__right', function(e){
        e.preventDefault();
        carouselScreen14.slick('slickNext');
    })
    // menu
    $(document).on('click', '.nav-open', function(e){
        $('.nav').addClass('nav--active')
    })
    $(document).on('click', '.nav-close', function(e){
        $('.nav').removeClass('nav--active')
    })
    $(document).on('click', '.nav-main a', function(e){
        slideIndex = $(this).index();
        mainCarousel.slick( 'slickGoTo',parseInt(slideIndex) );
        $('.nav').removeClass('nav--active')
    });
    $(document).mouseup(function (e) {
        var container = $(".nav");
        if (container.has(e.target).length === 0){
            container.removeClass('nav--active');
        }
    });
    // tabs
    var tabs = $('#tabs');
    $('.tabs-content > div', tabs).each(function(i) {
        if (i !== 0)
            $(this).hide(0);
    });
    tabs.on('click', '.tabs-nav a', function(e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs-nav a', tabs).removeClass('screen5-top-list__item--active');
        $(this).addClass('screen5-top-list__item--active');
        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });

    var tabs1 = $('#tabs1');
    $('.tabs-content > div', tabs1).each(function(i) {
        if (i !== 0)
            $(this).hide(0);
    });
    tabs1.on('click', '.tabs-nav a', function(e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs-nav a', tabs1).removeClass('screen5-top-list__item--active');
        $(this).addClass('screen5-top-list__item--active');
        $('.tabs-content > div', tabs1).hide(0);
        $(tabId).show();
    });

    var tabs2 = $('#tabs2');
    $('.tabs-content > div', tabs2).each(function(i) {
        if (i !== 0)
            $(this).hide(0);
    });
    tabs2.on('click', '.tabs-nav a', function(e) {
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs-nav a', tabs2).removeClass('screen12-main-top-left-link--active');
        $(this).addClass('screen12-main-top-left-link--active');
        $('.tabs-content > div', tabs2).hide(0);
        $(tabId).show();
    });
});