function start() {
   document.getElementById("quiz-info").style.display = "none";
   document.getElementById("quiz-form").style.display = "block";
   document.getElementById("timer").style.display = "block";
}

var totalScore;
var correctScore = 0;
var incorrectScore = 0;
var result = [];
var output;


function getRadioValue(radioArray) {
   var i;
   for (i = 0; i < radioArray.length; i++) {
      if (radioArray[i].checked) {
         return radioArray[i].value;
      }
   }
   return "";
}

function displayResults() {
   //Comparing the selected answers with correct ones
   if (getRadioValue(document.quiz.q1) == 4) {
      correctScore += 2;
      result[0] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[0] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q2) == 3) {
      correctScore += 2;
      result[1] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[1] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q3) == 2) {
      correctScore += 2;
      result[2] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[2] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q4) == 1) {
      correctScore += 2;
      result[3] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[3] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q5) == 1) {
      correctScore += 2;
      result[4] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[4] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q6) == 2) {
      correctScore += 2;
      result[5] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[5] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q7) == 3) {
      correctScore += 2;
      result[6] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[6] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q8) == 4) {
      correctScore += 2;
      result[7] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[7] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q9) == 2) {
      correctScore += 2;
      result[8] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[8] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q10) == 3) {
      correctScore += 2;
      result[9] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[9] = "Incorrect";
   }

   //Counting the total score
   totalScore = correctScore - incorrectScore;
   displayScore();
}

function displayScore() {
   output = "You Have Scored = " + totalScore;

   var one = "Question 01 : Your Answer is " + result[0];
   var two = "Question 02 : Your Answer is " + result[1];
   var three = "Question 03 : Your Answer is " + result[2];
   var four = "Question 04 : Your Answer is " + result[3];
   var five = "Question 05 : Your Answer is " + result[4];
   var six = "Question 06 : Your Answer is " + result[5];
   var seven = "Question 07 : Your Answer is " + result[6];
   var eight = "Question 08 : Your Answer is " + result[7];
   var nine = "Question 09 : Your Answer is " + result[8];
   var ten = "Question 10 : Your Answer is " + result[9];

   var y = document.getElementById("results");
   y.style.display = "block";

   var timeCount = "Time Taken: " + timeElapsed + " Seconds ";

   //Displaying the correct/incorrect answers  
   document.getElementById("results").innerHTML = "<span>" + output + "</span><br><span>" + timeCount + "</span><br><br><span>" + one + "</span><br><span>" + two + "</span><br><span>" + three + "</span><br><span>" + four + "</span><br><span>" + five + "</span><br><span>" + six + "</span><br><span>" + seven + "</span><br><span>" + eight + "</span><br><span>" + nine + "</span><br><span>" + ten + "</span><br>";

   //Depending on the correct answers backgrouund color will be changed
   if (totalScore > 15) {
      document.getElementById("background").style.backgroundColor = "#00594f";
   }
   else if (totalScore > 8) {
      document.getElementById("background").style.backgroundColor = "#121f45";
   }
   else if (totalScore > 0) {
      document.getElementById("background").style.backgroundColor = "#fc6200";
   }
   else {
      document.getElementById("background").style.backgroundColor = "#a6051a";
   }
}

var myVar;

function myFunction() {
   myVar = setTimeout(function () { stop(); alert("Time is Up! Click OK to Check Your Score"); displayResults(); }, 60000);
}

//This function will stop the time and display the results
function endQuiz() {
   clearTimeout(myVar);
   displayResults();
}

var timeElapsed = 0;
var myTimer = 0;

//This function will start the timer
function timer() {
   myTimer = setInterval(function () {
      timeElapsed += 1;
      document.getElementById("time").innerText = timeElapsed;
   }, 1000);

}
function stop() {
   clearInterval(myTimer);
}

