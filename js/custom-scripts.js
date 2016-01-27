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
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.product-card').hover(
        function(){
            $(this).css('z-index', '1');
            $(this).find('.parameters').fadeIn();
            $(this).addClass('with-shadow');
        },
        function() {
            $(this).removeClass('with-shadow');
            $(this).find('.parameters').fadeOut();
            $(this).css('z-index', '0');
        }
    );

});
