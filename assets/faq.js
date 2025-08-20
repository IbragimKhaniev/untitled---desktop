const displayVisibleType = 'flex';

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-item__answer');
        const button = item.querySelector('.faq-item__button');
        
        // Изначально скрываем все ответы
        answer.style.display = 'none';

        // Обработчик клика на весь элемент FAQ
        item.addEventListener('click', function() {
            const isOpen = answer.style.display === displayVisibleType;
            
            // Переключаем отображение ответа
            answer.style.display = isOpen ? 'none' : displayVisibleType;

            // Переключаем иконки
            const arrowIcon = button.querySelector('.faq-item__button-plus');
            const plusIcon = button.querySelector('.faq-item__button-minus');
            
            if (arrowIcon && plusIcon) {
                arrowIcon.style.display = isOpen ? displayVisibleType : 'none';
                plusIcon.style.display = isOpen ? 'none' : displayVisibleType;
            }
        });
    });
});