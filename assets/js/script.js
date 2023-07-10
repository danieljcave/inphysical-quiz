const quizStart = document.querySelector('.quiz-btn')
const quizPopup = document.querySelector('.start-quiz-popup')

quizStart.onclick = () => {
    quizPopup.classList.add('current');
}