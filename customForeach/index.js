//Qs:implement custom forEach method
//Ans:
Array.prototype.customForEachOne = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const numbers = [10, 20, 30];

numbers.customForEachOne(function (element, index, array) {
  console.log(`Element at index ${index}: ${element} In array: ${array}`);
});
// Output:
// Element at index 0: 10 In array: 10,20,30
// Element at index 1: 20 In array: 10,20,30
// Element at index 2: 30 In array: 10,20,30\

Array.prototype.customForEachTwo = function (callback, thiscontext) {
  if (typeof callback !== "function") {
    throw new TypeError("callback is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    callback.call(thiscontext, this[i], i, this);
  }
};

const user = {
  name: "Ali",
  logColor: function (color, index) {
    console.log(`${this.name} likes color #${index + 1}: ${color}`);
  },
};

const colors = ["purple", "orange", "cyan"];

colors.customForEachTwo(user.logColor, user); // Passing `user` as thiscontext
// explaination:- .call() used for custom this context calling.
// Output:
// Ali likes color #1: purple
// Ali likes color #2: orange
// Ali likes color #3: cyan
