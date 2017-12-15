require("sepia");



const weatherByCity = require("./fetch_weather");


test("test with VCR", () => {
  expect.assertions(1);
  return weatherByCity("london")
    .then((result) => expect(result).toEqual("4.73 °C"));
});
