$(document).ready(() => {
   $('.burger').on('click', function () {
     
       if($('.menu').hasClass('active')) {
           $('.menu').removeClass('active');
       } else {
           $('.menu').addClass('active');
       }
   })
});
$(document).ready(() => {
   $('.menu__close-btn').on('click', function () {
     
       if($('.menu').hasClass('active')) {
           $('.menu').removeClass('active');
       } else {
           $('.menu').addClass('active');
       }
   })
});

