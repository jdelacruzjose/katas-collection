// ************************************************************************************
// https://www.codewars.com/kata/number-of-anagrams-in-an-array-of-words
// Description:
// An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
// ************************************************************************************


//////// my solution: ////////

function isItAnagram(word1, word2){
  if(word1.length === word2.length){
    const anagramWord1 = [...word1].sort().join("");
    const anagramWord2 = [...word2].sort().join("");
    return anagramWord1 === anagramWord2;
  } else {
    return false;
  }
}

// isItAnagram("hello", "elloh");


const bigArr = ["dell", "ledl", "abc","cba"];
function anagramCounter(someArr){
  let counter = 0;
  for(let i =0; i < someArr.length; i++){
    for (let k = i +1; k < someArr.length; k++){
      if(isItAnagram(someArr[i], someArr[k])){
        counter ++;
      }
    }
  }
  return counter;
}

// Steps
// 1. Create Funtion with Boolean declaring if array absolutely equals previous array
// 2. Use sort & join methods to sort array by alphabetical order then convert it to a string to compare
// 3. Then create a for loop for each array
// 4. Within the function callback the previous function to compare
// 5. Return result


//////// the best solution: ////////
// function anagramCounter(arrayOfWords){
//   let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
//   let numberOfAnagrams = 0;

//   sortedWords.forEach((word, theIndex)=>{
//     for(let i = theIndex+1; i < sortedWords.length; i++){
//       if(word === sortedWords[i]){
//         numberOfAnagrams++
//       }
//     }
//   })
//   return numberOfAnagrams
// }
