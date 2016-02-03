$(document).ready(function () {

    function windowSize(){
        if ($(window).width() < '965'){
            var mainCatalog = $('.main-catalog .product-catalog-wrap');
            var payment = $('.payment-delivery-block');
            var footerTop = $('.footer-top');
            mainCatalog.insertBefore($('.content-top'));
            payment.insertBefore($('.content-top'));
            mainCatalog.addClass('main');
            footerTop.insertBefore($('.nav-block'));
        }
    }
    jQuery(window).load(windowSize);
    /************ product`s photos *************/
    $('.photo-list li').click(function(){
        if(!$(this).hasClass('active')) {
            $('.photo-main .active').css('display', 'none');
            $('.photo-list li').removeClass('active');
            var curIndex = $('.photo-list li').index($(this));
            switch (curIndex) {
                case 0:
                    $('.photo-main li:nth-child(1)').fadeIn();
                    $('.photo-main li:nth-child(1)').addClass('active');
                    break;
                case 1:
                    $('.photo-main li:nth-child(2)').fadeIn();
                    $('.photo-main li:nth-child(2)').addClass('active');
                    break;
                case 2:
                    $('.photo-main li:nth-child(3)').fadeIn();
                    $('.photo-main li:nth-child(3)').addClass('active');
                    break;
                case 3:
                    $('.photo-main li:nth-child(4)').fadeIn();
                    $('.photo-main li:nth-child(4)').addClass('active');
                    break;
            }
            $(this).addClass('active');
        }
    });
    /********* end of the product`s photos *********/

    $('.nav-block .search-block input').focus(function(){
        $(this).removeClass('unchosen');
    });

    $('.nav-block .search-block input').blur(function(){
        $(this).addClass('unchosen');
    });

    $('.office-mark').click(function() {
        if($(this).hasClass('active')){
            $(this).find('.office-address').fadeOut();
            $(this).removeClass('active');
            $(this).find('underground-st').css('text-decoration-style', 'none');
        } else {
            $(this).find('.office-address').fadeIn();
            $(this).addClass('active');
            $(this).find('underground-st').css('text-decoration', 'underline');
        }
    });

    $('.filters li').click(function () {
        if ($(this).hasClass('general')) {
            $(this).parent().children().removeClass('active');
            $(this).addClass('active');
            return;
        }
        if ($(this).hasClass('cancel')) {
            if (!$(this).hasClass('active')) {
                $(this).parent().children('.choice').removeClass('active');
                $(this).addClass('active');
            }
        } else {
            $(this).parent().children('.cancel').removeClass('active');
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        }
    });

    /************** catalog`s script **************/
    $('.catalog-control .on-right').click(function() {
        var productArray = $('.product-card-wrap');
        var currentFirst = $('.first-visible').index();
        $(productArray[currentFirst]).removeClass('first-visible');
        currentFirst = currentFirst + 9;
        $(productArray[currentFirst]).addClass('first-visible');
        productArray.removeClass('visible');
        if (currentFirst + 9 < $('.product-card-wrap').length) {
            for (var i = currentFirst; i < currentFirst + 9; i++){
                $('.product-card-wrap').eq(i).addClass('visible');
            }
        } else {
            for (var j = currentFirst; j < $('.product-card-wrap').length; j++){
                $('.product-card-wrap').eq(j).addClass('visible');
            }
            $('.catalog-control .on-right').css('visibility', 'hidden');
        }
        $('.catalog-control .on-left').css('visibility', 'visible');
    });

    $('.catalog-control .on-left').click(function() {
        var productArray = $('.product-card-wrap');
        var currentFirst = $('.first-visible').index();
        $(productArray[currentFirst]).removeClass('first-visible');
        currentFirst = currentFirst - 9;
        $(productArray[currentFirst]).addClass('first-visible');
        $('.product-card-wrap').removeClass('visible');
        for (var i = currentFirst; i < currentFirst + 9; i++){
            $('.product-card-wrap').eq(i).addClass('visible');
        }
        if (currentFirst == 0) {
            $('.catalog-control .on-left').css('visibility', 'hidden');
        }
            $('.catalog-control .on-right').css('visibility', 'visible');
    });
    /*********** end of the catalog`s script **********/

    /************** catalog`s script for the main page **************/
    $('.catalog-control .on-right-main').click(function() {
        var productArray;
        if ($(window).width() < '965'){
            productArray = $('.main .product-card-wrap');
        } else {
            productArray = $('.main-catalog .product-card-wrap');
        }
        var currentFirst = $('.first-visible').index();
        $(productArray[currentFirst]).removeClass('first-visible');
        currentFirst = currentFirst + 6;
        $(productArray[currentFirst]).addClass('first-visible');
        productArray.removeClass('visible');
        if (currentFirst + 6 < $(productArray).length) {
            for (var i = currentFirst; i < currentFirst + 6; i++){
                $(productArray).eq(i).addClass('visible');
            }
        } else {
            for (var j = currentFirst; j < $(productArray).length; j++){
                $(productArray).eq(j).addClass('visible');
            }
            $('.catalog-control .on-right-main').css('visibility', 'hidden');
        }
        $('.catalog-control .on-left-main').css('visibility', 'visible');
    });

    $('.catalog-control .on-left-main').click(function() {
        var productArray;
        if ($(window).width() < '965'){
            productArray = $('.main .product-card-wrap');
        } else {
            productArray = $('.main-catalog .product-card-wrap');
        }
        var currentFirst = $('.first-visible').index();
        $(productArray[currentFirst]).removeClass('first-visible');
        currentFirst = currentFirst - 6;
        $(productArray[currentFirst]).addClass('first-visible');
        $(productArray).removeClass('visible');
        for (var i = currentFirst; i < currentFirst + 6; i++){
            $(productArray).eq(i).addClass('visible');
        }
        if (currentFirst == 0) {
            $('.catalog-control .on-left-main').css('visibility', 'hidden');
        }
        $('.catalog-control .on-right-main').css('visibility', 'visible');
    });
    /*********** end of the catalog`s script for the main page **********/

    /*************** slider ******************/
    var forTimer = function(){
        $('.slider-controls').css('visibility','hidden');
        var slides = $('.slide');
        var currentSlide = $('.current-slide').index();
        $('.current-slide').css('display', 'none');
        $(slides[currentSlide]).removeClass('current-slide');
        if(currentSlide != slides.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        $(slides[currentSlide]).addClass('current-slide');
        $('.current-slide').fadeIn();
        $('.slider-controls').css('visibility','visible');
    };
    var myTimer = setInterval(forTimer, 5000);

    $('.slider-controls div').click(function() {
        $(this).css('visibility','hidden');
        clearInterval(myTimer);
        var slides = $('.slide');
        var currentSlide = $('.current-slide').index();
        $('.current-slide').css('display', 'none');
        $(slides[currentSlide]).removeClass('current-slide');
        if($(this).hasClass('right')){
            if(currentSlide != slides.length - 1) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
        } else {
            if(currentSlide != 0) {
                currentSlide--;
            } else {
                currentSlide = slides.length - 1;
            }
        }
        $(slides[currentSlide]).addClass('current-slide');
        $('.current-slide').fadeIn();
        $(this).css('visibility','visible');
        myTimer = setInterval(forTimer, 5000);
    });
    /************ end of slider **************/
    $('.nav-control').click(function(){
        if($(this).hasClass('active')) {
            $('nav>ul').fadeOut();
            $(this).removeClass('active');
            $('.super-menu .sub-menu').fadeOut();
            $('.super-menu a').removeClass('active');
        } else {
            $('nav>ul').fadeIn();
            $(this).addClass('active');
        }
    });

    $('.super-menu a').click(function(event){
        if ($(window).width() < 966){
            event.preventDefault();
            if($(this).hasClass('active')) {
                $('.super-menu .sub-menu').fadeOut();
                $(this).removeClass('active');
            } else {
                $('.super-menu .sub-menu').fadeIn();
                $(this).addClass('active');
            }
        }
    });
});