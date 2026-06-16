const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Madrid", "Paris", "London", "Rome"],
        answer: "Paris",
    },
    {
        question: "Which language runs in the browser?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript",
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Color Style Sheets",
        ],
        answer: "Cascading Style Sheets",
    },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.querySelector("#question");
const optionEls = [
    document.querySelector("#option1"),
    document.querySelector("#option2"),
    document.querySelector("#option3"),
    document.querySelector("#option4"),
];
const radioEls = [
    document.querySelector("#radio1"),
    document.querySelector("#radio2"),
    document.querySelector("#radio3"),
    document.querySelector("#radio4"),
];
const nextButton = document.querySelector("#next-btn");

function renderQuestions() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach((opt, i) => {
        optionEls[i].textContent = opt;
        radioEls[i].value = opt;
        radioEls[i].checked = false;
    });
}

function checkAnswer() {
    let selected = null;
    for (const radio of radioEls) {
        if (radio.checked) {
            selected = radio.value;
            break;
        }
    }
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
}

nextButton.addEventListener("click", () => {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        renderQuestions();
    } else {
        document.querySelector(".quiz-wrapper").innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>You scored ${score} out of ${quizData.length}</p>
        `;
    }
});

renderQuestions();
