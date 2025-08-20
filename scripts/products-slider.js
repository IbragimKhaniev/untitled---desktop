document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.team-section__slider .swiper', {
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

  const productLinks = document.querySelectorAll('.team-section__filter');
  
  // Обработчик клика на фильтры
  productLinks.forEach((filter, index) => {
    filter.addEventListener('click', () => {
      // Удаляем активные классы у всех фильтров
      productLinks.forEach(f => {
        f.classList.remove('team-section__filter--active');
        f.classList.add('team-section__filter--inactive');
        
        const text = f.querySelector('.team-section__filter-text');
        text.classList.remove('team-section__filter-text--active');
        text.classList.add('team-section__filter-text--inactive');
      });
      
      // Добавляем активные классы к текущему фильтру
      filter.classList.remove('team-section__filter--inactive');
      filter.classList.add('team-section__filter--active');
      
      const text = filter.querySelector('.team-section__filter-text');
      text.classList.remove('team-section__filter-text--inactive');
      text.classList.add('team-section__filter-text--active');
      
      // Переключаем слайдер на соответствующий слайд
      swiper.slideToLoop(index);
    });
  });
  
  // Обновляем активный фильтр при смене слайда
  swiper.on('slideChange', function() {
    const activeIndex = swiper.realIndex; // Получаем реальный индекс (без учета loop)
    
    // Удаляем активные классы у всех фильтров
    productLinks.forEach((filter, index) => {
      if (index === activeIndex) {
        filter.classList.remove('team-section__filter--inactive');
        filter.classList.add('team-section__filter--active');
        
        const text = filter.querySelector('.team-section__filter-text');
        text.classList.remove('team-section__filter-text--inactive');
        text.classList.add('team-section__filter-text--active');
      } else {
        filter.classList.remove('team-section__filter--active');
        filter.classList.add('team-section__filter--inactive');
        
        const text = filter.querySelector('.team-section__filter-text');
        text.classList.remove('team-section__filter-text--active');
        text.classList.add('team-section__filter-text--inactive');
      }
    });
  });
});
