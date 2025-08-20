document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.application-demo-section__slider .swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        coverflowEffect: {
          depth: 100,
          modifier: 0.8,
        }
      },
      768: {
        coverflowEffect: {
          depth: 150,
          modifier: 1,
        }
      },
      1024: {
        coverflowEffect: {
          depth: 200,
          modifier: 1.2,
        }
      }
    }
  });
});
