const greet = require("./greeting");

test("greeting is done", function () {
  const result = greet("Chloe");
  expect(result).toBe("Hello CHLOE!");
});
test("greeting is done", function () {
  const result = greet(undefined);
  expect(result).toBe("Hello World!");
});
