// ************************************************************************************
///https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript
//
// Description: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"])
// ************************************************************************************


//////// my solution: ////////
function moveZeros (arr) {  
  const isOrignalArray =[];
  const isZeroArray =[];

  for(let i =0; i < arr.length; i++){
    if(arr[i]===0) isZeroArray.push(arr[i])
    else isOrignalArray.push(arr[i])
  }
  return [...isOrignalArray, ...isZeroArray];
}

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// Steps
// 1. Create two seperate arrays
// 2. Run a for loop with a boolean
// 3. After return both arrays using spread operator