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

 let num = 10;
 let num2 = 20;

 num = num2;
 console.log(num); // it will be 20 it will overwrite 10 in num.

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


