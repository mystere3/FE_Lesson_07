var minN = 1;
var maxN = 20;

var answer;

function isNumber(num) {
  if (isNaN(num)) {
    console.log("Input is NaN");
    return false;
  } else {
    return true;
  }
}

function getRandomInt(min, max) {
  var n = Math.floor(Math.random() * (max - min)) + min;
  console.log("random n = " + n);
  return n;
}

function endGame() {
  document.getElementById('info').innerHTML = answer + " is correct!";
  document.getElementById('winMsg').innerHTML = "You win!";
  document.getElementById("playButton").style.visibility = "visible";
  document.getElementById("gameForm").style.visibility = "hidden";
}

function getGuess() {
  // var n = parseInt(prompt("Guess number: "));
  var n = parseInt(document.forms["gameForm"]["userGuess"].value);
  console.log("Guess: " + n);
  return n;
}

function testGuess(guess, answer) {
  if (guess < answer) {
      // console.log(guess + " is less than the answer.");
      document.getElementById("info").innerHTML = guess + " is less than the answer.";
    } else if (guess > answer) {
      // console.log(guess + " is greater than the answer.");
      document.getElementById("info").innerHTML = guess + " is greater than the answer.";
    } else {
      endGame();
    }
}

function startGame() {
    document.getElementById('info').innerHTML = "";
  document.getElementById('winMsg').innerHTML = "";
  document.getElementById("playButton").style.visibility = "hidden";
  document.getElementById("gameForm").style.visibility = "visible";
  answer = getRandomInt(minN, maxN);
  
  
}

$("#gameForm").submit(function(e) {
  e.preventDefault();
  var n = parseInt(document.forms["gameForm"]["userGuess"].value);
  console.log("Guess: " + n);
  if (!isNumber(n)) {
    document.getElementById('info').innerHTML = "That is not a number.";
  } else {
    testGuess(n, answer);
  }
  
})

