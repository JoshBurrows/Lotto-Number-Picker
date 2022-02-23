// omg this all needs refactoring or junked or fixed or something!! This is out of control

// get all the sections and targeted elements
const loginSection = document.querySelector(".user");
loginSection.style.display = "none";
const welcomeSection = document.querySelector("#welcome");
const gameSection = document.querySelector("#gameSection");
gameSection.style.display = "none";
const numbersSection = document.querySelector("#myNumbers");
numbersSection.style.display = "none";
const greeting = document.querySelector("#greeting");
const myNums = document.querySelector(".myNums");
const formSignin = document.querySelector(".form-signin");

// get all the buttons
const loginButton = document.querySelector(".loginBtn");
const navGameBtn = document.querySelector(".navGameBtn");
const navNumsBtn = document.querySelector(".navNumsBtn");
const formSigninBtn = document.querySelector("#formSigninBtn");
const pwrBallsBtn = document.querySelector("button.getPwrBalls");
const p6BallsBtn = document.querySelector("button.getP6Balls");
const p3BallsBtn = document.querySelector("button.getP3Balls");
const savePwrBallsBtn = document.querySelector("button.savePwrBalls");
const saveP6BallsBtn = document.querySelector("button.saveP6Balls");
const saveP3BallsBtn = document.querySelector("button.saveP3Balls");
const pwrBalls = document.querySelectorAll(".pwrBall");
const p6Balls = document.querySelectorAll(".p6Ball");
const p3Balls = document.querySelectorAll(".p3Ball");

// Function for creating random numbers from 0-maxNum
const randomBall = (maxNum) => Math.floor(Math.random() * maxNum) + 1;

/* Empty numbers array ill use for sorting and also removing repeating values, if any occur */
const numbers = [];

// Function that adds random numbers generated to numbers array
function getNums(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    numbers[i] = randomBall(num);
  }
}

// Navbar Buttons....I need to clean this up too. its a mess
navGameBtn.addEventListener("click", function () {
  if (gameSection.style.display === "none") {
    gameSection.style.display = "";
    welcomeSection.style.display = "none";
    numbersSection.style.display = "none";
    loginSection.style.display = "none";
    greeting.innerText = `Hello ${sessionStorage.getItem(
      "username"
    )}, Lets pick your numbers`;
  }
});

navNumsBtn.addEventListener("click", function () {
  if (numbersSection.style.display === "none") {
    numbersSection.style.display = "";
    gameSection.style.display = "none";
    welcomeSection.style.display = "none";
    loginSection.style.display = "none";
  }
});

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (loginSection.style.display === "none") {
    loginSection.style.display = "";
    welcomeSection.style.display = "none";
  } else {
    loginSection.style.display = "none";
  }
});

formSigninBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let username = formSignin.username.value;
  let password = formSignin.password.value;
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("password", password);
  if (loginSection.style.display === "none") {
    loginSection.style.display = "";
  } else {
    loginSection.style.display = "none";
  }
  gameSection.style.display = "";
  greeting.innerText = `Hello ${sessionStorage.getItem(
    "username"
  )}, Lets pick your numbers`;
});

/* Callback functions to be called on button clicks for games
 ***I need to rewrite all this***. */
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
}

function saveP6BallsClick() {
  let myNumsDisplay = [];
  for (const ball of p6Balls) {
    myNumsDisplay.push(ball.innerText);
  }
  let p = document.createElement("p");
  p.innerText = `My pick 6 numbers: ${myNumsDisplay.join(", ")}`;
  myNums.appendChild(p);
}

function saveP3BallsClick() {
  let myNumsDisplay = [];
  for (const ball of p3Balls) {
    myNumsDisplay.push(ball.innerText);
  }
  let p = document.createElement("p");
  p.innerText = `My pick 3 numbers: ${myNumsDisplay.join(", ")}`;
  myNums.appendChild(p);
}

// Add event listener and callback functions for each button
pwrBallsBtn.addEventListener("click", getPwrBallsClick);
p6BallsBtn.addEventListener("click", getP6BallsClick);
p3BallsBtn.addEventListener("click", getP3BallsClick);
savePwrBallsBtn.addEventListener("click", savePwrBallsClick);
saveP6BallsBtn.addEventListener("click", saveP6BallsClick);
saveP3BallsBtn.addEventListener("click", saveP3BallsClick);

// My Numbers Section
const myNumbersBtn = document.querySelector(".myNumbersBtn");
const clearNumbersBtn = document.querySelector(".clearNumbersBtn");
myNumbersBtn.addEventListener("click", function () {
  if (gameSection.style.display === "") {
    gameSection.style.display = "none";
    numbersSection.style.display = "";
  } else {
    gameSection.style.display = "";
  }
});

clearNumbersBtn.addEventListener("click", function () {
  if (myNums.hasChildNodes()) {
    myNums.removeChild(myNums.lastChild);
  } else {
    alert("You havent saved any numbers");
  }
});
