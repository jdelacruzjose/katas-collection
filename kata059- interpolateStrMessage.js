// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
  let greeting = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

return `Hello ${greeting}!`
};

greet('JoSe');