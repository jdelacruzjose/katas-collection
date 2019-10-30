// https://www.codewars.com/kata/convert-a-string-to-an-array/javascript
// Write a function to split a string and convert it into an array of words. For example:

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

let test = "Jose Delacruz"

function stringToArray(string){
let strToArr = string.split(" ");

return strToArr;
}

stringToArray(test);

// Steps
// 1. Create a variable holding the string method
// 2. Return the Variable
// 3. Test the function