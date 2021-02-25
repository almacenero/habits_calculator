const panelButton = require("./../index");

describe("Button should recive  values", () => {
  test("Button should concatenate input values", () => {
    expect(panelButton(5)).toEqual(5);
    expect(panelButton(1)).toEqual(51);
    expect(panelButton(0)).toEqual(510);
  });
});

describe("Button should math  operations", () => {
  test("Should add 2 numbers", () => {
    panelButton("C");
    expect(panelButton(4)).toEqual(4);
    expect(panelButton(6)).toEqual(46);

    panelButton("+");

    expect(panelButton(10)).toEqual(10);
    expect(panelButton(1)).toEqual(101);

    panelButton("+");

    expect(panelButton(3)).toEqual(3);
    expect(panelButton(2)).toEqual(32);

    panelButton("*");

    expect(panelButton(3)).toEqual(3);
    expect(panelButton(6)).toEqual(36);

    panelButton("/");

    expect(panelButton(2)).toEqual(2);

    panelButton("=");

    panelButton("C");
  });
});
