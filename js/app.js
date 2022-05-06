// Variables to hold user numbers
let firstNum;
let secondNum;
// Operator variable
let addOperator = "add";
let subtractOperator = "subtract";
let multiplyOperator = "mutiply";
let divideOperator = "divide";
let operator = "divide";
let periodDisplay = ".";

// Select Operator buttons
const operatorBtn = document.querySelectorAll(".operators");
// Select Display
const displayResult = document.querySelector(".display");
// Select clear button
const clearBtn = document.querySelector(".clearBtn");
// Select period
const periodBtn = document.querySelector(".periodBtn");
// Select numbers
const numberBtn = document.querySelectorAll(".numberBtn");

periodBtn.addEventListener("click", () => {
  displayResult.textContent = `${periodDisplay}`;
});
// Clear display
clearBtn.addEventListener("click", () => {
  displayResult.textContent = ``;
});
// /////////////
numberBtn.forEach(numbers => {
  numbers.addEventListener("click", e => {
    num1 = e.target.dataset.id;
    displayResult.textContent = `${num1}`;
  });
});

/////////  MAIN OPERATOR FUNCTION   /////////////
operatorBtn.forEach(btnOp => {
  btnOp.addEventListener("click", e => {
    console.log(e.target.dataset.id);
  });
});
// Operate function calls related function to
// perform calculations and display results
// Calls the approprite operator function
function operate(operator, firstNum, secondNum) {
  switch (operator) {
    case "add":
      add(firstNum, secondNum);
      break;
    case "subtract":
      subtract(firstNum, secondNum);
      break;
    case "multiply":
      multiply(firstNum, secondNum);
      break;
    case "divide":
      divide(firstNum, secondNum);
      break;
    default:
      console.log("Got nothing!");
  }
}

///////// CALCULATOR FUNCTIONS //////////////////

// add function
function add(num1, num2) {
  sum = num1 + num2;
  console.log(`Result is: ${sum}`);
}
// subtract function
function subtract(num1, num2) {
  sum = num1 - num2;
  console.log(`Result is: ${sum}`);
}
// multiply function
function multiply(num1, num2) {
  sum = num1 * num2;
  console.log(`Result is: ${sum}`);
}
// divide function
function divide(num1, num2) {
  sum = num1 / num2;
  console.log(`Result is: ${sum}`);
}

// Display Function to show results
function displayCalculation() {}

operate(divideOperator, 5, 2);
