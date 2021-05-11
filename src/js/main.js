$(document).ready(function () {

    $(".owl-carousel").owlCarousel(
      {
        items:1,
        dots:true,
        loop:true
      }
    );

    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  $('ul.work__caption').on('click', 'li:not(.work__item_active)', function() {
    $(this)
      .addClass('work__item_active').siblings().removeClass('work__item_active')
      .closest('div.work__tabs').find('div.work__content').removeClass('work__content_active').eq($(this).index()).addClass('work__content_active');
   });

   var swiper = new Swiper(".my-swiper", {
    navigation: {
      nextEl: ".swiper-button-nexts",
      prevEl: ".swiper-button-prevs",
    },
  });


  $('.header__button').on('click', function() {
    $('.overlay, .popup__consultation').fadeIn('slow')
  });
  
  $('.popup__close').on('click', function () {
    $('.overlay, .popup__consultation').fadeOut('slow')
  });

});


