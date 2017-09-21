/**
 * Created by Vladislav_PC on 12.09.2017.
 */



$(document).ready(function(){


    $('.owl-carousel').slick();

    $('.product-small-image').slick({
        slidesToShow: 3
    });

    $('.product-small-image a').hover(function(){
        var href = $(this).attr('href');

        $('.product-small-image a').removeClass('active');
        $(this).addClass('active');

        $('.product-main-image a').attr('href', href);
        $('.product-main-image img').attr('src', href);
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

    $('a.popup').click(function(e){
        e.preventDefault();

       var id = $(this).attr('href');
       console.log(id);

       if($(id).hasClass('active')){
           $(id).removeClass('active');
       }else{
           $(id).addClass('active');
       }

    });


    $('select').styler();

    $('.product-page-description-tabs__ul a').click(function(){
        var id = $(this).attr('href');

        $('.product-page-description-tabs__ul a').removeClass('active');

        $(this).addClass('active');

        $('.product-page-description-content > div').removeClass('active');

        $(id).addClass('active');
    });

    $(".product-cart-review").on("click","a", function (e) {
        e.preventDefault();
        if($('#reviews').hasClass('active') ){
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        }else{
            $('#review-href').click();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);

        }

    });

    $('.language-block__select').change(function () {
        var parent = $(this).closest('.jq-selectbox');
        if($(this).val() != '') {
            parent.find('.jq-selectbox__select-text').html($(this).val());
        }
    });

    $('.language-block__select').change();

});
