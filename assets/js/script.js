const quizStart = document.querySelector('.quiz-btn')
const quizPopup = document.querySelector('.start-quiz-popup')
const quizExit = document.querySelector('.exit-btn')
const quizMain = document.querySelector('.main')

quizStart.onclick = () => {
    quizPopup.classList.add('current');
    quizMain.classList.add('current');
}

quizExit.onclick = () => {
    quizPopup.classList.remove('current');
    quizMain.classList.remove('current');
}