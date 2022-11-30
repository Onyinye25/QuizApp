(function() {
    const myQuestions = [
      {
        question: "For Christ demonstrated his love towards us in this; while were yet sinners Christ died for us.",
        answers: {
          a: "II Thess 4:16",
          b: "Matt 5:44",
          c: "Romans 5:8"
         },
        correctAnswer: "c" 
      
      },
      {
        question: " Surely, I am with you till the very end of the -------.",
        answers: {
          a: "way",
          b: "age",
          c: "hardship"
        },
        correctAnswer: "b"
      },
      {
        question: "A heart at peace gives ------ to the body but ----- rots the bones.",
        answers: {
          a: "life, envy",
          b: "kindness, grieve",
          c: "sorrow, love",
         
        },
        correctAnswer: "a"
      },
      {
        question: "There is no fear in love, but ------ love drives out fear.",
        answers: {
          a: "strong",
          b: "hopeful",
          c: "perfect",
         
        },
        correctAnswer: "c"
      },
       {
        question: "Man doesn't live by bread alone but every word that comes out of the mouth of the Lord.",
        answers: {
          a: "Deutronomy 8:3",
          b: "Numbers 23:9",
          c: "Luke 1:1",
         
        },
        correctAnswer: "a"
      },
       {
        question: "Abram believed God and it was counted unto him as --------.",
        answers: {
          a: "faith",
          b: "righteousness.",
          c: "sorrow",
         
        },
        correctAnswer: "b"
      },
       {
        question: "Blessed are those who mourn, for they shall be?",
        answers: {
          a: "blessed",
          b: "filled.",
          c: "comforted",
         
        },
        correctAnswer: "c"
      },
       {
        question: "Seek the Lord while He may be found: call on him while he is near.",
        answers: {
          a: "Jeremiah 43:17",
          b: "Isaiah 55:6",
          c: "Matt 25:4",
         
        },
        correctAnswer: "b"
      },
       {
        question: "You shall eat in plenty and be --------",
        answers: {
          a: "forgiven",
          b: "satisfied",
          c: "believed",
         
        },
        correctAnswer: "b"
      },
       {
        question: "And we overcame him by the blood of the lamb and the words of our ------",
        answers: {
          a: "testiomony",
          b: "praise.",
          c: "faith",
         
        },
        correctAnswer: "a"
      },
    ];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
  