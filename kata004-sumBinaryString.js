// ************************************************************************************
// https://www.codewars.com/kata/binary-addition
// Description:
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.
// ************************************************************************************


//////// my solution: ////////

function addBinary(a,b) {
  let num = Number(parseInt(a)) + Number(parseInt(b));
  return num.toString(2);
};

addBinary(2,5);

  
//////// the best solution: ////////
// function addBinary(a,b){
//   return (a+b).toString(2)
// }
