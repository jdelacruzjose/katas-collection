// ************************************************************************************
// https://www.codewars.com/kata/sum-of-positive/train/javascript
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
// ************************************************************************************


//////// my solution: ////////
function positiveSum(arr) {
  let total = 0;    
  for (i = 0; i < arr.length; i++) {     
    if (arr[i] > 0) {                   
      total += arr[i];                 
    }
  }
  return total;                         
}

// Steps
// 1. Setup loop to go through array of given length
// 2. If arr[i] is greater than zero, add arr[i] to total
// 3. Return Total

//////// the best solution: ////////
// function positiveSum(arr) {
//   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }
