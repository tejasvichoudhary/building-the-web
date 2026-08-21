// Question-1: WAP that logs numbers from 1 to 10 to the console.

for (let index = 1; index < 11; index++) {
    console.log(index);
    
}
// second type

let i = 1;

while (i <= 10) {
    console.log(i);
    i++
}

// Question-2: WAP that log all even numbers from 2 to 20.

for(let even = 2; even < 21; even++){
    if (even % 2 === 0) {
      console.log(even)  
    }
}
let even = 2;
while (even <=20){
    if(even % 2 === 0){
        console.log(even)
    }
    even++
}

while(even <= 20){
    console.log(even);
    even += 2
}

// Question-3: WAP that counts backward from 10 to 1 and logs the values.

let b = 10;
while(b >= 1 ){
    console.log(b);
    b--;
}
for (let b = 10; b >= 1; b--){
console.log(b);
}
// Question-4: WAP to calculate the sum of numbers from 1 to 5.

let number = 1;
let sum = 0;
while(number <= 5){
    sum = sum + number; // sum += number
    number++
}
console.log(sum);
let sum = 0;

for(let i = 1; i <= 5; i++){
sum += i;
}
console.log(`The sum of numbers from 1 to 5 is: ${sum}`);

// Question-5: WAP that prints powers of 2 (2^n) up to 64.
let num = 2;
let powers = 0;
for(let i = 1 ; i <= 6 ; i++ ){
    powers = num ** i;
    console.log(powers);
}
// if i want  64 2^64

const upperLimit = 64;

for (let i = 1; i <= upperLimit; i++) {
const powerOf2 = 2 ** i;
console.log(`2^${i} = ${powerOf2}`);
}
// I learn 
let m = 1;

while (m <= 64) {
    console.log(m);
    m *= 2;
}






