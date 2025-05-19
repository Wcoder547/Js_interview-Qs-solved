//? Question: Sort an Array

//? Write a function to sort an array of numbers in ascending order.

//* Constraints:

//? The function should take an array of numbers as input.

//? It should return a new array with the numbers sorted in ascending order.

//? The original array should remain unchanged.

//? You are not allowed to use the built-in sort() method.

function sortAscending(arr) {
  let numArr = [...arr];

  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] > numArr[j]) {
        const temp = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = temp;
      }
    }
  }

  return numArr;
}

console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]

console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8, 10]

console.log(sortAscending([2]));
