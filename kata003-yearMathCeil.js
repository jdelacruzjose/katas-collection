// ************************************************************************************
// Description:
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.
// ************************************************************************************


//////// my solution: ////////

function century(year){
  return Math.ceil(year/100);
  }
  
  century(2000);

  
//////// the best solution: ////////
// const century = year => Math.ceil(year/100)
