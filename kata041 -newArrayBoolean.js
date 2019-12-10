// https://www.codewars.com/kata/multiple-of-index/train/javascript
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:

// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

let thisArray = [68, -1, 1, -7, 10, 10]

function multipleOfIndex(array) {
  
  let newArray = [];
  for(let i =0; i< array.length; i++){
    if (array[i] % i == 0){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

multipleOfIndex(thisArray);

// Steps
// 1. Create a variable with an empty array.
// 2. Run a for loop for the length of the array.
// 3. Use a boolean where it takes the index of the array and check if it's a multiple of the integer.
// 4. If conditional is true push that index to the new array.