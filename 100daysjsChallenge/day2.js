//? Question:

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.

//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.

//? Otherwise, the function should return the generated hash tag prefixed with #.

let myName = "my name is waseem akram ";

function generateHash(str) {
  if (str.length > 280 && !str.trim()) {
    return false;
  }

  let words = str.trim().split(/\s+/);

  let capitalizedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
  return `#${capitalizedWords.join("")}`;
}
let finalResult = generateHash(myName);
console.log(finalResult);

// output: #MyNameIsWaseemAkram
//? Explanation:
//? 1. The function checks if the input string is empty or contains only whitespace using the trim() method and the length property.
//? 2. It splits the string into an array of words using the split() method with a regular expression that matches one or more whitespace characters.
//? 3. It capitalizes each word using the map() method and the toUpperCase() and toLowerCase() methods.
//? 4. Finally, it joins the capitalized words together without spaces using the join() method and prefixes the result with #.
//? 5. The function returns the generated hash tag.
