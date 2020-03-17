// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript

// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ().

// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

function expressionMatter(a, b, c) {
  let maxVal= Math.max(a*(b+c), a*b*c, a+b+c, (a+b)*c);

  return maxVal
}

expressionMatter(1,2,3)