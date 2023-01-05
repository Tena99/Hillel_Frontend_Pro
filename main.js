// Task 27

//action

const action = getAction();

function getAction() {
  const action = prompt("Action?");
  while (isActionInvalid(action)) {
    prompt("Use only: + - / * ");
  }
  return action;
}

function isActionInvalid(action) {
  return action !== "+" && action !== "-" && action !== "/" && action !== "*";
}

//operands

const operands = [getOperands("Put operands")];
let str = "";
for (let i = 0; i < operands.length; i++) {
  str += operands[i];
}
let arr = str.split(",");

function getOperands(title) {
  let operand = prompt(title);
  while (isOperandInvalid(operand)) {
    operand = prompt("Put the numbers separated by commas.");
  }
  return operand;
}

function isOperandInvalid(operand) {
  return operand === null || operand.trim() === "" || operand < 0;
}

// написать подсчёт чисел массива

let result = calculate(action);

function calculate(action) {
  let result = Number(arr[0]);

  switch (action) {
  case "+":
    for (let i = 1; i < arr.length; ++i) {
      result += Number(arr[i]);
    }

    return result;
  case "-":
    for (let i = 1; i < arr.length; ++i) {
      result -= Number(arr[i]);
    }

    return result;
  case "*":
    for (let i = 1; i < arr.length; ++i) {
      result *= Number(arr[i]);
    }

    return result;
  case "/":
    for (let i = 1; i < arr.length; ++i) {
      result /= Number(arr[i]);
    }

    return result;
  default:
    alert("Something wrong");
  }
}

calculate(action);

alert(result);
