/**
 * Created by Vladislav_PC on 12.09.2017.
 */
$(document).ready(function(){


    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true
    });

    $('a.product-sort-view__a').click(function(){
        if(!$(this).hasClass('active')){
            $('a.product-sort-view__a').removeClass('active');
            $(this).addClass('active');
            $('.product-list').removeClass('grid');
            $('.product-list').removeClass('list');

            $('.product-list').addClass($(this).attr('data-view'));
        }
    });

    $('.hide__toggle').click(function(){
        var that = $(this).parent().parent();
        if(that.hasClass('hide')){
            that.removeClass('hide');
        }else{
            that.addClass('hide');
        }
    });

    $('.pagination a.active').click(function(e){
        e.preventDefault();
    });

});