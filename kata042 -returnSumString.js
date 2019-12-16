// https://www.codewars.com/kata/sum-the-strings
// Description: Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

//   sumStr("4", "5")    // should output "9"
//   sumStr("34", "5")   // should output "39"


function sumStr(a,b) {
  let strToNumA = Number(a); //Convert string to Number.
  let strToNumB = Number(b);
  let sum = strToNumA + strToNumB; // Sum both variables together.
  return sum.toString(); // Return sum to a string.
}

sumStr("4","5");