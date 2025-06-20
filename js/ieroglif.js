document.addEventListener('DOMContentLoaded', function() {
    // Обработка кнопок "Подробнее"
    const showMoreButtons = document.querySelectorAll('.show-more-btn');
    
    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.hieroglyph-card');
            card.classList.toggle('active');
            
            // Закрытие других открытых карточек
            if (card.classList.contains('active')) {
                document.querySelectorAll('.hieroglyph-card').forEach(otherCard => {
                    if (otherCard !== card && otherCard.classList.contains('active')) {
                        otherCard.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Воспроизведение звука
    const audioCache = {};

    const playSoundButtons = document.querySelectorAll('.play-sound');
        
    playSoundButtons.forEach(button => {
        button.addEventListener('click', function() {
            const soundFile = this.getAttribute('data-sound');
            if (!soundFile) return;
            
            // Используем кешированный аудио объект или создаем новый
            if (!audioCache[soundFile]) {
                // Убрал слеш перед sound для корректного пути
                audioCache[soundFile] = new Audio(`sound/${soundFile.split('/').pop()}`);
                
                // Обработка ошибок загрузки
                audioCache[soundFile].addEventListener('error', (e) => {
                    console.error('Ошибка загрузки аудио:', e);
                    delete audioCache[soundFile];
                    // Покажем пользователю сообщение
                    button.innerHTML = '<i class="fas fa-volume-up"></i> Ошибка загрузки';
                    setTimeout(() => {
                        button.innerHTML = '<i class="fas fa-volume-up"></i> Произношение';
                    }, 2000);
                });
            }
            
            // Воспроизводим звук
            audioCache[soundFile].play()
                .catch(e => {
                    console.error("Ошибка воспроизведения:", e);
                    // Fallback на Google TTS если не получилось воспроизвести
                    const pinyin = button.closest('.pronunciation').querySelector('.pinyin').textContent;
                    const ttsAudio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encodeURIComponent(pinyin)}`);
                    ttsAudio.play();
                });
        });
    });
    
    
    // Фильтрация иероглифов
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const hieroglyphCards = document.querySelectorAll('.hieroglyph-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const filterValue = this.textContent.trim();
            
            // Фильтрация карточек
            hieroglyphCards.forEach(card => {
                const cardHskLevel = card.dataset.hskLevel || '';
                const isCommon = card.classList.contains('common');
                
                if (filterValue === 'Все' || 
                    (filterValue === 'Часто используемые' && isCommon) || 
                    (filterValue.includes('HSK') && cardHskLevel === filterValue.split(' ')[1])) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    
    // Поиск иероглифов
    // 3. Поиск иероглифов
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        hieroglyphCards.forEach(card => {
            const character = card.querySelector('.character').textContent.toLowerCase();
            const translation = card.querySelector('.translation').textContent.toLowerCase();
            const pinyin = card.querySelector('h3').textContent.toLowerCase();
            
            if (!searchTerm) {
                // Если поиск пустой, показываем все карточки
                card.style.display = 'block';
            } else if (character.includes(searchTerm) || 
                      translation.includes(searchTerm) || 
                      pinyin.includes(searchTerm)) {
                // Показываем совпадения с анимацией
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Анимация при скролле
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.hieroglyph-card');
        
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Инициализация анимации
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запускаем сразу для видимых элементов
});