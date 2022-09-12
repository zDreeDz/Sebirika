$(document).ready(function(){ 
    $('.container-slider-img-slider').slick({
        slidesToShow: 1,
        dots: true,
        arrows:false,
        dotsClass: 'ibc-slick-dots-detail',
        customPaging: function(slider, i) {      
            return '<div class="custom-slick-dots" id=' + i + "></div>";
        }
        });    
      $('.description-slider-items-bottom-img').slick({
        //slidesToShow: 4,
        // dots: false,
        // arrows:false,
        // dotsClass: 'ibc-slick-dots-detail',
        /*customPaging: function(slider, i) {      
            return '<div class="custom-slick-dots" id=' + i + "></div>";
        }*/
        });  

});