// https://www.codewars.com/kata/do-i-get-a-bonus
// Description: It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, and Java), "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
  if(bonus === true){
      salary = salary * 10 
      return `£${salary}`
    } else {
      return `£${salary}`
    }
  }
  
  bonusTime(100, true);
  
  // Steps
  // 1. Use bonus placeholder as a boolean.
  // 2. If true return salary * 10 in Euros.
  // 3. Else return salary.
