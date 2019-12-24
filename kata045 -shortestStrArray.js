// // https://www.codewars.com/kata/shortest-word/javascript
// Description: Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

let sentence = 'bitcoin take over the world maybe who knows perhaps';

function findShort(s){
let splitStr = s.split(' '); // split the string into an array.

let sortShortest = splitStr.reduce((firstWord, secondWord)=>{ //reduce method reduces the array into a single value.
   if(firstWord.length < secondWord.length){ //boolean to compare the length between placeholders.
     return firstWord;
   } else{
     return secondWord;
   }
  });
  return sortShortest.length; //return length of string.
}

findShort(sentence);