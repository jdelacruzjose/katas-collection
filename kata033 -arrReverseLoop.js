// https://www.codewars.com/kata/my-head-is-at-the-wrong-end
// Description:
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!

function fixTheMeerkat(arr){
  for(i=0; i< arr.length; i++){
      arr.reverse();
        return arr
      }
    return arr
  }
  
  // Steps
  // 1. Run a for-loop by the length of array
  // 2. Use array reverse(); Method to change array
  // 3. Return array
  