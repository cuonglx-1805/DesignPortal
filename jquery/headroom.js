$("#back-to-top").click(function(){return $("body, html").animate({scrollTop:0},400),!1});
$(function(){$('[data-toggle="tooltip"]').tooltip()});
var myElement = document.querySelector(".headroom");
var headroom  = new Headroom(myElement);
headroom.init(); 