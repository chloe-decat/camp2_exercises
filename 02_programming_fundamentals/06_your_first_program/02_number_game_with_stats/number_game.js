function getRandomIntInclusive() {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min +1)) + min;
}
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const aTrouver = getRandomIntInclusive();


let nombreAppels = 1;
const nombreAppelsMax = 10;

function checkNumber(input){
  const number = parseInt(input,10);
  if (number === aTrouver){
    console.log("Congrats, you're succed in " + nombreAppels);
    reader.close();
  } else {
    if (number > aTrouver){
      console.log("Too High");
    } else {
      console.log("Too Low");
    }
    nombreAppels++;
    if (nombreAppels >= nombreAppelsMax){
      reader.close();
    } else {
      reader.question("Retry: ", checkNumber);
    }
  }
}
reader.question("What's your number?", checkNumber);
