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
if (numbers[index] %2 === 0) {
    evenCount++;
}
sum += element
     
}
console.log(sum);
console.log(evenCount)
console.log(largest);
console.log(smallest);

