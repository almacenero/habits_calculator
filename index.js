let stringNumber = [];
let stringOperationsNumbers = [];
let operatorsMath = ["*", "/", "-", "+"]; //este operador lo voy a llenar en el orden que entro los operadores
//let operatorsMath = ["-"];

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

  let acumulator = 0;
  while (stringOperationsNumbers.length > 1) {
    operatorsMath.forEach((operatorMath) => {
      stringOperationsNumbers.forEach((element, index) => {
        if (!Array.isArray(operatorMath)) {
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
        }
      });

      console.log("el arreglo", stringOperationsNumbers);
    });
  }
  console.log("mi acumulator", acumulator);
  return acumulator;
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
    return equalValue();
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

    //console.log(actualNumber);
    return actualNumber;
  }
};

module.exports = panelButton;
