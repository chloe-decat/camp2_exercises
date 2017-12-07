const toWords = require("./to_words");

describe("test if result is correct", function() {
  test("the output is a list of words", function() {
    const result = toWords("Salut tout le monde");
    expect(result).toEqual(["Salut","tout","le", "monde"]);
  });

  test("input is a sentence", function() {
    const result = toWords("Quelle heure est-il?");
    expect(result).toEqual(["Quelle","heure","est", "il"]);
  });

  test("input is a sentence", function() {
    const result = toWords("Mon cher;quelle heure est-il?");
    expect(result).toEqual(["Mon","cher","quelle", "heure","est","il"]);
  });
});
