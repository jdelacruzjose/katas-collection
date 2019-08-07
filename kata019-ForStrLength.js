// ************************************************************************************
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case
// ************************************************************************************


//////// my solution: ////////

function isIsogram(str) {
    str = str.toLowerCase()
    
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i), i + 1) >= 0) {
        return false
      }
    }
    
    return true
  }

//////// the best solution: ////////
// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
//   }