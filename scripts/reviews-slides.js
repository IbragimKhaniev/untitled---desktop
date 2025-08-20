document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.reviews-section__slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    
    breakpoints: {
      // Мобильные устройства (до 768px)
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // Планшеты (768px и выше)
      768: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      // Десктоп (1024px и выше)
      1024: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    },
    
    // Навигация (опционально)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Пагинация (опционально)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
});
