//first input numbers
let stringNumber = [];
//concatenate numbers and operators
let stringOperationsNumbers = [];
//operators for Math Operations
let operatorsMath = ["*", "/", "-", "+"];
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
          console.log("el operador----", operatorMath);
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

      console.log("el arreglo", stringOperationsNumbers);
    });
  }
  console.log("mi acumulator", acumulator);
  return acumulator;
};
//Save the operator input in the calc
const manageOperator = (operator) => {
  stringNumber = [];
  stringOperationsNumbers.push(actualNumber);
  stringOperationsNumbers.push(operator);
  actualNumber = 0;
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
    return actualNumber;
  }
};

module.exports = panelButton;
