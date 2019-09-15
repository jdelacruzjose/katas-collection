// ************************************************************************************
// https: www.codewars.com/kata/surface-area-and-volume-of-a-box
// 
// Description:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]
// ************************************************************************************


//////// my solution: ////////
function getSize(width, height, depth){
  let area = (2*width*height)+(2*height*depth) + (2*width*depth);
  let volume = width* height* depth;
  return [area, volume];
  }
  
  // steps
  // 1. Define variable for area with all upcoming input possibilities x2
  // 2. Define variable for volume by multiplying width* height* depth 
  // 3. Return variables as an array 

//////// the best solution: ////////
// const getSize = (width, height, depth) => [(width * height + width * depth + height * depth) * 2, width * height * depth];
