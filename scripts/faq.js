document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const answer = item.querySelector('.faq-item__answer');
    const button = item.querySelector('.faq-item__button');
    
    // Изначально скрываем все ответы
    answer.style.display = 'none';
    
    // Обработчик клика на весь элемент FAQ
    item.addEventListener('click', function() {
      // Проверяем, открыт ли текущий ответ
      const isOpen = answer.style.display === 'block';
      
      // Закрываем все открытые ответы
      document.querySelectorAll('.faq-item__answer').forEach(ans => {
        ans.style.display = 'none';
      });
      
      // Восстанавливаем все кнопки в исходное состояние
      document.querySelectorAll('.faq-item__button').forEach(btn => {
        const arrowIcon = btn.querySelector('.slider-section__arrow-icon');
        const plusIcon = btn.querySelector('.faq-item__button-plus');
        
        if (arrowIcon) arrowIcon.style.display = 'block';
        if (plusIcon) plusIcon.style.display = 'none';
      });
      
      // Если текущий элемент был закрыт - открываем его
      if (!isOpen) {
        answer.style.display = 'block';
        
        // Меняем иконку на плюс
        const arrowIcon = button.querySelector('.slider-section__arrow-icon');
        const plusIcon = button.querySelector('.faq-item__button-plus');
        
        if (arrowIcon) arrowIcon.style.display = 'none';
        if (plusIcon) plusIcon.style.display = 'block';
      }
    });
  });
});
