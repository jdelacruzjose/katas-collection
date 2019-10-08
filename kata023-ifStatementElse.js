// ************************************************************************************
// https://www.codewars.com/kata/grasshopper-grade-book
// Description:
// Grade book
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.esired Principal 'D' is always greater than the initial principal, however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
// ************************************************************************************


//////// my solution: ////////
function getGrade (s1, s2, s3) {
  // Code here
  let grade = (s1 + s2 + s3) / 3
  if (grade >= 90)
    return 'A'
  if (grade >= 80)
    return 'B'
  if (grade >= 70)
    return 'C'
  if (grade >= 60)
    return 'D'
  return 'F'
}

// Steps
// 1. Add variables then divide by 3
// 2. Then use multiple if statements 
// 3. Return total as a grade based on final sum

//////// the best solution: ////////
// function getGrade (s1, s2, s3) {
//   avg = (s1+s2+s3)/3;
//   if (avg < 60)  return "F";
//     else if (avg < 70) return "D";
//     else if (avg < 80) return "C";
//     else if (avg < 90) return "B";
//     else return "A";
// }
