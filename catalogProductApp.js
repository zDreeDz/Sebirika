$(document).ready(function() {
    $('.hedar-burger').click(function(event){
      $('.hedar-burger,.bgmenu').toggleClass('active');
    });
    
    $('.slider-multiple-items-mobile').slick({
      infinite: true,
      arrows:false,
      dots: true,
      dotsClass: 'ibc-slick-dots',
      slidesToShow: 4,
      variableWidth: true,
      customPaging: function(slick, index) {
        return `<div class="ibc-slick-dot"></div>`
      }
    });

    $('.ibcslider-mobile').slick({
      infinite: true,
      arrows:false,
      dots: false,
      dotsClass: 'ibc-slick-dots',
      slidesToShow: 1,
      variableWidth: true,
      customPaging: function(slick, index) {
        return `<div class="ibc-slick-dot"></div>`
      }
    });
});

   
