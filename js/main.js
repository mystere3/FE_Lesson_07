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
  document.getElementById("playButton").style.visibility = "hidden";
  document.getElementById("gameForm").style.visibility = "visible";
  // document.getElementById("directions").innerHTML = "Guess a number 1 - 10.";
  answer = getRandomInt(0, 10);
  
  // while (guess !== answer) {

  //   guess = getGuess();
  //   testGuess(guess,answer);
    
    
  // } 
  // console.log(guess + " is right!");
  // document.getElementById("playButton").style.visibility = "visible";
  // document.getElementById("info").innerHTML = "";
  // // document.getElementById("directions").innerHTML = "";
  // document.getElementById("guessForm").style.visibility = "hidden";
}

$("#gameForm").submit(function(e) {
  e.preventDefault();
  var n = parseInt(document.forms["gameForm"]["userGuess"].value);
  console.log("Guess: " + n);
  testGuess(n, answer);
})

