import { questions } from './data.js'

const progressvalueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

function renderQuestion(){
   const question = questions[currentNumber]
   numberEl.innerHTML = question.number
   questionEl.innerHTML = question.question
   choice1El.innerHTML = question.choices[0].text
   choice2El.innerHTML = question.choices[1].text
   progressvalueEl.style.width=  (currentNumber + 1) * 10 + '%'
}
function nextQuestion(choiceNumber) {
    if (currentNumber === questions.length - 1) {
        showResultpage()
        return
    }
    const question = questions[currentNumber]
    mbti = mbti + question.choices[choiceNumber].value
    console.log(mbti)
    currentNumber = currentNumber + 1
   // currentNumber += 1
   renderQuestion()
}
   function showResultpage() {
    location.href = '/results.html?mbti'+ '=' + mbti
   }


choice1El.addEventListener('click', function () {
    nextQuestion(0)
})
choice2El.addEventListener('click', function () {
    nextQuestion(1)
})

renderQuestion()