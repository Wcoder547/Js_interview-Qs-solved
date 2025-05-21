//? Question:

//? Write a function factorial that takes a non-negative integer num as input and returns it's factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.

//* Solution 1:

// function factorial(num) {

//   let fact = num;

//   for (let i = 1; i < num; i++) {

//     fact *= num - i;

//   }

//   return fact;

// }

//* Solution 2:

// function factorial(num) {

//   let fact = 1;

//   for (let i = 1; i <= num; i++) {

//     fact *= i;

//   }

// }

//* Solution 3:

function factorial(num) {
  if (num === 0) return 1;
  else return num * factorial(num - 1);
}

console.log(factorial(0));

console.log(factorial(1));

console.log(factorial(2));

console.log(factorial(3));

console.log(factorial(4));

console.log(factorial(5));
