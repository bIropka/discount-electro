$(document).ready(function () {

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

    $('.product-card').hover(
        function(){
            $(this).css('z-index', '1');
            $(this).find('.parameters').fadeIn(100);
            $(this).addClass('with-shadow');
        },
        function() {
            $(this).removeClass('with-shadow');
            $(this).find('.parameters').fadeOut(100);
            $(this).css('z-index', '0');
        }
    );

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

    $('.catalog-control .on-right-main').click(function() {
        var productArray = $('.main-catalog .product-card-wrap');
        var currentFirst = $('.first-visible').index();
        $(productArray[currentFirst]).removeClass('first-visible');
        currentFirst = currentFirst + 6;
        $(productArray[currentFirst]).addClass('first-visible');
        productArray.removeClass('visible');
        if (currentFirst + 6 < $('.main-catalog .product-card-wrap').length) {
            for (var i = currentFirst; i < currentFirst + 6; i++){
                $('.main-catalog .product-card-wrap').eq(i).addClass('visible');
            }
        } else {
            for (var j = currentFirst; j < $('.main-catalog .product-card-wrap').length; j++){
                $('.main-catalog .product-card-wrap').eq(j).addClass('visible');
            }
            $('.catalog-control .on-right-main').css('visibility', 'hidden');
        }
        $('.catalog-control .on-left-main').css('visibility', 'visible');
    });

    $('.catalog-control .on-left-main').click(function() {
        var productArray = $('.main-catalog .product-card-wrap');
        var currentFirst = $('.first-visible').index();
        $(productArray[currentFirst]).removeClass('first-visible');
        currentFirst = currentFirst - 6;
        $(productArray[currentFirst]).addClass('first-visible');
        $('.main-catalog .product-card-wrap').removeClass('visible');
        for (var i = currentFirst; i < currentFirst + 6; i++){
            $('.main-catalog .product-card-wrap').eq(i).addClass('visible');
        }
        if (currentFirst == 0) {
            $('.catalog-control .on-left-main').css('visibility', 'hidden');
        }
        $('.catalog-control .on-right-main').css('visibility', 'visible');
    });

});
