// https:www.codewars.com/kata/area-of-a-square/train/javascript
// Instruction: Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A) {
  let area = A * 2;
  let equation = Math.pow(area / Math.PI, 2);
  return Number(equation.toFixed(2));
}

squareArea(2);

// Steps
// 1. Find the area of the square.
// 2. Divide the area by 3.14, then ^2
// 3. Return number rounded to two decimals
