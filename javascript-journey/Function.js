// Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

function first (name){
    console.log(`hello, ${name}`);
}
frist("tejasvi");

// Question-2:  Write a function that takes two parameters, adds them together, and returns the result.

function parameters ( a ,b ){
    return(` two parameters${a + b}`)
}
console.log(parameters(20,30));

// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

const greeting = (time) => {

    if (time >= 0 && time < 12) console.log("Good Morning");

    else if (time >= 12 && time < 16) console.log("Good Afternoon");

    else if (time >= 16 && time < 20) console.log("Good Evening");

    else if (time >= 20 && time <= 24) console.log("Good Night");

    else console.log("Invalid Time");
}

greeting(10);

// Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

// What I learn
function areaRect(length, width) {
if (typeof length !== 'number' || length < 0) {
throw new Error("Sorry number is length is invalid");
}
if (typeof width !== 'number' || width < 0) {
throw new Error("Sorry width is invalid :(");
}

let area = length * width;
return area;
}
try {
let result = areaRect(3,num);
console.log(result);
} catch (error) {
console.error('Error:', error.message);
}

// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

const expo = ( base, exponent) => {
return ((base ** exponent));
}
console.log(expo(20,2));

//Second type to check the number

function powerCalculate (base, exponenet) {
if (typeof base !== 'number' || base < 0) {
throw new Error('Only number and base > zero');
}
if (typeof exponenet !== 'number' || exponenet < 0){
throw new Error('Exponenet only can be number greater than zero');
}

let power = base ** exponenet;
return power;
}

try {
let powerResult = powerCalculate(3,5);
console.log(powerResult);
} catch (error){
console.error('Error:', error.message);
}

// Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

function isPrime(number) {
if (number < 2) {
return false;
} 
for (let i = 2; i <= Math.sqrt(number); i++){
if (number % i == 0) {
return false;
}
return true;
}
}

let result = isPrime(5);
console.log(result);

// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

const globalvariable = 20;
 
const variables = () => {
    let localvariable = 10;
    console.log(`i am the global ${globalvariable}`);

    console.log(`i am the local ${localvariable}`);
}
 variables ();

console.log(`i am the global  ${globalvariable}`);

// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.

const outerfunction = () => {
    const outervariable = 20;
    const innerfunction = () => {
        console.log(`Outer variable : ${outervariable}`)
    }
    return innerfunction
}

const result = outerfunction()
result();

// Question-9:  Write a recursive function to calculate the factorial of a given number.

 const factorial = (n) => {
    if (n === 0)  {
    return 1;
    }
    console.log(n)
    return n * factorial(n - 1)
 }

 console.log(factorial(5))

//  Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).

const firstfunction = (a) => {
   return a + 2
}
const secondfunction = (x) => {
    return 2 * x ;
}
const composedfunction = (x) => {
    return firstfunction(secondfunction(x))
}
console.log(composedfunction(22));