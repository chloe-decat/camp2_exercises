// Create a function double which take an integer and return the double of the integer.
// Then, try to create a function called map. This function should take two parameters:
//
// - an array
// - a function
//
// this function apply the function passed as a parameter on each values of the array (also passed as a parameter).
//
// Finally, test map with an array of your choice and the double function.
//
// WARNING: You're not allowed to use `Array.map`!

// Your code here...

// Do not remove last lines, it is for tests
// eslint-disable-next-line

function double(number) {
  return (number * 2);
}

function map(list, double) {
  const newArray = [];

  for (let i = 0; i < list.length; i++) {
    newArray.push(double(list[i]));
  }

  return newArray;
}

module.exports = { double: double, map: map };
