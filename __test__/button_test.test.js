const panelButton = require("./../index");
var randomstring = require("randomstring");

//Test input values by button fuction
describe("Button should recive  values", () => {
  test("Should cant input max 20 characters", () => {
    let inputValues = randomstring.generate({
      length: 21,
      charset: "numeric",
    });

    expect(panelButton(parseInt(inputValues))).toEqual(null);

    panelButton("C");
  });
  test("Button should concatenate input values", () => {
    panelButton("C");
    expect(panelButton(5)).toEqual(5);
    expect(panelButton(1)).toEqual(51);
    expect(panelButton(0)).toEqual(510);
  });
});
//Test operations with numbers
describe("Button should math  operations", () => {
  test("Should operate one digit numbers", () => {
    panelButton("C");
    expect(panelButton(4)).toEqual(4);

    panelButton("-");

    expect(panelButton(7)).toEqual(7);

    panelButton("+");

    expect(panelButton(8)).toEqual(8);

    panelButton("+");

    expect(panelButton(9)).toEqual(9);

    panelButton("/");

    expect(panelButton(2)).toEqual(2);

    panelButton("*");

    expect(panelButton(3)).toEqual(3);

    expect(panelButton("=")).toEqual(6.5);

    panelButton("C");
  });

  test("Should operate more thanone digit numbers", () => {
    expect(panelButton(14)).toEqual(14);

    panelButton("-");

    expect(panelButton(7)).toEqual(7);

    panelButton("+");

    expect(panelButton(8)).toEqual(8);

    panelButton("+");

    expect(panelButton(19)).toEqual(19);

    panelButton("/");

    expect(panelButton(2)).toEqual(2);

    panelButton("*");

    expect(panelButton(4)).toEqual(4);

    expect(panelButton("=")).toEqual(17.375);

    panelButton("C");
  });
});
