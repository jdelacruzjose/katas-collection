// https://www.codewars.com/kata/abbreviate-a-two-word-name
// Description: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

let myName = 'Jose DelaCruz'

function abbrevName(name){
  let splitStr = name.split(' '); //split placeholder to array.
  
  for(i =0; i<splitStr.length; i++){ //forLoop through the arrays length.
    let intials = splitStr.map((str)=>{ 
      return str.charAt(0) //map method to then finding the character,
    })
    return intials.join('.').toUpperCase('') //join array to a str toupperCase.
  }
}

abbrevName(myName);