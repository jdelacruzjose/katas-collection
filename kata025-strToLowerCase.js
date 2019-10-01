// ************************************************************************************
// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058
// Description: Given a string of arbitrary length with any ascii characters. 
// Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.
// ************************************************************************************


//////// my solution: ////////
function spEng(sentence){
  let sentenceLower = sentence.toLowerCase();
  return sentenceLower.includes('english');
}

// Steps
// 1. Declare a variable that hold the placeholder.toLowerCase method.
// 2. Use .includes method then return the variable.
// 3. Call the function using a string.

//////// the best solution: ////////
// var spEng = (sentence) => sentence.toLowerCase().includes('english');
