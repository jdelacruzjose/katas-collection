// https://www.codewars.com/kata/get-character-from-ascii-value/train/javascript
// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65) # => 'A'

function getChar(c) {
  let char = String.fromCharCode(c);
  // console.log(char);
  return char
}

//  Steps
//  1. Create a variable that hold a string using fromCharCode method.
//  2. Return the the variable.