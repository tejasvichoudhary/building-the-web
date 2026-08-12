// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

// What I Do 

const num1 = 30;
const num2 = 20;

console.log(`${num1 + num2}`);
console.log(`${num1 - num2}`);
console.log(`${num1 * num2}`);
console.log(`${num1 / num2}`);

// What I learn
 let number1 = parseInt(prompt("Enter a number:"));
 let number2 = parseInt(prompt("Enter second number:"));
 let operation = prompt("Enter operation type: ");
 let result;

 switch(operation){
    case "+" :
        result = number1 + number2;
        console.log(result);
        break;
        case "-" :
        result = number1 + number2;
        console.log(result);
        break;
        case "*" :
        result = number1 + number2;
        console.log(result);
        break;
        case "/" :
        result = number1 + number2;
        console.log(result);
        break;
        default:
            console.log("Accepting only 4 operators");
            
}
// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

let operator = 20;
 operator = operator + 5;
 console.log("operator");

 let num = 30;
 let num2 = 20;

 num = num2;
 console.log(num); // it will be 20 it will overwrite 10 in num.

// second method

 console.log(num);
 num += 10;

 console.log(num);
 num -= 10;

 console.log(num);
 num /= 10;

 console.log(num);
 num *= 10;

 console.log(num);
 num **= 2;

 console.log(num);
 num %= 10;


 // Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

 let a = parseInt(prompt("Enter number first:"));
 let b = parseInt(prompt("Enter number second:"));
 if(a === b){
    console.log("Equal")
 } else if (a > b) {
     console.log(a, " is Greater:" , b )
 } else if ( a < b) {
    console.log( b,"is Greater:")
 }

//  let a = parseInt(prompt("Enter number first:"));
//  let b = parseInt(prompt("Enter number second:"));

if (a > b){
    console.log(a, "is Greater than", b);
} else if ( a < b) {
   console.log(a, "is smaller than", b);
} else {
    console.log(a, "is Equal to", b);
}

// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

let um = parseInt(prompt("Enter the firstnum"));
let be = parseInt(prompt("enter the secondnum"));

if(um > 20 && um < 29){
    console.log("Both numbers are positive");
} else if (um > 30 || um < 40){
    console.log("Atleast one number is positive")
} else {
    console.log("Both numbers are negative")
}

// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.
 let a = 20;
 let b = 30;

 console.log(a & c);

 console.log(a | b);

 console.log(a ^ b);

 console.log(~a);

 console.log(b << 2);

console.log(b >> 2);

console.log(b >>> 2);

// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

let ter1 = 29
let ter2 = 40 

ter2 > ter1 ? "First num" : "Second num";

console.log(ter1 > ter2 ? ter1 : ter2);

// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

console.log(typeof 10);

console.log(typeof "hello");

console.log(typeof true);

console.log(typeof null);

console.log(typeof undefined);

console.log(typeof [1, 2, 3]);

console.log(typeof { name: "Aman" });

console.log(typeof function () { });

//  new to see

console.log(typeof new Date());

console.log(typeof new Error());

// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

let firstname = "tejasvi";
let secondname = "choudhary";

console.log(firstname + secondname);

console.log(firstname += secondname);

// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.

let a;
console.log(typeof (a));  

let number = 1;
console.log(typeof (number));

let string = "hello";
console.log(typeof (string));

let x = {}
console.log(typeof (x));

let y = [];
console.log(typeof (y));

// Problem 10: Write a JavaScript program to use the in operator to check if a property exists in an object.

const student = {
    name : "tejasvi",
    age : 20,
   city : "dehradun",
};
console.log("name" in student);

console.log("age" in student);

console.log("city" in student);