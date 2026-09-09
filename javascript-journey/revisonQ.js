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

// Q3. Given an array of student objects, where each student has a name and marks, find and print the student who has the highest marks and the student who has the lowest marks. Count the students who scored 80 or above. Print the names of students who scored 80 or above.

const students = [
    { name: "Rahul", marks: 78 },
    { name: "Aman", marks: 92 },
    { name: "Rohit", marks: 85 },
    { name: "Karan", marks: 88 }
];

let highest = students[0];
let lowest = students[0];
let count = 0;


for (let index = 0; index < students.length; index++) {

    const element = students[index];

    console.log(element.name);

    if (element.marks > highest.marks) {
        highest = element;
    }

    if (element.marks < lowest.marks) {
        lowest = element;
    }


    if (element.marks >= 80) {
        count++;
    }
}

console.log("Highest:", highest.name, highest.marks);
console.log("Lowest:", lowest.name, lowest.marks);

console.log("80 or above:", count);

console.log("Students who scored 80 or above:");

for (let index = 0; index < students.length; index++) {

    const element = students[index];

    if (element.marks >= 80) {
        console.log(element.name);
    }
}



// Q4. Given an array of product objects, where each product has a name, price, and quantity, calculate and print the total number of items and the total cart price.

let products = [ 
    { name: "Toffee", price: 5, quantity: 10 },
    { name: "Chips", price: 20, quantity: 3 },
    { name: "Juice", price: 30, quantity: 2 }, 
    { name: "Biscuit", price: 10, quantity: 5 }
     ];

     let total = 0;
    let totalItems = 0;


    for (let index = 0; index < products.length; index++) {
             element = products[index];
    
             total += element.price * element.quantity;
             totalItems += element.quantity;
    }
    console.log(element.name)
    console.log(total);
    console.log(totalItems)



