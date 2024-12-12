const sportsQuiz = [
    {
      question: "Which country is home to the sport of cricket?",
      a:"India", 
      b:"Australia", 
      c:"England", 
      d:"All of the above",
      correct: 3 // Index of the correct answer ("All of the above")
    },
    {
      question: "What is the name of the trophy awarded to the winner of the FIFA World Cup?",
      a: "Jules Rimet Trophy", b:"FIFA Ballon d'Or", c:"Champions League Trophy", d:"Vince Lombardi Trophy",
      correct: 0 // Index of the correct answer ("Jules Rimet Trophy")
    },
    {
      question: "In basketball, how many points is a three-point shot worth?",
      a: "1 point", b:"2 points", c:"3 points", d:"4 points",
      correct: 2 // Index of the correct answer ("3 points")
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
  