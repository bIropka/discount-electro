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

});
