let stringNumber = [];
let stringOperationsNumbers = [];

let actualNumber = 0;

const clearCalculator = () => {
  stringNumber = [];
  stringOperationsNumbers = [];
  total = 0;
  actualNumber = 0;
  console.log(stringOperationsNumbers);
};

const equalValue = () => {
  stringNumber = [];

  stringOperationsNumbers.push(actualNumber);
  actualNumber = 0;
  console.log(stringOperationsNumbers);
};

const manageOperator = (operator) => {
  stringNumber = [];
  stringOperationsNumbers.push(actualNumber);
  stringOperationsNumbers.push(operator);
  actualNumber = 0;
};

const panelButton = (value) => {
  if (value === "C") {
    clearCalculator();
  }
  if (value === "=") {
    equalValue();
  }
  if (value === "+") {
    manageOperator("+");
  }
  if (value === "-") {
    manageOperator("-");
  }
  if (value === "*") {
    manageOperator("*");
  }
  if (value === "/") {
    manageOperator("/");
  }
  if (typeof value == "number") {
    stringNumber.push(value);
    actualNumber = Number(stringNumber.join(""));

    console.log(actualNumber);
    return actualNumber;
  }
};

module.exports = panelButton;
