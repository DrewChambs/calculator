// Number Buttons
const numberBtn = document.querySelectorAll(".numbers");
// Main display
const displayCalculator = document.querySelector(".display");
const equalsBtn = document.querySelector(".equalsBtn");
// Clear
const clearBtn = document.querySelector(".clearBtn");
// Array
const operatorArray = ["+", "÷", "-", "x"];

// Number variables
let firstNum = "";
let secondNum = "";
let operator = "";
let displayNum;
let sum = "";

// Numbers ************
numberBtn.forEach(numbers => {
  numbers.addEventListener("click", e => {
    displayNum = e.target.innerText;
    const symbolInArray = operatorArray.includes(displayNum);
    displayCalculator.innerText += displayNum;

    if (firstNum && symbolInArray) {
      operator = displayNum;
    } else if (!operator) {
      firstNum += displayNum;
      console.log(` The first number is: ${firstNum}`);
    } else if (operator) {
      secondNum += displayNum;
      if (secondNum) {
        operate();
      }
      console.log(`The second number is: ${secondNum}`);
    }
  });
});

// Equals
equalsBtn.addEventListener("click", operator => {
  operate();
  // firstNum = displayCalculator.innerText;
  firstNum = displayCalculator.innerText;
  secondNum = "";
  symbolInArray = "";
});

// Clear display
clearBtn.addEventListener("click", () => {
  displayCalculator.innerText = "";
  // firstNum.innerText = "";
  // secondNum.innerText = "";
  firstNum = "";
  secondNum = "";
});

// Operate Function
const operate = () => {
  switch (operator) {
    case "+":
      add(firstNum, secondNum);
      break;
    case "-":
      subtract(firstNum, secondNum);
      break;
    case "x":
      multiply(firstNum, secondNum);
      break;
    case "÷":
      divide(firstNum, secondNum);
      break;
    default:
      console.log("Nothing to calculate!");
  }
  firstNum = sum;
  secondNum = "";
  symbolInArray = "";
};

// Calculation Functions
const add = (firstNum, secondNum) => {
  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);
  sum = firstNum + secondNum;
  console.log(sum);
  firstNum = "";
  secondNum = "";
  console.log(`The first num is now: ${sum}`);
  return (displayCalculator.innerText = sum);
};
const subtract = (firstNum, secondNum) => {
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  sum = firstNum - secondNum;
  console.log(sum);
  return (displayCalculator.innerText = sum);
};
const multiply = (firstNum, secondNum) => {
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  sum = firstNum * secondNum;
  console.log(sum);
  return (displayCalculator.innerText = sum);
};
const divide = (firstNum, secondNum) => {
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  sum = firstNum / secondNum;
  console.log(sum);
  return (displayCalculator.innerText = sum);
};

// Display Function
const displayResult = () => {};
