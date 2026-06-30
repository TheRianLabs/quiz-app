const questions = [
    {
        question: "Which keyword declares a variable that cannot be reassigned?",
        options: ["let", "const", "var", "new"],
        answer: "const"
    },
    {
        question: "Which operator checks both value and data type?",
        options: ["==", "=", "===", "!="],
        answer: "==="
    },
    {
        question: "Which method adds an element to the end of an array?",
        options: ["pop()", "push()", "shift()", "slice()"],
        answer: "push()"
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["push()", "shift()", "pop()", "splice()"],
        answer: "pop()"
    },
    {
        question: "What does console.log() do?",
        options: [
        "Displays a popup",
        "Prints output to the browser console",
        "Creates a variable",
        "Refreshes the page"
        ],
        answer: "Prints output to the browser console"
    },
    {
        question: "What is the result of typeof []?",
        options: ["array", "object", "list", "undefined"],
        answer: "object"
    },
    {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do...while", "forEach"],
        answer: "do...while"
    },
    {
        question: "Which value is considered falsy in JavaScript?",
        options: ["[]", "{}", "0", "'hello'"],
        answer: "0"
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.convert()",
        "JSON.object()"
        ],
        answer: "JSON.parse()"
    },
    {
        question: "What will 2 + '2' return?",
        options: ["4", "22", "NaN", "undefined"],
        answer: "22"
    }
];


let currentQuestion = 0;
let score = 0;


const titleElement = document.querySelector(".js-title");
const optionElement = document.querySelector(".js-options");
const resultElement = document.querySelector(".js-show-result");
const nextButton = document.querySelector(".js-next-button");
const previousButton = document.querySelector(".js-previous-button");
const restartButton = document.querySelector('.js-restart-button');
const scoreBoard = document.querySelector(".js-score");

displayQuestion();
scoreTracker();

function displayQuestion() {

    const question = questions[currentQuestion];

    titleElement.innerHTML =
        `Question ${currentQuestion + 1} of ${questions.length}: ${question.question}`;

    resultElement.innerHTML = '';
    resultElement.classList.remove("correct-color", "wrong-color");

    optionElement.innerHTML = '';

    question.options.forEach(option => {

        optionElement.innerHTML += `
        <li class="option-style">
            <button class="js-btn-option btn-option">
                ${option}
            </button>
        </li>`;
    });

    nextButton.disabled = true;

    if (currentQuestion === 0) {
        previousButton.disabled = true;
    } else {
        previousButton.disabled = false;
    }

addButtonEvents();
}


function addButtonEvents() {
    const buttons = document.querySelectorAll(".js-btn-option");
    const correctAnswer = questions[currentQuestion].answer;

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            if (button.innerText.trim() === correctAnswer) {

                score++;
                scoreTracker();

                resultElement.innerHTML = "Correct!";
                resultElement.classList.remove("wrong-color");
                resultElement.classList.add("correct-color");

            } else {

                resultElement.innerHTML = "Wrong!";
                resultElement.classList.remove("correct-color");
                resultElement.classList.add("wrong-color");

            }

            buttons.forEach(btn => {

                btn.disabled = true;

                if (btn.innerText.trim() === correctAnswer) {
                btn.classList.add("correct-answer");
                }

                if (btn === button && btn.innerText.trim() !== correctAnswer) {
                btn.classList.add("wrong-answer");
                }

            });

            nextButton.disabled = false;
        });
    });
}


nextButton.addEventListener('click', () => {
    
    if (currentQuestion < questions.length - 1) {
        
        currentQuestion++;
        displayQuestion();
        
    } else {
        
        titleElement.innerHTML = '🎉 Quiz Finished!';
        optionElement.innerHTML = '';

        resultElement.classList.remove("correct-color", "wrong-color");

        resultElement.innerHTML = `
            <h2>Final Score: ${score}/${questions.length}</h2>
            <p>Thanks for playing!</p>`;

        nextButton.disabled = true;
        previousButton.disabled = true;

        restartButton.style.display = 'block';
    }
    
});

previousButton.addEventListener('click', () => {

    if (currentQuestion > 0) {
        
        currentQuestion--;
        displayQuestion();
        
    }
});

restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;

    displayQuestion();
    scoreTracker();

    restartButton.style.display = 'none';

    nextButton.disabled = true;
});


function scoreTracker() {
    scoreBoard.innerHTML = `Score: ${score}/${questions.length}`;
}