/**
 * Created by Vladislav_PC on 20.09.2017.
 */

var products;

$(function(){
    $.getJSON('./scripts/products.json', function(data) {
        for(var i=0;i<data.users.length;i++){
            $('#users').append('<tr><td>' + data.users[i].id + '</td><td>' + data.users[i].name +
                '</td><td>' + data.users[i].age + '</td><tr>');
        }
    });
});
