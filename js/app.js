const numberBtn = document.querySelectorAll(".numbers");
const clearBtn = document.querySelector(".clearBtn");
const operatorBtn = document.querySelectorAll(".operator");
const equalsBtn = document.querySelector(".equalsBtn");
const decimalBtn = document.querySelector(".decimalBtn");
const deleteBtn = document.querySelector(".deleteBtn");

// Number capture/display
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");

let previousNum = "";
let currentNum = "";
let operator = "";
let result = "";
let num = "";

// Numbers
numberBtn.forEach(button => {
  button.addEventListener("click", e => {
    currentNum = e.target.innerText;
    if (currentNum === "." && currentOperand.innerText.includes(".")) return;
    currentOperand.innerText += currentNum;
  });
});

// Operators
operatorBtn.forEach(item => {
  item.addEventListener("click", e => {
    if (currentNum != "" && previousNum != "") {
      operate();
    }
    if (currentNum === "") return;
    operator = item.innerText;
    previousOperand.innerText = currentOperand.innerText;
    previousNum = currentNum;
    currentOperand.innerText = "";
  });
});

// Equals
equalsBtn.addEventListener("click", () => {
  operate();
});

// Calculations
const operate = () => {
  currentNum = parseFloat(currentOperand.innerText);
  previousNum = parseFloat(previousOperand.innerText);
  if (isNaN(previousNum) || isNaN(currentNum)) return;
  switch (operator) {
    case "+":
      displayResults(add(previousNum, currentNum));
      break;
    case "x":
      displayResults(multiply(previousNum, currentNum));
      break;
    case "-":
      displayResults(subtract(previousNum, currentNum));
      break;
    case "÷":
      displayResults(divide(previousNum, currentNum));
      break;
    default:
      return;
  }
  operator = undefined;
  previousNum = result;
  previousOperand.innerText = "";
};

// Display
const displayResults = result => {
  return (currentOperand.innerText = result);
};
previousOperand.innerText = "";

// Operator functions
const add = (previousNum, currentNum) => {
  result = previousNum + currentNum;
  result = result.toString();
  if (result.length > 8) {
    return Number.parseFloat(result).toFixed(6);
  } else {
    return result;
  }
};
const subtract = () => {
  result = previousNum - currentNum;
  result = result.toString();
  if (result.length > 8) {
    return Number.parseFloat(result).toFixed(6);
  } else {
    return result;
  }
};
const multiply = () => {
  result = previousNum * currentNum;
  result = result.toString();
  if (result.length > 8) {
    return Number.parseFloat(result).toFixed(6);
  } else {
    return result;
  }
};
const divide = () => {
  result = previousNum / currentNum;
  result = result.toString();
  if (result.length > 8) {
    return Number.parseFloat(result).toFixed(8);
  } else {
    return result;
  }
};

// Clear
clearBtn.addEventListener("click", () => {
  currentNum = "";
  previousNum = "";
  previousOperand.innerText = "";
  currentOperand.innerText = "";
  operator = undefined;
});

// Delete
deleteBtn.addEventListener("click", () => {
  currentOperand.innerText = currentOperand.innerText.toString().slice(0, -1);
});
