//First input numbers
let stringNumber = [];
//Concatenate numbers and operators
let stringOperationsNumbers = [];
//Operators for Math Operations
let operatorsMath = ["*", "/"];
//Number imput one o more digits
let actualNumber = 0;
//Clean de calculator input
const clearCalculator = () => {
  stringNumber = [];
  stringOperationsNumbers = [];
  total = 0;
  actualNumber = 0;
};
//Resolv the math operations
const equalValue = () => {
  stringNumber = [];

  stringOperationsNumbers.push(actualNumber);
  actualNumber = 0;

  let acumulator = 0;
  /**
   * The array of operators is traversed and in each iteration the arrangement that has the string of
   * numbers and operators is traversed, to execute the mathematical action in the order of priority
   * (*, /, +, -)
   */
  while (stringOperationsNumbers.length > 1) {
    operatorsMath.forEach((operatorMath) => {
      stringOperationsNumbers.forEach((element, index) => {
        if (operatorMath === element) {
          if (operatorMath === "*") {
            acumulator =
              stringOperationsNumbers[index - 1] *
              stringOperationsNumbers[index + 1];

            stringOperationsNumbers[index - 1] = acumulator;

            stringOperationsNumbers.splice(index, 2);
          }
          if (operatorMath === "/") {
            acumulator =
              stringOperationsNumbers[index - 1] /
              stringOperationsNumbers[index + 1];

            stringOperationsNumbers[index - 1] = acumulator;

            stringOperationsNumbers.splice(index, 2);
          }
          if (operatorMath === "+") {
            acumulator =
              stringOperationsNumbers[index - 1] +
              stringOperationsNumbers[index + 1];

            stringOperationsNumbers[index - 1] = acumulator;

            stringOperationsNumbers.splice(index, 2);
          }
          if (operatorMath === "-") {
            acumulator =
              stringOperationsNumbers[index - 1] -
              stringOperationsNumbers[index + 1];

            stringOperationsNumbers[index - 1] = acumulator;

            stringOperationsNumbers.splice(index, 2);
          }
        }
      });
    });
  }
  return acumulator;
};
const addRestOperatorsList = (operator) => {
  operatorsMath.forEach((operatorMath) => {
    if (
      operatorMath.toString() !== operator.toString() &&
      operator !== "*" &&
      operator !== "/"
    ) {
      operatorsMath.push(operator);
    }
  });
};
//Save the operator input in the calc
const manageOperator = (operator) => {
  stringNumber = [];
  if (stringOperationsNumbers.join("").length <= 20) {
    stringOperationsNumbers.push(actualNumber);
    stringOperationsNumbers.push(operator);
    addRestOperatorsList(operator);
    actualNumber = 0;
  } else {
    return null;
  }
};
//Button input function
const panelButton = (value) => {
  if (value === "C") {
    clearCalculator();
  }
  if (value === "=") {
    return equalValue();
  }
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    manageOperator(value);
  }
  if (typeof value == "number") {
    stringNumber.push(value);
    actualNumber = Number(stringNumber.join(""));

    if (actualNumber.toString().length <= 20) {
      return actualNumber;
    }
    if (actualNumber.toString().length > 20) {
      return null;
    }
  }
};

module.exports = panelButton;
