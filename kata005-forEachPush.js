// ************************************************************************************
// https://www.codewars.com/kata/55b42574ff091733d900002f
// Description:
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// ************************************************************************************


//////// my solution: ////////

function friend(friends){
  let newFriends = [];
  for(i=0; i < friends.length; i++){
    if(friends[i].length == 4 && isNaN(friends[i])){
      newFriends.push(friends[i]);
    }
  }

  return newFriends
}

// Steps
// 1. Create a empty array variable. 
// 2. Run a for loop using the placeholder.length
// 3. Use a Boolean statement if string length equals 4 and is not a number.
// 4. If true push variable into a new array.
// 5. After return variable.

  
//////// the best solution: ////////
// function friend(friends){
//   return friends.filter(n => n.length === 4)
// }
