// There is a question in which you have to find out the greatest string by creating a function find_Largest_String. If there are mulitple largest strings , it will encounter the very first one.

let comName = "My name is Waseem Akram ";

function find_Largest_String(str) {
  if (str.trim() === 0) {
    let empty = "The string is empty !!!";
    return empty;
  } else {
    let words = str.split(" ");
    largest_str = words[0];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > largest_str.length) {
        largest_str = words[i];
      }
    }
    return largest_str;
  }
}
// let result = find_Largest_String(comName);
// console.log(result);

// Output: Waseem
// explaination:- The function find_Largest_String takes a string as input and returns the largest word in the string. It first checks if the string is empty, and if so, it returns a message indicating that the string is empty. If the string is not empty, it splits the string into an array of words and iterates through the array to find the largest word based on its length. Finally, it returns the largest word found.

//another approach to find the largest string
function findLargestString(str) {
  if (str.trim() === "") {
    return "The string is empty !!!";
  }
  return str
    .split(" ")
    .reduce(
      (largest, current) =>
        current.length > largest.length ? current : largest,
      ""
    );
}
let result2 = findLargestString(comName);
console.log(result2);
// Output: Waseem
