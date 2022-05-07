// Variables to hold user numbers
let firstNum;
let secondNum;
// Operator variable
let addOperator = "add";
let subtractOperator = "subtract";
let multiplyOperator = "multiply";
let divideOperator = "divide";
let operator = "divide";
let periodDisplay = ".";

// Select Operator buttons
const operatorBtn = document.querySelectorAll(".operators");
// Select Display
const displayResult = document.querySelector(".display");
// Select clear button
const clearBtn = document.querySelector(".clearBtn");
// Select numbers
const numberBtn = document.querySelectorAll(".numberBtn");

// Clear display
clearBtn.addEventListener("click", () => {
  displayResult.textContent = ``;
});

// Main display /////////
numberBtn.forEach(numbers => {
  numbers.addEventListener("click", e => {
    let equals = false;
    num1 = e.target.dataset.id;
    displayResult.textContent += `${num1}`;
  });
});

/////////  MAIN OPERATOR FUNCTION   /////////////
operatorBtn.forEach(btnOp => {
  btnOp.addEventListener("click", e => {
    let operator = e.target.dataset.id;
    console.log(operator);

    // switch(operator) {
    //  case "add":

    // }
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

// Operator functions
const add = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`Add result is: ${sum}`);
  return sum;
};
const subtract = (num1, num2) => {
  let sum = num1 - num2;
  console.log(`Subtract result is: ${sum}`);
  return sum;
};
const multiply = (num1, num2) => {
  let sum = num1 * num2;
  console.log(`Multply result is: ${sum}`);
  return sum;
};
const divide = (num1, num2) => {
  let sum = num1 / num2;
  console.log(`Divide result is: ${sum}`);
  return sum;
};
// multiply function
// function multiply(num1, num2) {
//   sum = num1 * num2;
//   console.log(`Result is: ${sum}`);
// }
// divide function
// function divide(num1, num2) {
//   sum = num1 / num2;
//   console.log(`Result is: ${sum}`);
// }

// Display Function to show results
function displayCalculation() {}

operate(divideOperator, 5, 2);
operate(addOperator, 5, 2);
operate(subtractOperator, 5, 2);
operate(multiplyOperator, 5, 2);
