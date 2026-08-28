// Q1. Write a JavaScript program to find the length of a string and print its first, last, and third character.

let str = "JavaScript";
 
console.log(str[0]);
console.log(str[9]);
console.log(str[3]);

// Q2. Write a JavaScript program to convert a given string into: Uppercase , Lowercase.

let strr = "JavaScript is Easy";

console.log(strr.toUpperCase())
console.log(strr.toLowerCase())

// Q3. Write a JavaScript program to check whether the word "JavaScript" is present in the given string. If it is present, also find and display its starting index.

let sttr = "I am learning JavaScript";
let word = "JavaScript";

console.log(sttr.includes("JavaScript"));
console.log(word.indexOf("JavaScript"));

// Q4. Write a JavaScript program to extract the words "Java" and "Script" separately from the given string using the slice() method.

let sstr = "JavaScript";

console.log(sstr.slice(0, 4));
console.log(sstr.slice(4, 10));

// Q5. Write a JavaScript program to remove the extra spaces from the beginning and end of the given string. Then replace the word "JavaScript" with "JS".

let strrr = "   I love JavaScript   ";

strrr.trim().replace("JavaScript", "JS");



