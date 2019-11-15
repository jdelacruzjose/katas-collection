// https://www.codewars.com/kata/reversed-strings/train/javascript
// Description: Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

function solution(str) {
  let strToArr = str.split("");
  let thisStr = strToArr.reverse().join("");

  return thisStr;
}

solution("world");

// Steps
// 1. Turn a string into an array.
// 2. Use the reverse array method.
// 3. Then join the array back into a string.
