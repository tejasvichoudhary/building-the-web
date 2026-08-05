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

const time = 6;

if (time >= 0 && time < 12) {
    console.log("Good morning India")
} else if (time >= 12 && time < 16 ) {
    console.log("Good afternoon India")
}else if (time >= 16 && time < 20 ) {
    console.log("Good afternoon India")
}   else if (time >= 20 && time <= 24) {
    console.log("Good night india")
} else {
    console.log("invalid time")
}
   
 