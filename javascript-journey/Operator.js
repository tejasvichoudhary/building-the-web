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

