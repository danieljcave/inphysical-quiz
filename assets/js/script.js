const quizStart = document.querySelector('.quiz-btn')
const quizPopup = document.querySelector('.start-quiz-popup')
const quizExit = document.querySelector('.exit-btn')
const quizMain = document.querySelector('.main')
const continueBtn = document.querySelector('.continue-btn')
const quizSection = document.querySelector('.quiz-section')
const quizBox = document.querySelector('.quiz-box')

quizStart.onclick = () => {
    quizPopup.classList.add('current');
    quizMain.classList.add('current');
}

quizExit.onclick = () => {
    quizPopup.classList.remove('current');
    quizMain.classList.remove('current');
}

continueBtn.onclick = () => {
    quizSection.classList.add('current');
    quizPopup.classList.remove('current');
    quizMain.classList.remove('current');
    quizBox.classList.add('current');
}