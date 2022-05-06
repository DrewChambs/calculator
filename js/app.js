console.log("Test is it working!");

// Variables to hold user numbers
let firstNum;
let secondNum;
// Operator variable
let addOperator = "add";
let subtractOperator = "subtract";
let multiplyOperator = "mutiply";
let divideOperator = "divide";
let operator = "divide";

/////////  MAIN OPERATOR FUNCTION   /////////////

// Operate function calls related function to
// perform calculations and display results
// Calls the approprite operator function
function operate(operator, firstNum, secondNum) {
  console.log("operator");
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
      console.log("in the switch");
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
