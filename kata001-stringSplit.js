// ************************************************************************************
// https://www.codewars.com/kata/credit-card-mask/solutions?show-solutions=1
// Description:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// ************************************************************************************


//////// my solution: ////////

let cardNumber = '1213333113337686';

function maskify() {
  cardNumber = cardNumber.split("");
  for(var i = 0; i < cardNumber.length - 4; i++){
    cardNumber[i] = "#";
}

cardNumber = cardNumber.join("");
return cardNumber
}

maskify();

//////// the best solution: ////////
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }
