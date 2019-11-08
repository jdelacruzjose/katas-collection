//https://www.codewars.com/kata/calculate-bmi/train/javascript
// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  let newHeight = Math.pow(height, 2);
  let calculator = weight/newHeight;

  if(calculator <= 18.5){
    return "Underweight";
  }
  if(calculator <= 25.0){
    return "Normal";
  }
  if(calculator <= 30.0){
    return "Overweight";
  }
  if(calculator > 30.0){
    return "Obese";
  }
} 

bmi(85, 175);

// Steps
// 1. Create a variable using height placeholder to ^2.
// 2. Divide weight by height.
// 3. Create Boolean statement for each instance.