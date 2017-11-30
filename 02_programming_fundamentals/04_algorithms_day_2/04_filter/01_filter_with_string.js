// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]


function filter(array, str) {

  if (str !=="odd" && str !== "even"){
    return array;
  }
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (str === "even") {
      if (array[i] % 2 === 0) {
        newArray.push(array[i]);
      }
    } else if (str === "odd"){
      if(array[i] % 2 !== 0){
        newArray.push(array[i]);
      }
    } else {
      newArray;
    }
  }
  return newArray;
}





// do not remove this line, it is for tests
module.exports = filter;


console.log(filter([1, 2, 3, 4, 5], "opppp"));
