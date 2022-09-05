$(document).ready(function(){ 
  
  console.log('ibc ready');

    $('.slider-multiple-items').slick({
        infinite: true,
        arrows:false,
        dots: true,
        dotsClass: 'ibc-slick-dots',
        slidesToShow: 1,
        variableWidth: true,
        customPaging: function(slick, index) {
          return `<div class="ibc-slick-dot"></div>`
        }
      });
    $('.slider-bottom-img-green').slick({
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

