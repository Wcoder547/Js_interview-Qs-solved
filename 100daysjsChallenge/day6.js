// here we have to write a program in which we have to check that either the entered string is palindrome or not . Make it sure to solve the question by creating a function checkPalindrome().

let str = prompt("Please enter a string to check the palindrome of it ");

let reversed_str = "";

let checkPalindrome = (a) => {
  if (isNaN(a)) {
    for (let i = a.length - 1; i >= 0; i--) {
      reversed_str += a[i];
    }

    if (str == reversed_str) {
      return "Palindrome";
    } else {
      return "Not a Palindrome";
    }
  } else {
    return alert("Please Enter the valid input ");
  }
};

console.log(
  `The entered string by the user '${str}' is : ${checkPalindrome(str)}`
);
