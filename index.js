const stringNumber = [];

const panelButton = (value) => {
  if (typeof value != "number") {
    return null;
  }
  if (value === "=") {
  }
  if (value === "+") {
  }
  if (value === "-") {
  }
  if (value === "*") {
  }
  if (value === "/") {
  }
  if (typeof value == "number") {
    stringNumber.push(value);
    const number = Number(stringNumber.join(""));
    //console.log(number);
    return number;
  }
};

module.exports = panelButton;
