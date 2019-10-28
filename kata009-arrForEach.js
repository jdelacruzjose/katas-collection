// ************************************************************************************
// https://www.codewars.com/kata/vowel-count

// Description: Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.
// ************************************************************************************


//////// my solution: ////////

function getCount(str) {
  str = str.toLowerCase(); 
  var vowelsCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u']; 
  for(let i = 0;i<str.length; i++) {
    vowels.forEach((v) => {
      if(str[i] === v) {
        vowelsCount++; 
      }
    })
  }
  return vowelsCount;
}

// Steps
// 1. Create a count variable and a array with all vowels
// 2. Convert str toLowerCase
// 3. Run a for-each loop to count if the variable matches
// 4. Return the total count variable


//////// the best solution: ////////
// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }
