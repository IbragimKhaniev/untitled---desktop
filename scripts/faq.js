document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-item__answer');
        const button = item.querySelector('.faq-item__button');
        
        // Изначально скрываем все ответы
        answer.style.display = 'none';
        
        // Обработчик клика на весь элемент FAQ
        item.addEventListener('click', function() {
            const isOpen = answer.style.display === 'block';
            
            // Переключаем отображение ответа
            answer.style.display = isOpen ? 'none' : 'block';
            
            // Переключаем иконки
            const arrowIcon = button.querySelector('.slider-section__arrow-icon');
            const plusIcon = button.querySelector('.faq-item__button-plus');
            
            if (arrowIcon && plusIcon) {
                arrowIcon.style.display = isOpen ? 'block' : 'none';
                plusIcon.style.display = isOpen ? 'none' : 'block';
            }
        });
    });
});