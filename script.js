
// QUIZ APP 

const quizData = [
    {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Markup Level"],
        answer: 0
    },
    {
        question: "CSS is used for?",
        options: ["Styling", "Backend", "Database"],
        answer: 0
    },
    {
        question: "JavaScript is?",
        options: ["Programming Language", "Markup Language", "Styling Sheet"],
        answer: 0
    }
];

let index = 0;
let score = 0;
let selectedOption = null;

// Load question
function loadQuestion() {
    selectedOption = null;

    document.getElementById("question").textContent = quizData[index].question;

    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    quizData[index].options.forEach((opt, i) => {
        let btn = document.createElement("div");
        btn.className = "option";
        btn.textContent = opt;

        btn.onclick = () => {
            selectedOption = i;

            // Highlight selected option
            document.querySelectorAll(".option").forEach(o => o.style.background = "#f0f4ff");
            btn.style.background = "#d1e1ff";
        };

        optionsContainer.appendChild(btn);
    });
}

// When Next button clicked
document.getElementById("next-btn").onclick = () => {
    if (selectedOption === null) {
        alert("Please select an answer!");
        return;
    }

    if (selectedOption === quizData[index].answer) {
        score++;
    }

    index++;

    if (index < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
};

// Show result
function endQuiz() {
    document.getElementById("quiz-box").innerHTML =
        `<h3>Your Score: ${score} / ${quizData.length}</h3>`;
}

// Initialize
loadQuestion();


// --------------------------
// FETCH API - JOKE
// --------------------------

async function getJoke() {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    document.getElementById("joke").textContent = data.setup + " - " + data.punchline;
}
