var startButton = document.getElementById("start-button");
var questionContainerEl = document.getElementById("questionContainer");
var nextButton = document.getElementById("next-button");
var timerElement = document.querySelector(".timerCount");
var questionEl = document.getElementById('question')
var answerBtnEl = document.getElementsByClassName('answerBtns')
var randomQuestion, currentQuestionIndex
console.log(questionContainerEl);
var timer
var timerCount = 300
var isWin = false

const questions = [
  {
      question: 'Arrays in Javascript can be used to store...?',
      answers:  [
              {text: 'Numbers and Strings', correct: false},
              {text: 'Other Arrays', correct: false},
              {text: 'Booleans', correct: false},
              {text: 'All of the Above', correct: true}
              ]
  }, 
  {
      question: 'Commonly used data types does NOT Include...?',
      answers: [
              {text: 'Strings', correct: false},
              {text: 'Booleans', correct: false},
              {text: 'Numbers', correct: false},
              {text: 'Alerts', correct: true}
      ]
  },
  {
      question: 'The condition in an if / else statement is enclosed within _____',
      answers: [
              {text: 'Quotes', correct: false},
              {text: 'Parentheses', correct: false},
              {text: 'Square Brackets', correct: false},
              {text: 'Curly Brackets', correct: true},
      ]
  }
];

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  nextQuestion()
})

// function reset() {
//   nextButton.classList.add('hide')
//   console.log(answerBtnEl)
//     while (answerBtnEl.firstChild)
//       answerBtnEl.removeChild(answerBtnEl.firstChild)

//   }

function nextQuestion() {
  displayQuestion(randomQuestion[currentQuestionIndex])
}




    function startGame() {
      console.log('Quiz has begun');
      randomQuestion = questions.sort(() => Math.random() - .5)
      currentQuestionIndex = 0
      nextQuestion();
      questionContainerEl.classList.remove('hide');
      startTimer();
      startButton.classList.add('hide')
     // displayQuestion(randomQuestion);
    }
  

    var btn 
    function displayQuestion(question) {
      console.log(question)
      questionEl.textContent = question.question
      btn = document.querySelectorAll('.btn')
      let countAnswer = 0
      Array.from(btn).forEach((btnEL)=>{
        btnEL.textContent = question.answers[countAnswer].text
        console.log(question.answers[countAnswer].correct)
        if (question.answers[countAnswer].correct) {
          btnEL.classList.add('correct')
              }
              btnEL.addEventListener('click', sltAnswer)
        countAnswer++
        console.log(btnEL)
       
      })
      console.log(btn)

      // btn.addEventListener('click', sltAnswer)


        }
      
    

    

function sltAnswer(e) {
  // console.log(e.target)
  let btnCorrectAnswer = document.querySelector('.correct')
  // console.log(btnCorrectAnswer)
  if(btnCorrectAnswer === e.target){
    console.log(currentQuestionIndex)
    console.log(randomQuestion.length)
    if (randomQuestion.length > currentQuestionIndex) {
      nextQuestion()
      // nextButton.classList.remove('hide')
    } else if (currentQuestionIndex >= randomQuestion.length){

    displayScore()
    }
    currentQuestionIndex ++
  }
}

function displayScore() {
    questionContainerEl.innerHTML = ''
    let p = document.createElement('p')
    clearInterval(timer)
    p.textContent = 'Congratulations, your score is' + timerCount
    questionContainerEl.append(p)
}


function setStatClass(element, correct) {
  clearStatClass(element)
    if (correct) {
      element.classList.add('correct') }
      else {
        element.classList.add('incorrect')
      }
    }


    function clearStatClass(element) {
      element.classList.remove('correct')
      element.classList.remove('incorrect')
    }
//function sltAnswer

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
          clearInterval(timer);
          winGame();
        }
      }
      if (timerCount === 0) {
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }



function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        clearInterval(timer);
        winGame();
      }
    }
    if (timerCount === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}