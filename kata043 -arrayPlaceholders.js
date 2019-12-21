// https://www.codewars.com/kata/what-is-between/javascript
// Description: Complete the function that takes two integers (a, b, where a > b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let newArr = []; //create a new array
  for(i=a; i<=b; i++){ //run a for-loop between both placeholders
   newArr.push(i); //push the index to the new array
  }
  return newArr //return array
}

between(1,4);

