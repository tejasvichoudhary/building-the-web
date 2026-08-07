// Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

const x = 10;  

 if (x > 10) {
    console.log("x is greater then 10");
 } else {
    console.log("x is not greater than 10");
 }
 //    Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

 const useAge = 18;

 if(useAge => 18){
    console.log("illegible for drive a car")
 } else {
    console.log("Not illegaible for drive a car")
 } 

// Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

const  marks = 60;

if(marks >= 90 && marks <= 100){
 console.log("assign the grade A")
} else if(marks >= 80 && marks <= 89){
    console.log("assign the grade B")
} else if(marks >= 70 && marks <= 79){
    console.log("assign the grade C")
} else if(marks >= 60 && marks <= 69){
    console.log("assign the grade D")
} else if(marks >= 50 && marks <= 59){
    console.log("assign the grade D")
} else {
     console.log("assign the grade F")
}
if(marks >= 90 && marks <= 100) console.log("A");
else if (marks >= 80 && marks <= 89) console.log("B");
else if(marks >= 70 && marks <= 79) console.log("C");
else if(marks >= 60 && marks <= 69) console.log("D")
else if(marks >= 50 && marks <= 59) console.log("E");
else if (marks <= 50) console.log("F");

// Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

// first way
const time = 6;

if (time >= 0 && time < 12) {
    console.log("Good morning India")
} else if (time >= 12 && time < 16 ) {
    console.log("Good afternoon India")
}else if (time >= 16 && time < 20 ) {
    console.log("Good Evening India")
}   else if (time >= 20 && time <= 24) {
    console.log("Good night india")
} else {
    console.log("invalid time")
}
    // second way 
    if (time >= 0 && time < 12)  console.log("Good morning India");
    else if (time >= 12 && time < 16 ) console.log("Good afternoon India");
    else if (time >= 16 && time < 20) console.log("Good nignt india");
    else if (time >= 20 && time <= 24) console.log("Good night india");
    else console.log("Invalid Time");

    // Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

    const day = 3;

    switch (day) {
        case 1:
           console.log("Sunday") 
            break;
        case 2:
            console.log("Monday")    
            break;
        case 3:
            console.log("Tuesday")    
            break;
         case 4:
            console.log("Wednesday")    
            break; 
            case 5:
            console.log("Thursday")    
            break;  
            case 6:
            console.log("Friday")    
            break;  
            case 7:
            console.log("Saturday")    
            break;    
        default:
            console.log("Invalid Day")
            break;
    }
    // Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

    const Month = 2;

    switch(Month){
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("Feburary");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;
        default:
            console.log("Invalid Month");
            break;  
    }
    // Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

    let fruit = "apple";
   
    switch(fruit){
        case "apple":
            console.log("apple");
            break;  
            case "mango":
            console.log("mango");
            break; 
            case "banana":
            console.log("banana");
            break; 
            default:
                console.log("Invalid Fruit")      
        }
    // Question-8:   WAP to categorize a given temperature into "low," "medium," or "high" ranges.

    const temperature = 20;

    if(temperature >= 0 && temperature <= 50){
        console.log("it is low");
    } else if (temperature >= 51 && temperature <= 90 ){
        console.log("it is medium");
    } else if (temperature >= 91 && temperature <= 120){
        console.log("it is high");
    } else {
        console.log("Invalid temperature");
    }

    // Question-9:   WAP that classifies a number as positive, negative, even, or odd.

    const classifiesnumber = 3;
    
    if (classifiesnumber < 0 && classifiesnumber % 2 == 0){
        console.log("Negitive and even")
    } else if (classifiesnumber >= 0 && classifiesnumber % 2 == 0 ){
        console.log("positive and even")
    } else  if (classifiesnumber < 0 && classifiesnumber % 2 == -1){
        console.log("negitive and odd")
    }else if (classifiesnumber >= 0 && classifiesnumber % 2 == 1 ){
        console.log("positive and odd")
    } else {
            console.log("Invalid number")
    }
      // Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

      const user = "abc";

      if (user.length < 6){
        console.log("Username too short")
      } else if ( user.length > 15 ){
        console.log("User too long")
      } else {
        console.log("Username accepted")
      }

