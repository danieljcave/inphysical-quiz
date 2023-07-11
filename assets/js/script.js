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
    showQuestions(0);
    quizCounter(1);
}

let questionCount = 0;
let questionNumb = 1;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1){
    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    quizCounter(questionNumb);
}
    else{
        console.log('Question Complete')
    }
}

const quizQuestions = document.querySelector('.quiz-questions')

function showQuestions(i){
    const questionText = document.querySelector('.question-title');
    questionText.textContent = `${questions[i].numb}. ${questions[i].question}`

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
        answer.classList.add('correct')
    } else {
        answer.classList.add('incorrect')
    }

    for (let i = 0; i<allQuestions; i++){
        quizQuestions.children[i].classList.add('disabled');
    }
}

function quizCounter(i){
    const quizTotal = document.querySelector('.quiz-total')
    quizTotal.textContent = `${i} of ${questions.length} Questions`
}