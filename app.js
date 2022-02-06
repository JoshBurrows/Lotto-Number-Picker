const balls = document.getElementsByClassName("ball");
const randomBall = (maxNum) => Math.floor(Math.random() * maxNum) + 1;
let numbers = [];
/* Generate 5 random numbers 1-69 inclusive on button click */
const clicked = () => {
  for (let i = 0; i < 5; i++) {
    numbers[i] = randomBall(69);
  }
  /*uses numbers array to create a new array without duplicate numbers if any. */
  let displayNumbers = [...new Set(numbers)];
  if (displayNumbers.length != numbers.length) {
    displayNumbers.splice(0, 0, randomBall(69));
    /* console.log(
       `${displayNumbers[displayNumbers.length - 1]} pushed to newNumbers`
     ); */
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
