// ************************************************************************************
// https:www.codewars.com/kata/5b077ebdaf15be5c7f000077
// Description:
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: 
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
// ************************************************************************************


//////// my solution: ////////
function countSheep(num){
  let sheep = '';
  for(let i = 1; i <= num; i++){
    sheep += `${i} sheep...`
    }
    return sheep;
  } 


//////// the best solution: ////////
// countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``
