//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
/
// Description: Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15


//////// my solution: ////////
function move (position, roll) {
let dicePosition = position;
let diceRoll = roll * 2;

return dicePosition + diceRoll;
}

move(0, 4);

// Steps
// 1. Create variables using the placeholders.
// 2. Multiply the 'roll' by 2. 
// 3. Return both variables by addition.