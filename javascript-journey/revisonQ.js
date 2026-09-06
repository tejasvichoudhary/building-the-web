// Q1. Given an array of numbers, find and print the largest number, smallest number, count of even numbers, and sum of all numbers.

const numbers = [12, 45, 7, 89, 23, 10, 56];

 let largest = numbers[0];
 let smallest = numbers[0];
 let evenCount = 0;
 let sum = 0;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > largest ) {
        largest = element;
        
    }
    if (element < smallest) {
    smallest = element;
}
if (numbers[index] % 2 === 0) {
    evenCount++;
}
sum += element
     
}
console.log(sum);
console.log(evenCount)
console.log(largest);
console.log(smallest);

// Q2. Given a string, find and print its length, count the vowels, reverse the string, and find the longest word.

const str = "I love learning JavaScript";

console.log(str.length);
console.log(str.toUpperCase());

let vowels = "aeiouAEIOU";
let vowelCount = 0;

for (let index = 0; index < str.length; index++) {

    const element = str[index];

    if (vowels.includes(element)) {
        vowelCount++;
    }
}

console.log(vowelCount);

let reverse = "";

for (let index = str.length - 1; index >= 0; index--) {

    reverse += str[index];

}

console.log(reverse);

let words = str.split(" ");
let longestWord = words[0];

for (let index = 1; index < words.length; index++) {

    const element = words[index];

    if (element.length > longestWord.length) {
        longestWord = element;
    }
}

console.log(longestWord);
