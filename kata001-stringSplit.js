// ************************************************************************************
// https://www.codewars.com/kata/credit-card-mask
// Description:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// ************************************************************************************


//////// my solution: ////////

let cardNumber = '1213333113337686';

function maskify() {
  cardNumber = cardNumber.split("");
  for(let i = 0; i < cardNumber.length - 4; i++){
    cardNumber[i] = "#";
}

cardNumber = cardNumber.join("");
return cardNumber
}

maskify();

// Steps
// 1. Create a Variable that stores the number as an array (Using .split(""))
// 2. Run a for loop(.length of array -4 last digits)
// 3. Assign [i] as a #
// 4. Then assign the same variable again as a string & return (Using .join(""))


//////// the best solution: ////////
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }
