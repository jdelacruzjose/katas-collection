// https://www.codewars.com/kata/well-of-ideas-easy-version
// Description: For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let goodResult = 0; //total variable count

  for(let i =0; i <x.length; i++){ // for-loop to count the amount of 'good' in array 
    if(x[i] === 'good'){
       goodResult ++;
    } 
  } 

  if(goodResult === 0){ // conditionals to return the results
    return 'Fail!'
  } 
  else if(goodResult > 0 && goodResult<=2){
    return 'Publish!';
  }
  else if(goodResult > 2){
    return 'I smell a series!';
  }
}