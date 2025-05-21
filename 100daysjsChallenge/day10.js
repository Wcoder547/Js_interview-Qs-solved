//? Question: Check if two arrays are equal

//? Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if they are equal(i.e., contain the same elements in the same order), and false otherwise.

//* Solution 1:
// const arraysAreEqual = (arr1, arr2) => {
//   if (arr1.length != arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] != arr2[i]) return false;
//   }
//   return true;
// };

//* Solution 2:
const arraysAreEqual = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;

  return arr1.every((currVal, index) => currVal === arr2[index]);
};

//* Example:
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); // false
console.log(arraysAreEqual([], [])); // true

// Constraints:

// The function should return false if the arrays have different lengths.
