/*jshint esversion: 6 */
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.try-again-btn');

// Try again onclick current tag target and reset counters for user to try quiz again
tryAgainBtn.onclick = () => {
    quizBox.classList.remove('current');
    nextBtn.classList.remove('current');
    resultBox.classList.remove('current');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    quizCounter(questionNumb);
    headerScore();
};

// Display Question counter as 0
let questionCount = 0;
// Display Number of Questions Beggining with 1
let questionNumb = 1;
// Display user score as begginer 0
let userScore = 0;

const quizQuestions = document.querySelector('.quiz-questions');

// Function to show each question and targets array in questions.js
function showQuestions(i) {
    const questionText = document.querySelector('.question-title');
    questionText.textContent = `${questions[i].numb}. ${questions[i].question}`;

    let quizTag = `<div class="question"><span>${questions[i].options[0]}</span></div>
    <div class="question"><span>${questions[i].options[1]}</span></div>
    <div class="question"><span>${questions[i].options[2]}</span></div>
    <div class="question"><span>${questions[i].options[3]}</span></div>`;

    quizQuestions.innerHTML = quizTag;

    const question = document.querySelectorAll('.question');
    for (let i = 0; i < question.length; i++) {
        question[i].setAttribute('onclick', 'questionSelected(this)');
    }
}

// Function to display correct or incorrect answer selected
function questionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allQuestions = quizQuestions.children.length;

    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    } else {

        answer.classList.add('incorrect');
        for (let i = 0; i < allQuestions; i++) {
            if (quizQuestions.children[i].textContent == correctAnswer) {
                quizQuestions.children[i].setAttribute('class', 'question correct');
            }
        }
    }
    // Add disable tag for question childeren
    for (let i = 0; i < allQuestions; i++) {
        quizQuestions.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('current');
}

const nextBtn = document.querySelector('.next-btn');

// Next question button shows next question, once reaches end displays results message
nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        quizCounter(questionNumb);
        nextBtn.classList.remove('current');
    } else {
        showResultBox();
    }
};

// Function to count quiz question
function quizCounter(i) {
    const quizTotal = document.querySelector('.quiz-total');
    quizTotal.textContent = `${i} of ${questions.length} Questions`;
}

// Function to display user score in header
function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score ${userScore} / ${questions.length}`;
}

// Function to display user score in results
function showResultBox() {
    quizBox.classList.add('current');
    resultBox.classList.add('current');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `You Scored ${userScore} Out Of ${questions.length}`;
}

// Questions array
let questions = [{
    numb: 1,
    question: 'When squatting which muscle is not used?',
    answer: 'D. Biceps',
    options: [
        'A. Glutes',
        'B. Quads',
        'C. Hamstrings',
        'D. Biceps',
    ]
},
{
    numb: 2,
    question: 'Which exercise targets the lats when working out?',
    answer: 'D. Cable Pull Down',
    options: [
        'A. Hyperextensions',
        'B. Overhead Press',
        'C. Box Squats',
        'D. Cable Pull Down',
    ]
},
{
    numb: 3,
    question: 'If you run 5KM run in 26:05, what is you 1km pace speed?',
    answer: 'A. 5 Minutes 13 Seconds',
    options: [
        'A. 5 Minutes 13 Seconds',
        'B. 5 minutes 45 seconds',
        'C. 4 minutes 50 seconds',
        'D. 5 minutes 22 seconds',

    ]
},
{
    numb: 4,
    question: 'What muscle is most targeted when doing an overhead press movement?',
    answer: 'D. Shoulders',
    options: [
        'A. Biceps',
        'B. Chest',
        'C. Back',
        'D. Shoulders',

    ]
},
{
    numb: 5,
    question: 'In fitness, what does AMRAP stand for?',
    answer: 'C. As Many Reps As Possible',
    options: [
        'A. All My Rest and Prep',
        'B. Any Means Rest and Recovery',
        'C. As Many Reps As Possible',
        'D. As Many Rounds and Pushes',

    ]
},
];

showQuestions(0);