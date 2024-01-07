/*jshint esversion: 6 */
const quizStart = document.querySelector('.quiz-btn');
const quizPopup = document.querySelector('.start-quiz-popup');
const quizMain = document.querySelector('.main');
const quizExit = document.querySelector('.exit-btn');

// Add current tag for onclick targetting
quizStart.onclick = () => {
    quizPopup.classList.add('current');
    quizMain.classList.add('current');
};

// Remove current tag for onclick targetting
quizExit.onclick = () => {
    quizPopup.classList.remove('current');
    quizMain.classList.remove('current');
};