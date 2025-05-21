const calculateAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let output = sum / arr.length;
  return output;
};

console.log(calculateAverage([5, 10, 2, 8]));

function getAverage(arr) {
  //   first method with non-zero array element

  //   return arr.reduce((acc, num)=> acc+num ,0)/arr.length
  //   second method if zero is preasent in the array:

  const sum = arr.reduce((acc, current) => acc + current, 0);

  const count = arr.reduce((acc, current) => acc + (current !== 0), 0);

  return (average = sum / count);
}

console.log(getAverage([34, 22, 54, 122, 0]));
