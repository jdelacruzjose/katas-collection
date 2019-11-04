// ************************************************************************************
// https://www.codewars.com/kata/two-fighters-one-winner
// Description: Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
}// ************************************************************************************


//////// my solution: ////////

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  var i = 0;
  if (firstAttacker === fighter1.name) {
    i = 1;
  }
  for (i; (fighter1.health > 0) && (fighter2.health > 0); i++) {
    if (i % 2 === 0) {
      fighter1.health -= fighter2.damagePerAttack;
    } else {
      fighter2.health -= fighter1.damagePerAttack;
    }
  }
  if (fighter1.health > 0) {
    return fighter1.name;
  } else {
    return fighter2.name;
  }
}

//Steps
//1. Create a class function 
//2. Then create a declare winner function 
//3. Run a for loop and Boolean statements 


//////// the best solution: ////////
// function declareWinner(fighter1, fighter2, firstAttacker) {
//   while (fighter1.health > 0 && fighter2.health > 0) {
//     fighter2.health -= fighter1.damagePerAttack;
//     fighter1.health -= fighter2.damagePerAttack;
//   }
  
//   if (fighter1.health <= 0 && fighter2.health <= 0)
//     return firstAttacker;
//   else if (fighter1.health <= 0)
//     return fighter2.name;
//   else
//     return fighter1.name;
// }
