console.log(122222222);
$(document).ready(() => {
   $('.burger').on('click', function () {
     
       if($('.menu').hasClass('active')) {
           $('.menu').removeClass('active');
       } else {
           $('.menu').addClass('active');
       }
   })
});
