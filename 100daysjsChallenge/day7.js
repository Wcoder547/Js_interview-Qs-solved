function highestNumber(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest;
}

console.log(highestNumber([1, 45, 11, 22, 567, 0, 9, 7]));

// Output: 567
//Another Approach

const findMax = (arr) => {
  return arr.reduce((acc, cur) => {
    return cur > acc ? cur : acc;
  }, 0);
}; //best approach
console.log(findMax([1, 45, 11, 22, 567, 0, 9, 7]));
// Output: 567
