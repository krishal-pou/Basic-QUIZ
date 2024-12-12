const quizData = [
    {
        question: "In a basketball game, if a player commits five fouls, what is the consequence?",
        a: "The player is ejected from the game",
b: "The player is awarded a free throw",
c: "The team loses a point",
d: "The player receives a warning",
        correct: "a",
    },
    {
        question: "What does the acronym NFL stand for?",
        a: "National Football League",
        b: "National Fitness League",
        c: "National Fencing League",
        d: "National Fishing League",
        correct: "a",
    },
    {
        question: "In soccer, how many players are allowed on the field for each team during a match??",
        a: "9",
        b: "11",
        c: "7",
        d: "10",
        correct: "a",
    },
    {
    question: "Which of the following is not a Grand Slam tennis tournament??",
        a: "Wimbledon",
        b: "French Open",
        c: "Davis Cup",
       d: "Australian Open",
        
        correct: "c"
      },
    
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}



function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

// function getAnswer(){
//     const ans=getSelected()

// }
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           
           `

       }
    }
})