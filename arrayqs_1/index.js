//Qs : There is an array which contains extra elements. You have to find the core element of array.

//Ans:

Array.prototype.newName = "waseem akram";

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let v in newArr) {
//   console.log(v);
// } //0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// newName

for (let v in newArr) {
  if (newArr.hasOwnProperty(v)) {
    console.log(v);
  }
}
//1,2,3,4,5,6,7,8,9,10
