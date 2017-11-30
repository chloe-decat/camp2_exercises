/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

(valeur%3===0&&valeur%5===0)


*/

const listInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function fizzBuzz(list) {

  return list.map((element) => {
    if (element%3===0&&element%5===0) {
      return "FizzBuzz";
    } else if (element%5===0) {
      return "Buzz";
    } else if (element%3===0) {
      return "Fizz";
    } else {
      return element;
    }
  });


}
// const NewList = fizzBuzz(listInput);

module.exports = fizzBuzz;
