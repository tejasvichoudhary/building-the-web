// Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.
// What I solve
let distanceInkilometer = 100; 

 let meter = distanceInkilometer * 1000;
 console.log(meter);

 let centimeter = meter * 100
 console.log(centimeter);

 // What I learn 

 const distanceInkilometer = 10;

 const convertIntometer = (distanceInkilometer) =>{
    return distanceInkilometer * 1000;
 }
 const convertIncentimeter = (distanceInkilometer) =>{
    return distanceInkilometer * 100000;
 }
 console.log(`Convert into meter: ${convertIntometer(ditanceInkilometer)}`);
 console.log(`Convert into centimeter: ${convertIncentimeter(distanceInkilometer)}`)

// Question-2:    WAP to input radius of a circle and log the area of circle.
 
// Good for one radius

const radiusOFcircle = 5;
const area = Math.PI * radiusOFcircle * radiusOFcircle
console.log(area)

// if there is multiple radius to find

const radiusOFcircle = 10;

const calculateCircleArea = (radiusOFcircle) => {
   return  Math.PI * radiusOFcircle ** 2 
}
console.log(`Area of Circle: ${calculateCircleArea(radiusOFcircle)}`)

// Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

const firstnumber = 30;
const secondnumber = 20;

const  multiply = (firstnumber,secondnumber ) =>{
   return firstnumber * secondnumber 
}
const add = (firstnumber,secondnumber ) =>{
   return firstnumber + secondnumber 
}
const subtract= (firstnumber,secondnumber ) =>{
   return firstnumber - secondnumber 
} 
const divide = (firstnumber,secondnumber ) =>{
   return firstnumber / secondnumber  
}
console.log(`Multiplication: ${multiply(firstnumber,secondnumber )}`)
console.log(`Addition: ${add (firstnumber,secondnumber )}`)
console.log(`Subtraction: : ${subtract(firstnumber,secondnumber )}`)
console.log(`Division: ${divide(firstnumber,secondnumber )}`)

// Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

const firstSubjectMarks = 80;
const secondSubjectMarks = 90;

const totalMarks = (firstSubjectMarks, secondSubjectMarks) => {
    return firstSubjectMarks + secondSubjectMarks;
}

const percentage = (firstSubjectMarks, secondSubjectMarks) => {
    return (totalMarks(firstSubjectMarks, secondSubjectMarks) / 200) * 100;
}

console.log(`Total Marks: ${totalMarks(firstSubjectMarks, secondSubjectMarks)}`);
console.log(`Percentage: ${percentage(firstSubjectMarks, secondSubjectMarks)}`);

// Question-5:    WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

const lengthofrectangle = 20;
const breathofrectangle = 30;


const areaofrectangle = (lengthofrectangle,breathofrectangle) =>{
   return lengthofrectangle * breathofrectangle
}
const parimeterofrectangle = (lengthofrectangle,breathofrectangle) =>{
   return 2 * (lengthofrectangle + breathofrectangle )
}

console.log(`Area of rectangle : ${areaofrectangle(lengthofrectangle,breathofrectangle)}`)
console.log(`Parimeter of rectangle : ${parimeterofrectangle(lengthofrectangle,breathofrectangle)}`)

// Question-6:    WAP to input n numbers and log the average of those number.

// Beginner  code
const numbers = [10,40,40,60,80,90];

const average = (numbers) =>{
   let sum = 0;
   for(let i= 0; i < numbers.length; i++){
      sum = sum + numbers.length[i];
   }
   return sum / numbers.length;
}
// Professional code
const average = (numbers) => {
   let sum = 0;
   numbers.forEach(number => {
    sum += number 
   })
   return sum / numbers.length;
}
// Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

