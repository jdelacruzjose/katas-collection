// ************************************************************************************
//There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Examples
// queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// should return 12
// ************************************************************************************


//////// my solution: ////////

function queueTime(customers, n) {
  let waitTime = Array(n).fill(0);
  
  customers.forEach((customer) => {
    let nextCusto = waitTime.indexOf(Math.min(...waitTime))
    waitTime[nextCusto] += customer;
  });

  return Math.max(...tills);
}

//////// the best solution: ////////
// function queueTime(customers, n) {
//   var w = new Array(n).fill(0);
//   for (let t of customers) {
//     let idx = w.indexOf(Math.min(...w));
//     w[idx] += t;
//   }
//   return Math.max(...w);
// }
