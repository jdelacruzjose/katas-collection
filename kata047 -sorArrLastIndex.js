// https://www.codewars.com/kata/sort-by-last-char/
// Description: Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

let sortArray =['take', 'me', 'semynak', 'to'];

function last(x){ 
  return x.sort((a, b)=> { //sort method allows to sort array in-order
    a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1) //charCodeAt locate the index then subtract last last index &
  });
}

last(sortArray);