document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    let totalQuestions = document.querySelectorAll('.question').length;

    document.querySelectorAll('.answer').forEach(answer => {
        answer.addEventListener('click', () => {
            const questionDiv = answer.closest('.question');
            if (!questionDiv.classList.contains('answered')) {
                questionDiv.classList.add('answered');

                // Remove a classe correta/incorrecta de todas as respostas na mesma questão
                questionDiv.querySelectorAll('.answer').forEach(a => {
                    a.classList.remove('correct', 'incorrect');
                });

                // Marca a resposta clicada
                if (answer.getAttribute('data-correct') === 'true') {
                    answer.classList.add('correct');
                    score++;
                } else {
                    answer.classList.add('incorrect');
                }

                // Verifica se todas as questões foram respondidas
                if (document.querySelectorAll('.question.answered').length === totalQuestions) {
                    showResult(score, totalQuestions);
                }
            }
        });
    });

    function showResult(score, totalQuestions) {
        const quizDiv = document.getElementById('quiz');
        const resultDiv = document.getElementById('result');
        const scoreText = document.getElementById('score');

        quizDiv.style.display = 'none';
        resultDiv.style.display = 'block';

        scoreText.textContent = `Você acertou ${score} de ${totalQuestions} perguntas. ${score >= (totalQuestions / 2) ? 'Parabéns, você ganhou!' : 'Você não ganhou desta vez. Tente novamente!'}`;
    }
});

