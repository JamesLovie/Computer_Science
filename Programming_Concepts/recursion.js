'use strict'

function sumTo(n) {
  if (n == 1) {
    // Basis of Recursion : n == 1
    console.log(n)
    return 1;
  } else {
    // Recursion Step: n != 1
    console.log(n)
    return n + sumTo(n - 1);
  }
}

console.log("Sum to: " + sumTo(4));

function factorialSum(n) {
  if (n == 1) {
    // Basis of Recursion : n == 1
    console.log(n)
    return 1;
  } else {
    // Recursion Step: n != 1
    console.log(n)
    return n * factorialSum(n - 1);
  }
}

console.log("Factorial Sum: " + factorialSum(5));