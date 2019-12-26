// https://www.codewars.com/kata/santas-naughty-list
// Description: Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

// Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

function findChildren(santasList, children) {
  let newArr =[]; // use empty array to a create santas updated list.
  for(let santaNames of santasList){ //for of loop to iterate santasList array.
    for(let childrenNames of children){  //for of loop to iterate children array.
      if(santaNames === childrenNames && !newArr.includes(santaNames)){ 
        newArr.push(santaNames) //conditional to determine case-sensitivity/duplication. push to new array.
      } 
    }
  }
  return newArr.sort(); // return the finalized array sorted.
}