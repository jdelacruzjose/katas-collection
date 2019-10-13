// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
// 
// Instructions:
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

function capitals(word){
  let someArray= [...word];
  let newArray = [];

  for(let index =0; index < someArray.length; index++){
    if(someArray[index]=== someArray[index].toUpperCase()){
      newArray.push(index);
    }
  }
  return newArray;
}

capitals("CaPiTal");

// Steps
// 1. Turn input string into array.
// 2. For Loop -> check for capital letters.
// 3. Find the index of capital letters and return the new array in order.