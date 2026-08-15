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
