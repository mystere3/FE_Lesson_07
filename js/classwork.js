function isBigNumber(num) {
  if (num > 1000) {
    console.log("That's a spicy meatball!");
    return true;
  } else {
    console.log("Not so spicy that meatball.");
    return false;
  }
}

function isMoreCars(nCars, nTrucks) {
  if (nCars > nTrucks) {
    console.log("Mo cars.");
    return true;
  } else if (nCars < nTrucks) {
    console.log("Mo trucks.");
    return false;
  } else {
    console.log("Same same.");
    return false;
  }
}

x = 10;

while (x > 0) {
  console.log(x);
  x--;
}
console.log("Blast off!");

for (var i = 10; i > 0; i--) {
  console.log("For: " + i);
}
console.log("For: Blast Off!");

for (var i = 0; i <= 20; i++) {
  if (i === 0) {
    console.log(i + " is neither even nor odd.");
  } else if (i % 2 === 0) {
    console.log(i + " is even.");
  } else {
    console.log(i + " is odd.");
  }
}

for (var i = 0; i <= 10; i++) {
  console.log(i + " * 9 = " + (i * 9));
}

for (var i = 0; i <= 10; i++) {
  for (var j = 0; j <= 10; j++) {
    var result = i * j;
    console.log(i + " * " + j + " = " + result);
  }
}

function assignGrade(nGrade) {
  switch (true) {
    case (nGrade >= 90): return "A";
    case (nGrade >= 80): return "B";
    case (nGrade >= 70): return "C";
    case (nGrade >= 60): return "D";
    default: return "F";
  }
}

for (var i = 60; i <= 100; i++) {
  console.log("A Grade of " + i + " is a " + assignGrade(i));
}

function getRandomInt(min, max) {

  var n = Math.floor(Math.random() * (max - min)) + min;
  console.log("random n = " + n);
  return n;
}

function getGuess() {
  var n = prompt("Guess number: ");
  console.log("Guess: " + n);
  return n;
}

function testGuess(guess, answer) {
  if (guess < answer) {
      console.log(guess + " is less than the answer.");
    } else if (guess > answer) {
      console.log(guess + " is greater than the answer.");
    }
}

function guessingGame() {
  var guess;
  var answer = getRandomInt(0, 10);
  
  while (guess !== answer) {

    guess = getGuess();
    testGuess();
    
  } 
  console.log(answer + " was correct!");
}












