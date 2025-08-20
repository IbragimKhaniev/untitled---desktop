document.addEventListener('DOMContentLoaded', function() {
  // Устанавливаем целевую дату: 4 сентября 12:00 по Москве
  function createTargetDate() {
      const now = new Date();
      const targetDate = new Date(now.getFullYear(), 8, 4, 12, 0, 0); // Месяцы начинаются с 0 (8 = сентябрь)
      
      // Если дата уже прошла в этом году, устанавливаем на следующий год
      if (targetDate < now) {
          targetDate.setFullYear(now.getFullYear() + 1);
      }
      
      return targetDate;
  }

  // Получаем элементы DOM
  const timerElements = {
      days: document.querySelector('.timer-item:nth-child(1) .timer-item__number'),
      hours: document.querySelector('.timer-item:nth-child(3) .timer-item__number'),
      minutes: document.querySelector('.timer-item:nth-child(5) .timer-item__number'),
      seconds: document.querySelector('.timer-item:nth-child(7) .timer-item__number')
  };

  // Функция обновления таймера
  function updateTimer() {
      const targetDate = createTargetDate();
      const now = new Date();
      const timeDifference = targetDate - now;

      // Если время истекло
      if (timeDifference <= 0) {
          clearInterval(timerInterval);
          setExpiredState();
          return;
      }

      // Вычисляем оставшееся время
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Обновляем значения на странице
      timerElements.days.textContent = days.toString().padStart(2, '0');
      timerElements.hours.textContent = hours.toString().padStart(2, '0');
      timerElements.minutes.textContent = minutes.toString().padStart(2, '0');
      timerElements.seconds.textContent = seconds.toString().padStart(2, '0');
  }

  // Функция для установки состояния "время истекло"
  function setExpiredState() {
      timerElements.days.textContent = '00';
      timerElements.hours.textContent = '00';
      timerElements.minutes.textContent = '00';
      timerElements.seconds.textContent = '00';
  }

  // Запускаем таймер
  const timerInterval = setInterval(updateTimer, 1000);

  // Первоначальное обновление
  updateTimer();
});