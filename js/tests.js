document.addEventListener('DOMContentLoaded', function() {
    // Данные для тестов
    const testsData = {
        "level-test": {
            title: "Определение уровня китайского (HSK 1-6)",
            questions: [
                // HSK 1
                {
                    question: "Как сказать 'спасибо'?",
                    options: ["谢谢 (xièxie)", "你好 (nǐ hǎo)", "再见 (zàijiàn)"],
                    correct: 0,
                    level: 1
                },
                {
                    question: "Что означает 人?",
                    options: ["Человек", "Дерево", "Гора"],
                    correct: 0,
                    level: 1
                },
                {
                    question: "Как сказать 'мама'?",
                    options: ["妈妈 (māma)", "爸爸 (bàba)", "哥哥 (gēge)"],
                    correct: 0,
                    level: 1
                },
                {
                    question: "Как переводится 'nǐ hǎo'?",
                    options: ["Здравствуйте", "Спасибо", "Извините"],
                    correct: 0,
                    level: 1
                },
                {
                    question: "Что означает 水?",
                    options: ["Вода", "Огонь", "Дерево"],
                    correct: 0,
                    level: 1
                },
                
                // HSK 2
                {
                    question: "Как сказать 'Я люблю чай'?",
                    options: ["我爱茶 (Wǒ ài chá)", "我茶爱 (Wǒ chá ài)", "茶爱我 (Chá ài wǒ)"],
                    correct: 0,
                    level: 2
                },
                {
                    question: "Как спросить 'Сколько тебе лет?'",
                    options: ["你几岁？(Nǐ jǐ suì?)", "你好吗？(Nǐ hǎo ma?)", "你叫什么？(Nǐ jiào shénme?)"],
                    correct: 0,
                    level: 2
                },
                {
                    question: "Что означает 学校?",
                    options: ["Школа", "Больница", "Магазин"],
                    correct: 0,
                    level: 2
                },
                {
                    question: "Как сказать 'Я студент'?",
                    options: ["我是学生 (Wǒ shì xuéshēng)", "我有学生 (Wǒ yǒu xuéshēng)", "我学生 (Wǒ xuéshēng)"],
                    correct: 0,
                    level: 2
                },
                {
                    question: "Как переводится '今天天气很好'?",
                    options: ["Сегодня хорошая погода", "Завтра будет дождь", "Вчера было холодно"],
                    correct: 0,
                    level: 2
                },
                
                // HSK 3
                {
                    question: "Выберите правильный перевод: 昨天我去了商店",
                    options: ["Вчера я ходил в магазин", "Завтра я пойду в магазин", "Я часто хожу в магазин"],
                    correct: 0,
                    level: 3
                },
                {
                    question: "Как сказать 'Я уже пообедал'?",
                    options: ["我已经吃午饭了 (Wǒ yǐjīng chī wǔfàn le)", "我要吃午饭 (Wǒ yào chī wǔfàn)", "我吃午饭 (Wǒ chī wǔfàn)"],
                    correct: 0,
                    level: 3
                },
                {
                    question: "Что означает 虽然...但是...?",
                    options: ["Хотя... но...", "Потому что...", "Если... то..."],
                    correct: 0,
                    level: 3
                },
                {
                    question: "Как переводится '他觉得这个电影很有意思'?",
                    options: ["Он считает этот фильм очень интересным", "Этот фильм очень длинный", "Я хочу посмотреть этот фильм"],
                    correct: 0,
                    level: 3
                },
                {
                    question: "Как сказать 'Я живу в Китае уже 3 года'?",
                    options: ["我在中国住了三年了 (Wǒ zài Zhōngguó zhùle sān nián le)", "我去中国三年 (Wǒ qù Zhōngguó sān nián)", "我喜欢中国三年 (Wǒ xǐhuān Zhōngguó sān nián)"],
                    correct: 0,
                    level: 3
                },
                
                // HSK 4
                {
                    question: "Какой вариант правильно использует 不但...而且...?",
                    options: [
                        "他不但会说汉语，而且说得很流利",
                        "他不但说汉语，而且英语",
                        "不但他喜欢茶，而且咖啡"
                    ],
                    correct: 0,
                    level: 4
                },
                {
                    question: "Как переводится '由于天气原因，飞机晚点了'?",
                    options: ["Из-за погоды самолет задержался", "Погода сегодня хорошая", "Самолет прилетел вовремя"],
                    correct: 0,
                    level: 4
                },
                {
                    question: "Что означает 成语 '画蛇添足'?",
                    options: ["Делать лишнее (досл. рисовать змее ноги)", "Быть очень быстрым", "Хорошо рисовать"],
                    correct: 0,
                    level: 4
                },
                {
                    question: "Как сказать 'Несмотря на трудности, мы продолжаем работать'?",
                    options: [
                        "尽管有困难，我们还是继续工作",
                        "因为我们有困难，所以不工作",
                        "如果困难，我们就工作"
                    ],
                    correct: 0,
                    level: 4
                },
                {
                    question: "Как переводится '这种传统已经流传了几百年了'?",
                    options: ["Эта традиция сохраняется уже несколько сотен лет", "Это новая традиция", "Традиции меняются каждый год"],
                    correct: 0,
                    level: 4
                }
            ],
            levelDescriptions: {
                1: "Начальный уровень. Вы знаете базовые слова и простые фразы.",
                2: "Вы можете общаться на простые повседневные темы.",
                3: "Средний уровень. Вы понимаете основные грамматические конструкции.",
                4: "Вы можете свободно обсуждать многие темы повседневной жизни.",
                5: "Продвинутый уровень. Вы понимаете сложные тексты и выражения.",
                6: "Владение на уровне носителя. Вы понимаете практически всё."
            }
        },
        "characters-test": {
            title: "Тест по иероглифике",
            questions: [
                {
                    question: "Какой иероглиф означает 'вода'?",
                    options: ["水 (shuǐ)", "火 (huǒ)", "木 (mù)", "山 (shān)"],
                    correct: 0
                },
                {
                    question: "Что означает иероглиф 爱?",
                    options: ["Любовь", "Ненависть", "Радость", "Грусть"],
                    correct: 0
                },
                {
                    question: "Какой иероглиф означает 'большой'?",
                    options: ["大 (dà)", "小 (xiǎo)", "多 (duō)", "少 (shǎo)"],
                    correct: 0
                },
                {
                    question: "Что означает 学校?",
                    options: ["Школа", "Больница", "Парк", "Магазин"],
                    correct: 0
                },
                {
                    question: "Какой иероглиф означает 'книга'?",
                    options: ["书 (shū)", "笔 (bǐ)", "纸 (zhǐ)", "字 (zì)"],
                    correct: 0
                }
            ]
        },
        "grammar-test": {
            title: "Грамматический тест",
            questions: [
                {
                    question: "Как правильно сказать 'Я люблю Китай'?",
                    options: [
                        "我爱中国 (Wǒ ài Zhōngguó)",
                        "我中国爱 (Wǒ Zhōngguó ài)",
                        "中国爱我 (Zhōngguó ài wǒ)",
                        "爱中国我 (Ài Zhōngguó wǒ)"
                    ],
                    correct: 0
                },
                {
                    question: "Где должен стоять 吗 в вопросе?",
                    options: [
                        "В конце предложения",
                        "В начале предложения",
                        "После подлежащего",
                        "Перед глаголом"
                    ],
                    correct: 0
                },
                {
                    question: "Как сказать 'Я хочу пить'?",
                    options: [
                        "我想喝水 (Wǒ xiǎng hē shuǐ)",
                        "我要喝水 (Wǒ yào hē shuǐ)",
                        "我喝水 (Wǒ hē shuǐ)",
                        "Все варианты правильные"
                    ],
                    correct: 3
                },
                {
                    question: "Как построить предложение с 了 для завершенного действия?",
                    options: [
                        "Подлежащее + 了 + глагол + дополнение",
                        "Подлежащее + глагол + дополнение + 了",
                        "了 + подлежащее + глагол + дополнение",
                        "Глагол + 了 + подлежащее + дополнение"
                    ],
                    correct: 1
                },
                {
                    question: "Как сказать 'Я уже поужинал'?",
                    options: [
                        "我吃饭了 (Wǒ chīfàn le)",
                        "我已经吃饭了 (Wǒ yǐjīng chīfàn le)",
                        "我吃饭过 (Wǒ chīfàn guò)",
                        "Все варианты правильные"
                    ],
                    correct: 1
                }
            ]
        },
        "culture-test": {
            title: "Тест на знание культуры Китая",
                questions: [
                    {
                        question: "Какой праздник самый важный в Китае?",
                        options: [
                            "Праздник середины осени",
                            "День рождения Конфуция",
                            "Китайский Новый год",
                            "День образования КНР"
                        ],
                        correct: 2,
                        level: 2
                    },
                    {
                        question: "Что символизирует красный цвет в китайской культуре?",
                        options: [
                            "Траур",
                            "Удачу и счастье",
                            "Опасность",
                            "Богатство"
                        ],
                        correct: 1,
                        level: 2
                    },
                    {
                        question: "Какое животное не входит в 12-летний цикл китайского зодиака?",
                        options: [
                            "Дракон",
                            "Кролик",
                            "Кошка",
                            "Свинья"
                        ],
                        correct: 2,
                        level: 3
                    },
                    {
                        question: "Что традиционно дарят на китайскую свадьбу?",
                        options: [
                            "Чётную сумму денег в красном конверте",
                            "Нечётную сумму денег в белом конверте",
                            "Чайный набор",
                            "Фарфоровые изделия"
                        ],
                        correct: 0,
                        level: 4
                    },
                    {
                        question: "Как называется китайская философия 'золотой середины'?",
                        options: [
                            "道教 (Dàojiào)",
                            "中庸 (Zhōngyōng)",
                            "法家 (Fǎjiā)",
                            "墨家 (Mòjiā)"
                        ],
                        correct: 1,
                        level: 5
                    }
                ]
            }
    };

    // Инициализация тестов
    function initTests() {
        initLevelTest();
        
        // Инициализация других тестов
        const testIds = ["characters-test", "grammar-test","culture-test"];
        testIds.forEach(testId => {
            const testCard = document.getElementById(testId);
            const testQuestions = testCard.querySelector('.test-questions');
            const testData = testsData[testId];
            
            testQuestions.innerHTML = '';
            testData.questions.forEach((q, i) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'test-question';
                questionDiv.innerHTML = `
                    <h3>${i+1}. ${q.question}</h3>
                    ${q.options.map((opt, j) => `
                        <label class="test-option">
                            <input type="radio" name="question-${i}" value="${j}">
                            ${opt}
                        </label>
                    `).join('')}
                `;
                testQuestions.appendChild(questionDiv);
            });
        });
    }

    // Инициализация теста уровня (20 вопросов)
    function initLevelTest() {
        const testCard = document.getElementById('level-test');
        const testQuestions = testCard.querySelector('.test-questions');
        const testData = testsData['level-test'];
        
        // Выбираем 20 случайных вопросов
        const shuffledQuestions = [...testData.questions].sort(() => Math.random() - 0.5).slice(0, 20);
        
        // Генерируем вопросы
        testQuestions.innerHTML = '';
        shuffledQuestions.forEach((q, i) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'test-question';
            questionDiv.innerHTML = `
                <h3>${i+1}. ${q.question} <span class="question-level">(HSK ${q.level})</span></h3>
                ${q.options.map((opt, j) => `
                    <label class="test-option">
                        <input type="radio" name="question-${i}" value="${j}">
                        ${opt}
                    </label>
                `).join('')}
            `;
            testQuestions.appendChild(questionDiv);
        });
    }

    // Функция переключения теста (развернуть/свернуть)
    window.toggleTest = function(testId) {
        const testCard = document.getElementById(testId);
        const testContent = testCard.querySelector('.test-content');
        const toggleBtn = testCard.querySelector('.toggle-btn');
        const testResults = testCard.querySelector('.test-results');
        
        if (testContent.style.display === 'none' || !testContent.style.display) {
            // Развернуть тест
            testContent.style.display = 'block';
            toggleBtn.textContent = 'Свернуть тест';
        } else {
            // Свернуть тест
            testContent.style.display = 'none';
            testResults.style.display = 'none';
            toggleBtn.textContent = testId === 'level-test' ? 'Начать тест' : 'Развернуть тест';
        }
    };

    // Проверка результатов теста уровня
    window.checkLevelTestResults = function() {
        const testCard = document.getElementById('level-test');
        const testQuestions = testCard.querySelector('.test-questions');
        const testResults = testCard.querySelector('.test-results');
        const testData = testsData['level-test'];
        
        // Анализ ответов
        let correctAnswersByLevel = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
        let totalByLevel = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
        let totalCorrect = 0;
        
        testData.questions.forEach((q, i) => {
            const questionElement = testQuestions.querySelector(`div:nth-child(${i+1})`);
            if (questionElement) {
                if (q.level) {
                    totalByLevel[q.level]++;
                    const selectedOption = questionElement.querySelector(`input[name="question-${i}"]:checked`);
                    if (selectedOption && parseInt(selectedOption.value) === q.correct) {
                        correctAnswersByLevel[q.level]++;
                        totalCorrect++;
                    }
                }
            }
        });
        
        // Определение уровня
        let determinedLevel = 1;
        const perfectScore = totalCorrect === 20;

        
        // Если все ответы правильные (20/20), сразу присваиваем максимальный уровень
        if (perfectScore) {
        // При идеальном результате сразу HSK 6
        determinedLevel = 6;
        } else {
            // Стандартная логика определения уровня (как было)
            for (let level = 1; level <= 6; level++) {
                if (totalByLevel[level] > 0) {
                    const accuracy = correctAnswersByLevel[level] / totalByLevel[level];
                    if (accuracy >= 0.7) { // 70% правильных ответов для уровня
                        determinedLevel = level;
                    }
                }
            }
        }
        
        // Показ результатов
        const percentage = Math.round((totalCorrect / 20) * 100);
        
        testResults.innerHTML = `
            <div class="level-result">
                <h3>Ваш уровень</h3>
                <div class="level-badge">HSK ${determinedLevel}</div>
                <div class="level-description">${testData.levelDescriptions[determinedLevel]}</div>
                <div class="level-progress">
                    <div class="progress-bar" style="width: ${(determinedLevel / 6) * 100}%"></div>
                </div>
                <div class="levels-scale">
                    <span>HSK 1</span><span>HSK 2</span><span>HSK 3</span><span>HSK 4</span><span>HSK 5</span><span>HSK 6</span>
                </div>
                <p>Вы ответили правильно на ${totalCorrect} из 20 вопросов (${percentage}%)</p>
            </div>
        `;
        
        testResults.style.display = 'block';
        testResults.scrollIntoView({ behavior: 'smooth' });
    };

    

    // Проверка результатов для обычных тестов
    window.checkResults = function(testId) {
        const testCard = document.getElementById(testId);
        const testQuestions = testCard.querySelector('.test-questions');
        const testResults = testCard.querySelector('.test-results');
        const testData = testsData[testId];
        
        let correctAnswers = 0;
        
        testData.questions.forEach((q, i) => {
            const selectedOption = testQuestions.querySelector(`input[name="question-${i}"]:checked`);
            if (selectedOption && parseInt(selectedOption.value) === q.correct) {
                correctAnswers++;
            }
        });
        
        const percentage = Math.round((correctAnswers / testData.questions.length) * 100);
        let message = '';
        
        if (percentage >= 80) {
            message = 'Отличный результат! Вы хорошо знаете материал.';
        } else if (percentage >= 50) {
            message = 'Неплохо, но есть куда расти!';
        } else {
            message = 'Попробуйте изучить материал еще раз и пройти тест заново.';
        }
        
        testResults.innerHTML = `
            <h3>Результаты теста "${testData.title}"</h3>
            <p>Вы ответили правильно на ${correctAnswers} из ${testData.questions.length} вопросов (${percentage}%).</p>
            <p>${message}</p>
        `;
        
        testResults.style.display = 'block';
        testResults.scrollIntoView({ behavior: 'smooth' });
    };

    // Инициализация при загрузке страницы
    initTests();
});