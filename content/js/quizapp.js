/* Code for quiz app */

// Creating JSON data set of questions
const questions = [
    {
        "question": "Which of the following is the markup language?",
        "a": "HTML",
        "b": "CSS",
        "c": "Javascript",
        "d": "PHP",
        "correct": "a"
    },
    {
        "question": "Which year did Javascript Launched?",
        "a": "1996",
        "b": "1995",
        "c": "1997",
        "d": "None of the above",
        "correct": "b"
    },
    {
        "question": "What does CSS stands for?",
        "a": "Casacading Style Sheet",
        "b": "Casacading Script Sheet",
        "c": "Corresponding Style Sheet",
        "d": "Character Styling Sheet",
        "correct": "a"
    }
];

let index = 0;
let total = questions.length;
let correct = 0, incorrect = 0;

const displayQuest = document.getElementById('quest');
const optionInputs = document.querySelectorAll('.option');

// Function to display and load question and options
const loadQuestions = () => {
    if (index !== total) {
        reset();
        let data = questions[index];
        displayQuest.innerText = data.question;
        optionInputs[0].nextElementSibling.innerText = data.a;
        optionInputs[1].nextElementSibling.innerText = data.b;
        optionInputs[2].nextElementSibling.innerText = data.c;
        optionInputs[3].nextElementSibling.innerText = data.d;
    } else {
        let quizContainer = document.querySelector('.quiz-container');
        quizContainer.innerHTML = `<h3 class="text-center">
        Thank you for playing! </h3>
        <h4 class="text-center">${correct}/${total} are correct.</h4>
        `
    }
};

// Function to submit the quiz
const submitQuiz = () => {
    let data = questions[index];
    let ans = getAnswer();
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestions();
    return;
};

// Function to get the answer
const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

// Function to reset the form
const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    })
}

// Intial Call
loadQuestions();