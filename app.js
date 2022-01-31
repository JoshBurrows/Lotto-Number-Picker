// generate 5 random numbers 1 - 69 inclusive
// generate 1 random number 1 - 26 inclusive
// place random numbers in order from smallest to largest
// store random numbers in variable
// use random numbers 1 - 69 on balls 1 - 5
// use random numbers 1 - 26 on pball
const balls = document.getElementsByClassName("ball");
const randomBall = (maxNum) => Math.floor(Math.random() * maxNum) + 1;
let numbers = [];
const clicked = () => {
  for (let i = 0; i < 5; i++) {
    numbers[i] = randomBall(69);
  }
  let displayNumbers = [...new Set(numbers)];
  if (displayNumbers.length != numbers.length) {
    displayNumbers.push(randomBall(69));
    // console.log(
    //   `${displayNumbers[displayNumbers.length - 1]} pushed to newNumbers`
    // );
  }

  displayNumbers.sort((a, b) => a - b);
  displayNumbers.push(randomBall(26));
  for (let i = 0; i < balls.length; i++) {
    balls[i].innerHTML = displayNumbers[i];
  }
  // console.log("clicked");
  // console.log(numbers);
  // console.log(displayNumbers);
};
