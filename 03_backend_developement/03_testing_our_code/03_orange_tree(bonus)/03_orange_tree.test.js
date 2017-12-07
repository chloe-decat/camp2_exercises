const orangeTree = require("./03_orange_tree");

beforeEach(() => {
  orangeTree.seed();
});

test("Seed should reset all params", function() {
  orangeTree.ageOneYear();
  orangeTree.seed();
  expect(orangeTree.age).toEqual(0);
  expect(orangeTree.alive).toEqual(true);
  expect(orangeTree.height).toEqual(0);
  expect(orangeTree.oranges).toEqual(0);
});

test ("oranges tree contains oranges", function() {

  for (let i = 0; i <= 5; i++) {
    orangeTree.ageOneYear();
  }
  const nbOranges = orangeTree.oranges;
  expect(orangeTree.pickAnOrange()).toEqual(true);
  expect(orangeTree.oranges).toEqual(nbOranges - 1);
});


test("Check oranges stock", function(){
  expect(orangeTree.pickAnOrange()).toEqual(false);
});

test("tree should die between 50 and 100 years", function(){
  while(orangeTree.alive && orangeTree.age <= 100) {
    orangeTree.ageOneYear();
  }
  expect(orangeTree.alive).toEqual(false);
  expect(orangeTree.age > 50).toEqual(true);
  expect(orangeTree.age).toBeLessThanOrEqual(100);
});


test ("Tree status at 5 year", function() {

  for (let i = 1; i <= 5; i++) {
    orangeTree.ageOneYear();
    expect(orangeTree.height).toBe(25*i);
  }
  expect(orangeTree.alive).toBe(true);
  expect(orangeTree.oranges).toBe(10);
  expect(orangeTree.age).toBe(5);
});
