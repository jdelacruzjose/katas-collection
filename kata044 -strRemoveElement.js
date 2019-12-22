// https://www.codewars.com/kata/remove-first-and-last-character
// Description: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

let name = 'Gianni';

function removeChar(str){
return str.slice(1,-1); //slice method removes any element of the string based on it's index

};

removeChar(name);

