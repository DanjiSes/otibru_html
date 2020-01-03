$(document).ready(function(){

    $(".scroll").click(function(event){
        //prevent the default action for the click event
        event.preventDefault();

        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scrolltop').fadeIn();
        } else {
            $('#scrolltop').fadeOut();
        }
    });

    $('#scrolltop').click(function(event) {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    $('.video__preview').click(function(event) {
        $(this).toggleClass('activ');
    });

    /*var where_lists = $('.where__list');

    for (var i = where_lists.length - 1; i >= 0; i--) {
        
        var list = $(where_lists[i]);

        list.attr('data-finish', list.height());
        list.attr('data-statrt', list.find('li').first().height());
        list.height(list.find('li').first().height());

    }

    $('.slider__btn').click(function(event) {
        
        var list = $(this).parent('.slider').prev('.where__list'),
            is_active = list.hasClass('active');

        if(is_active) {
            list.height(list.attr('data-statrt'));
        } else {
            list.height(list.attr('data-finish'));
        }

        list.toggleClass('active');
        $(this).toggleClass('active');

    });*/

});