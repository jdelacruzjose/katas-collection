// ************************************************************************************
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// Description:
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1. 4 or more names, the number in and 2 others simply increases.
// ************************************************************************************


//////// my solution: ////////

let gimme = function (inputArray) {
  let order = inputArray.slice().sort(function(a,b) { return a-b;});
  return inputArray.indexOf(order[1]);
}  

steps
1. Create a var that slice the array as well as sort the array in order.
2. After compare then subtract the two indexs. 
3. Return inputArray in index which fits within the triplet. 

//////// the best solution: ////////
// function gimme(a) {
//   return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
// }
