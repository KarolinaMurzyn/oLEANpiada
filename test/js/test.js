document.addEventListener("DOMContentLoaded", function() {
    const quizForm = document.getElementById('quiz-form');
    const submitButton = document.getElementById('submit-btn');
    const restartButton = document.getElementById('restart-btn');
    const resultContainer = document.getElementById('result');
    const correctAnswers = {
        'question1': 'b',
        'question2': 'b',
        'question3': 'b',
        'question4': 'a',
        'question5': 'c',
        'question6': 'd',
        'question7': 'a',
        
    };

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        let correctCount = 0;
        let answeredCount = 0;
        const allQuestions = document.querySelectorAll('.question');

        allQuestions.forEach(question => {
            const choices = question.querySelectorAll('input[type="radio"]');
            const answerPanel = question.querySelector('.answer-panel');
            answerPanel.style.display = 'none'; // Reset visibility at the start of each submit action

            let answered = Array.from(choices).some(choice => choice.checked);
            if (answered) answeredCount++;
        });

        if (answeredCount < allQuestions.length) {
            // Use alert to show the message in a popup window
            alert('Proszę odpowiedzieć na wszystkie pytania przed zatwierdzeniem.');
            return; // Stop the function if not all questions have been answered
        } else {
            // If all questions have been answered, evaluate them
            evaluateQuiz(allQuestions, correctAnswers, correctCount);
        }
    });

    function evaluateQuiz(allQuestions, correctAnswers, correctCount) {
        allQuestions.forEach(question => {
            const choices = question.querySelectorAll('input[type="radio"]');
            const answerPanel = question.querySelector('.answer-panel');
            const userAnswer = document.querySelector(`input[name="${question.id}"]:checked`).value;
            const correctAnswer = correctAnswers[question.id];
            
            if (userAnswer === correctAnswer) {
                correctCount++;
                answerPanel.textContent = 'Poprawna odpowiedź!';
                answerPanel.style.backgroundColor = '#d4edda';
            } else {
                answerPanel.innerHTML = 'Niepoprawna odpowiedź, kliknij tutaj, aby zobaczyć poprawną odpowiedź.';
                answerPanel.style.backgroundColor = '#f8d7da';
                answerPanel.style.cursor = 'pointer'; // Ustaw kursor na pointer
                answerPanel.onclick = function() {
                    this.textContent = `Poprawna odpowiedź: ${correctAnswer.toUpperCase()}.`;
                    this.onclick = null; // Remove the click listener after revealing the answer
                };
            }
            answerPanel.style.display = 'block';
        });
        resultContainer.textContent = `Twój wynik: ${correctCount}/${allQuestions.length}`;
        submitButton.style.display = 'none';
        restartButton.style.display = 'block';
    }

    restartButton.addEventListener('click', function(event) {
        event.preventDefault();
        quizForm.reset();
        resetQuiz();
    });

    function resetQuiz() {
        const answerPanels = document.querySelectorAll('.answer-panel');
        answerPanels.forEach(panel => {
            panel.style.display = 'none';
            panel.style.backgroundColor = '';
            panel.textContent = '';
            panel.onclick = null;
        });
        resultContainer.textContent = '';
        restartButton.style.display = 'none';
        submitButton.style.display = 'block';
    }
});
