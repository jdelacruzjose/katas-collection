// ************************************************************************************
// https://www.codewars.com/kata/56606694ec01347ce800001b
// Description:
// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).
// ************************************************************************************


//////// my solution: ////////

function isTriangle (a, b, c){
  if (a === 0 || b === 0 || c === 0){
    return false;
  } else if (a+b <= c){
    return false;
  } else if (b+c <= a){
    return false;
  } else if (a+c <= b){
    return false;
  }

  return true;
  }

// Steps
// 1. Create Boolean if all variables === 0; Return False
// 2. Use Else If for each possibility that doesn't return equal an integer; Return False
// 3. If all three integer equal; Return True
  
//////// the best solution: ////////
// function isTriangle(a,b,c)
// {
//    return a + b > c && a + c > b && c + b > a;
// }
