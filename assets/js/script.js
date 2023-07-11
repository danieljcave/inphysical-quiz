const quizStart = document.querySelector('.quiz-btn');
const quizPopup = document.querySelector('.start-quiz-popup');
const quizExit = document.querySelector('.exit-btn');
const quizMain = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.try-again-btn');
const homeBtn = document.querySelector('.home-button');

quizStart.onclick = () => {
    quizPopup.classList.add('current');
    quizMain.classList.add('current');
};

quizExit.onclick = () => {
    quizPopup.classList.remove('current');
    quizMain.classList.remove('current');
};

continueBtn.onclick = () => {
    quizSection.classList.add('current');
    quizPopup.classList.remove('current');
    quizMain.classList.remove('current');
    quizBox.classList.add('current');
    showQuestions(0);
    quizCounter(1);
    headerScore(0);
};

tryAgainBtn.onclick = () => {
    quizBox.classList.add('current');
    nextBtn.classList.remove('current');
    resultBox.classList.remove('current');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    quizCounter(questionNumb);
    headerScore();
};

homeBtn.onclick = () => {
    quizSection.classList.remove('current');
    nextBtn.classList.remove('current');
    resultBox.classList.remove('current');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    quizCounter(questionNumb);
};

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1){
    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    quizCounter(questionNumb);
    nextBtn.classList.remove('current'); 
}
    else{
        showResultBox();
    }
};

const quizQuestions = document.querySelector('.quiz-questions');

function showQuestions(i){
    const questionText = document.querySelector('.question-title');
    questionText.textContent = `${questions[i].numb}. ${questions[i].question}`;

    let quizTag = `<div class="question"><span>${questions[i].options[0]}</span></div>
    <div class="question"><span>${questions[i].options[1]}</span></div>
    <div class="question"><span>${questions[i].options[2]}</span></div>
    <div class="question"><span>${questions[i].options[3]}</span></div>`;

    quizQuestions.innerHTML = quizTag;

    const question = document.querySelectorAll('.question');
    for (let i = 0; i < question.length; i++){
        question[i].setAttribute('onclick', 'questionSelected(this)');
    }
}

function questionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allQuestions = quizQuestions.children.length;
    
    if (userAnswer === correctAnswer){
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    } else {

        answer.classList.add('incorrect');
        for (let i = 0; i< allQuestions; i++){
            if (quizQuestions.children[i].textContent == correctAnswer){
                quizQuestions.children[i].setAttribute('class', 'question correct');
            }
        }
    }

    for (let i = 0; i<allQuestions; i++){
        quizQuestions.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('current'); 
}

function quizCounter(i){
    const quizTotal = document.querySelector('.quiz-total');
    quizTotal.textContent = `${i} of ${questions.length} Questions`;
}

function headerScore(){
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score ${userScore} / ${questions.length}`;
}

function showResultBox() {
    quizBox.classList.remove('current');
    resultBox.classList.add('current');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `You Scored ${userScore} Out Of ${questions.length}`;
}