const panelButton = require("./../index");

describe("Button should recive  values", () => {
  test("Button should recive a value number value", () => {
    let a = "sd";
    expect(panelButton(a)).toBe(null);
  });
  test("Button should concatenate input values", () => {
    expect(panelButton(5)).toEqual(5);
    expect(panelButton(1)).toEqual(51);
    expect(panelButton(0)).toEqual(510);
  });
});
