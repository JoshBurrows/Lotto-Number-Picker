// Get ball elements for each game
const pwrBalls = document.querySelectorAll(".pwrBall");
const p6Balls = document.querySelectorAll(".p6Ball");
const p3Balls = document.querySelectorAll(".p3Ball");

// Get the button elements for each game
const pwrBallsBtn = document.querySelector("button.getPwrBalls");
const p6BallsBtn = document.querySelector("button.getP6Balls");
const p3BallsBtn = document.querySelector("button.getP3Balls");
const savePwrBallsBtn = document.querySelector("button.savePwrBalls");
const saveP6BallsBtn = document.querySelector("button.saveP6Balls");
const saveP3BallsBtn = document.querySelector("button.saveP3Balls");

// Get elements that i'll appendChild to display "saved numbers"
const myNums = document.querySelector(".myNums");

/* Function that creates random number, takes paramenter for max number, for each games maximun number allowed to be played */
const randomBall = (maxNum) => Math.floor(Math.random() * maxNum) + 1;

/* Empty numbers array ill use for sorting and also removing repeating values, if any occur */
const numbers = [];

// Function that adds random numbers generated to numbers array
function getNums(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    numbers[i] = randomBall(num);
  }
}
// Callback functions to be called on button clicks for games
function getPwrBallsClick() {
  getNums(pwrBalls, 69);
  let displayNumbers = [...new Set(numbers)];
  if (displayNumbers.length !== numbers.length) {
    displayNumbers.splice(displayNumbers.length - 1, 0, randomBall(69));
  }
  displayNumbers.sort((a, b) => a - b);
  displayNumbers.pop();
  displayNumbers.push(randomBall(26));
  for (let i = 0; i < displayNumbers.length; i++) {
    pwrBalls[i].innerHTML = displayNumbers[i];
  }
}

function getP6BallsClick() {
  getNums(p6Balls, 54);
  let displayNumbers = [...new Set(numbers)];
  if (displayNumbers.length !== numbers.length) {
    displayNumbers.splice(displayNumbers.length - 1, 0, randomBall(54));
  }
  displayNumbers.sort((a, b) => a - b);
  for (let i = 0; i < displayNumbers.length; i++) {
    p6Balls[i].innerHTML = displayNumbers[i];
  }
}

function getP3BallsClick() {
  getNums(p3Balls, 9);
  let displayNumbers = [...new Set(numbers)];
  if (displayNumbers.length !== numbers.length) {
    displayNumbers.splice(displayNumbers.length - 1, 0, randomBall(9));
  }
  displayNumbers.sort((a, b) => a - b);
  for (let i = 0; i < displayNumbers.length; i++) {
    p3Balls[i].innerHTML = displayNumbers[i];
  }
}

function savePwrBallsClick() {
  let myNumsDisplay = [];
  for (const ball of pwrBalls) {
    myNumsDisplay.push(ball.innerText);
  }
  let p = document.createElement("p");
  p.innerText = `My Power Ball numbers: ${myNumsDisplay.join(", ")}`;
  myNums.appendChild(p);
  // console.log(myNumsDisplay);
}

function saveP6BallsClick() {
  let myNumsDisplay = [];
  for (const ball of p6Balls) {
    myNumsDisplay.push(ball.innerText);
  }
  let p = document.createElement("p");
  p.innerText = `My pick 6 numbers: ${myNumsDisplay.join(", ")}`;
  myNums.appendChild(p);
  // console.log(myNumsDisplay);
}

function saveP3BallsClick() {
  let myNumsDisplay = [];
  for (const ball of p3Balls) {
    myNumsDisplay.push(ball.innerText);
  }
  let p = document.createElement("p");
  p.innerText = `My pick 3 numbers: ${myNumsDisplay.join(", ")}`;
  myNums.appendChild(p);
  // console.log(myNumsDisplay);
}

// Add event listener and callback functions for each button
pwrBallsBtn.addEventListener("click", getPwrBallsClick);
p6BallsBtn.addEventListener("click", getP6BallsClick);
p3BallsBtn.addEventListener("click", getP3BallsClick);
savePwrBallsBtn.addEventListener("click", savePwrBallsClick);
saveP6BallsBtn.addEventListener("click", saveP6BallsClick);
saveP3BallsBtn.addEventListener("click", saveP3BallsClick);
