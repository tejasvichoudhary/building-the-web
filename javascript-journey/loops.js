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
// let sum = 0;

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

// Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.

// let correctnumber = 5;
let guessingnumber;

do{
 guessingnumber = parseInt(prompt("Enter a number"));
 if(guessingnumber === correctnumber) {
    console.log(`correct`)
 } else {
    console.log(`wrong`)
 }
} while (guessingnumber !== correctnumber);


let correctnumber = Math.floor(Math.random() * 10)+ 1;
    // let guessingnumber;
do{
     guessingnumber = parseInt(prompt("Enter a number"));
} 
while (guessingnumber !== correctnumber)

    alert("You guessed it!");


console.log("Guess a number between 1 to 10 :)");
    // let guessingnumber;

    do {
number = parseInt(prompt("Enter a number: "));
if (number === 5) {
console.log("Guess Correctly");
break;
}
} while (number !== 5);

// Question-7: WAP to display the multiplication table (1 to 10) in the console.


for (let index = 1; index <= 10; index++) {
    console.log(` Table:${index}`)
    for (let i = 1; i <= 10; i++) {
        console.log(`${index} * ${i} = ${index * i}`)
        
    }

} 

for (let i = 1; i <= 10; i++) {
console.log(`Multiplication table of ${i}`);

for (let j = 1; j <= 10; j++) {
const product = i * j;
console.log(`${i} x ${j} = ${product}`);
}

console.log('--------------------'); // Separator between tables
}

let n = 1;

while (n <= 10) {
    let o = 1;
    while (o <= 10) {
        console.log(`${n} * ${o} = ${n * o}`);
        o++;
    }
    n++;
}

// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).
 
for (let index = 0; index <= 10; index++) {
    if(index === 5){
        console.log(`value is ${index}`)
        break
    } 
    if ( index === 3){
        continue
    }
    console.log(index);
}
let p = 0;

while (p <= 10) {
    if (p === 3) {
        p++;
        continue;
    }
    if (p === 5) {
        break;
    }
    console.log(p);
    p++;
}

// Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."
 
for (let index = 1; index <= 30; index++) {
     if(index % 3 === 0 && index % 5 === 0) {
    console.log(`FizzBuzz`)
}
    else if (index % 3 === 0){
    console.log(`Fizz`)
}  else if (index % 5 === 0){
    console.log(`Buzz`)
}   else {
    console.log(index);
}
}

let q = 1;

while (q <= 30) {
    if (q % 3 === 0 && q % 5 === 0) {
        console.log("FizzBuzz");
    } else if (q % 3 === 0) {
        console.log("Fizz");
    } else if (q % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(q);
    }
    q++;
}

// Question-10: WAP to identify and log prime numbers within a given range.

// It take lot of time to understand

for (let i = 2; i < 100; i++) {
    let prime = true;

    for (let j = 2; j < i; j++) {
        
    if(i % j === 0) {
        prime = false;
    } 
        }
    if(prime){
        console.log(i)
    }        
}

let r = 2;
range = 100;

while (r <= range) {
    let isPrime = true;
    let s = 2;
    while (s < r) {
        if (r % s === 0) {
            isPrime = false;
        }
        s++;
    }
    if (isPrime) {
        console.log(r);
    }
    r++;
}

// Pattern Printing Problems


// Question-1: 

// WAP to print this

// *
// **
// ***
// ****
// *****    

let star = "";

for (let index = 1; index <= 5; index++) {
    star = star + "*";
  console.log(star);
    
}

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}

// Question-2: 

// WAP to print this 

//    *
//   ***
//  *****
// *******

for (let i = 1; i <= 7; i += 2) {

    let star = "";

    for (let j = 1; j <= (7 - i) / 2; j++) {
        star += " ";
    }
    
    for (let j = 1; j <= i; j++) {
        star += "*";
    }

    console.log(star);
}

for (let i = 1; i <= 4; i++) {
    let str = "";

    for (let j = 1; j <= 7; j++) {
        if (j >= 5 - i && j <= 3 + i) {
            str += "*";
        } 
        else {
            str += " ";
        }
    }

    console.log(str);

} 

// Question-3:

// WAP to print this

// *****
// *   *
// *   *
// *****

for(let i = 1; i <= 4; i++){
    let str = "";

    for(let j = 1; j <= 4 ; j++) {
        if (i == 1 || j == 1 || i == 4 || j == 4 ){
            str += "*"
        } else {
             str += " ";
        }
    }
        console.log(str)
}

// Question-4:

// WAP to print this

// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++){
    let str = "";
    for (let j = 1; j <= i; j++){
        str += j
    }
    console.log(str)
}

// Question-5

// WAP to print this

//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE

// what i learn

for(let i=1; i<=5; i++){
    let str = "";
    for(let j=1; j<=9; j++){
        if(j>=6-i && j<=4+i){
            str += String.fromCharCode(64+i);
        }else{
            str += " ";
        }
    }
    console.log(str);
}
