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

//  Q6. Write a JavaScript program to count the total number of vowels (a, e, i, o, u) present in the given string. Use a for loop.

let stri = "JavaScript";
let count = 0;

for (let index = 0; index < stri.length; index++) {
     let vowels = "aeiou";
    if (vowels.includes(stri[index]) ){
        count++
    }
}
console.log(count)

// Q7. Write a JavaScript program to reverse a given string without using the reverse() method.

let strii = "hello";
let rev = "";

for (let index = strii.length - 1; index >= 0; index--) {
    rev =  rev + strii[index];

    
}

console.log(rev)

// Q8. Write a JavaScript program to check whether a given string reads the same forward and backward. If it does, print "Palindrome"; otherwise, print "Not Palindrome".

let strin = "madam";
let reve = "";

for (let index = strin.length - 1; index >= 0; index--) {
    reve =  reve + strin[index];
}
    if(reve === strin){
        console.log("palindrome")
    } else {
        console.log("not palindrome")
    }

// Q9. Write a JavaScript program to count how many times each character occurs in the given string and display the frequency of each character.

let string = "banana";
let frequency = {};

for (let index = 0; index < string.length; index++) {
    let currentChar = string[index];

    if (currentChar in frequency) {
        frequency[currentChar]++;
    } else {
        frequency[currentChar] = 1;
    }
}

console.log(frequency);

// Q10. Write a JavaScript program to count the total number of words in a given sentence and find the longest word in that sentence.

let stringg = "I love learning JavaScript";

let array = stringg.split(" ");

console.log("Total words:", array.length);

let longest = "";

for (let index = 0; index < array.length; index++) {

    let element = array[index];

    if (element.length > longest.length) {
        longest = element;
    }
}

console.log("Longest word:", longest);
