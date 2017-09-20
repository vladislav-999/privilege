/**
 * Created by Vladislav_PC on 20.09.2017.
 */

var products_list = [
        {
            "id" : 1,
            "name": "Women White Shirt",
            "price": '150.00',
            "oldprice": null,
            "rating": 4,
            "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
            "category": "women",
            "img": "./img/prod-1.png",
            "reviews": 0,
            "badge": "",
            "features": [{
                "size": 5,
                "brand": "Gucci",
                "color": "grey"
            }]
        }, {
            "id" : 2,
            "name": "Women Shirt Summer",
            "price": '230.00',
            "oldprice": '320.00',
            "rating": 3,
            "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
            "category": "women",
            "img": "./img/prod-2.png",
            "reviews": 2,
            "badge": '<div class="product-card-item-img-badge">new</div>',
            "features": [{
                "size": 5,
                "brand": "Gucci",
                "color": "red"
            }]
        },{
            "id" : 3,
            "name": "Women Flowers Shirt",
            "price": '190.00',
            "oldprice": '250.00',
            "rating": 5,
            "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
            "category": "women",
            "img": "./img/prod-3.png",
            "reviews": 3,
            "badge":  '<div class="product-card-item-img-badge">new</div>',
            "features": [{
                "size": 5,
                "brand": "Gucci",
                "color": "red"
            }]
        },{
            "id" : 4,
            "name": "Women Shirt",
            "price": '150.00',
            "oldprice": null,
            "rating": 4,
            "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
            "category": "women",
            "img": "./img/prod-1.png",
            "reviews": 4,
            "badge": "",
            "features": [{
                "size": 5,
                "brand": "Gucci",
                "color": "gold"
            }]
        }, {
            "id" : 5,
            "name": "Women Jeans Shirt",
            "price": '230.00',
            "oldprice": null,
            "rating": 3,
            "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
            "category": "women",
            "img": "./img/prod-2.png",
            "reviews": 0,
            "badge": "",
            "features": [{
                "size": 5,
                "brand": "Gucci",
                "color": "white"
            }]
        }, {
        "id" : 6,
        "name": "Men Suit Jacket",
        "price": '150.00',
        "oldprice": null,
        "rating": 3,
        "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
        "category": "men",
        "img": "./img/prod-4.png",
        "reviews": 0,
        "badge": "",
        "features": [{
            "size": 5,
            "brand": "Gucci",
            "color": "white"
        }]
    }, {
        "id" : 7,
        "name": "Men Suit Jacket",
        "price": '230.00',
        "oldprice": '320.00',
        "rating": 3,
        "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
        "category": "men",
        "img": "./img/prod-8.png",
        "reviews": 0,
        "badge": "",
        "features": [{
            "size": 5,
            "brand": "Gucci",
            "color": "white"
        }]
    }, {
        "id" : 8,
        "name": "Men Suit Jacket",
        "price": '250.00',
        "oldprice": '190.00',
        "rating": 3,
        "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
        "category": "men",
        "img": "./img/prod-9.png",
        "reviews": 0,
        "badge": '<div class="product-card-item-img-badge">new</div>',
        "features": [{
            "size": 5,
            "brand": "Gucci",
            "color": "white"
        }]
    }, {
        "id" : 9,
        "name": "Sunglasses",
        "price": '150.00',
        "oldprice": null,
        "rating": 3,
        "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
        "category": "accesories",
        "img": "./img/prod-5.png",
        "reviews": 0,
        "badge": "",
        "features": [{
            "size": 5,
            "brand": "Gucci",
            "color": "white"
        }]
    }, {
        "id" : 10,
        "name": "Hat",
        "price": '230.00',
        "oldprice": '320.00',
        "rating": 3,
        "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
        "category": "accesories",
        "img": "./img/prod-6.png",
        "reviews": 0,
        "badge": "",
        "features": [{
            "size": 5,
            "brand": "Gucci",
            "color": "white"
        }]
    }, {
        "id" : 11,
        "name": "Clock",
        "price": '250.00',
        "oldprice": '190.00',
        "rating": 3,
        "description": "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
        "category": "accesories",
        "img": "./img/prod-7.png",
        "reviews": 0,
        "badge": '<div class="product-card-item-img-badge">new</div>',
        "features": [{
            "size": 5,
            "brand": "Gucci",
            "color": "white"
        }]
    }];



var products = {
    productList: products_list,

    getProduct: function(id){
        return getProduct(this, id);
    },

    getRating: function(id){
        return getRating(this, id);
    }

}

function getProduct(obj, id) {
    return obj.productList[id];
}

function getRating(obj, id) {
    var rating = obj.productList[id].rating;
    var ratingHtml = '';

    for(var i = 0; 5 > i; i++){
        if(rating > i){
            ratingHtml += '<i class="zmdi zmdi-star"></i>';
        }else{
            ratingHtml += '<i class="zmdi zmdi-star-outline"></i>';
        }
    }

    return ratingHtml;
}



$(document).ready(function(){



    var strGET = window.location.search.replace( '?', '');
    console.log(strGET);
    var params = window
        .location
        .search
        .replace('?','')
        .split('&')
        .reduce(
            function(p,e){
                var a = e.split('=');
                p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );


    $('.header-menu_menu__a').removeClass('select');
    $('a[href="./category.html?'+strGET+'"]').addClass('select');

    console.log( params['cat']);

    for(i = 0; products.productList.length > i; i++){

        if(params['cat'] == products.productList[i].category){

            if(products.productList[i].oldprice != null) {
                oldprice = '<span class="old-price">$' + products.productList[i].oldprice + '</span>';
            }else{
                oldprice = '';
            }


            $('.product-list .wrapper').append(' <div  class="product-card-item">'+
                '<a href="./product.html">'+
                '<div class="product-card-item-img">'+
                products.productList[i].badge +
                '<img src="'+ products.productList[i].img +'" alt="">'+
                '<div class="product-card-review-raiting">'+ products.getRating(i) +
                '</div>'+
                '</div>'+
                '</a>'+
                '<div class="product-card-add-to-cart">'+
                '<div class="product-card-item-title">'+
                '<a href="./product.html">'+ products.productList[i].name +'</a>'+
           ' </div>'+
            '<div class="product-card-review">'+
            '<div class="product-card-review-raiting">'+ products.getRating(i) +
               ' </div>'+
               ' <a href="#">'+ products.productList[i].reviews +' Review(s)</a> | <a href="#">Add Review</a>'+
            '</div>'+
           '<div class="product-card-item-description">'+
               '<div class="product-card-item-description__description">'+ products.productList[i].description +'</div>'+
            '<div class="product-card-item-price">'+
               oldprice + '$'+products.productList[i].price +
            '</div>'+
            '</div>'+
            '<a href="" class="product-card-buy-add-to-cart__favorite"><i class="zmdi zmdi-favorite-outline"></i></a>'+
               '<button class="product-card-item__button">'+
               ' Add to Cart'+
           '</button>'+
            '<a href="" class="product-card-buy-add-to-cart__compare"><i class="zmdi zmdi-swap-vertical"></i></a>'+
               '</div>'+
                '</div>');

        }
    }

});
