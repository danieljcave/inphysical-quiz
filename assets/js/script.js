const quizStart = document.querySelector('.quiz-btn')
const quizPopup = document.querySelector('.start-quiz-popup')
const quizExit = document.querySelector('.exit-btn')

quizStart.onclick = () => {
    quizPopup.classList.add('current');
}

quizExit.onclick = () => {
    quizPopup.classList.remove('current');
}