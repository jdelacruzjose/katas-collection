// ************************************************************************************
// https://www.codewars.com/kata/abbreviate-a-two-word-name
// Description:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F
// ************************************************************************************


//////// my solution: ////////
let people = 'Sam Harris';

function abbrevName(name) {
  let newNames  = name.split(' ');
  // console.log(newNames);
  return (newNames[0][0]+ "." + newNames[1][0].toUpperCase());
}

abbrevName(people);

// steps
// 1. turn string to array
// 2. find the first letter of array [1][0]
// 3. return merged array with toUpperCase method


//////// the best solution: ////////
// function abbrevName(name){
//   return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
// }