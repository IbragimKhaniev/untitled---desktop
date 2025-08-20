document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.application-demo-section__slider .swiper', {
    effect: 'fade', // Основная настройка для эффекта затухания
    fadeEffect: {
      crossFade: true // Включает перекрестное затухание
    },
    speed: 1000, // Скорость перехода (мс)
    autoplay: {
      delay: 2000, // Автопрокрутка каждые 5 секунд
      disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, // Бесконечная цикличность
  });
});
