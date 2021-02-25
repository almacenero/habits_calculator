const panelButton = require("./../index");

test("Button should recive a value", () => {
  expect(panelButton(3)).toBe(3);
});
