// Q1. Create an object named student containing name, age, and course properties. Print all the properties and their values.

let student = {
    name:"tejasvi",
    age:19,
    course: "JavaScript",
};

console.log(student.name);
console.log(student.age);
console.log(student.course);

// Q2. Create an object named user containing name, age, and city. Access and print the values using both dot notation and bracket notation.

let user = {
    name: "aman",
    age: 19,
    city: "dehradun"
}
console.log(user.name);
console.log(user.age);
console.log(user.city);

console.log(user["name"])
console.log(user["age"])
console.log(user["city"])

// Q3. Given an object containing brand, model, and year, add a new property, update an existing property, and delete one property. Print the final object.

const car = {
    brand: "BMW",
    model: "M4",
    year: 2024,
};
car.brand = "maruti";
car.year = 2025;
delete car.model;
car.color = "black";

console.log(car)

// Q4. Given an object containing four properties, print all the keys of the object using a loop.

const obj = {
    name: "Rahul",
    age: 20,
    city: "Delhi",
    course: "JavaScript"
};

let keys = Object.keys(obj);

for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    console.log(element)
    
}

// Q5. Given an object containing different properties, print each key along with its value using a loop.

const usser = {
    name: "Aman",
    age: 21,
    city: "Delhi",
    course: "JavaScript"
};

let keyss = Object.keys(usser);

for (let index = 0; index < keyss.length; index++) {
    const element = keyss[index];

    console.log( element, ":" ,usser[element])
    
}

// Q6. Given an object containing marks of three subjects, calculate and print the total marks.

const marks = {
    maths: 80,
    physics: 75,
    chemistry: 90
};

let val = object.values(marks);
let total = 0;

for (let index = 0; index < val.length; index++) {
    const element = val[index];
    total += val[index]
    
}
console.log(total)


// Q7. Given an object containing marks of multiple subjects, find and print the subject with the highest marks and its marks.

const maarks = {
    maths: 80,
    physics: 95,
    chemistry: 88,
    english: 72
};

let key = Object.keys(maarks);
let highest = 0;
let highestsubject = "";

for (let index = 0; index < key.length; index++) {
    const element = key[index];                         
    if (maarks[element] > highest ) {
        highest = maarks[element];
        highestsubject = element;
    } 
    
}
console.log(highestsubject)
console.log(highest)

// Q8. Given an object containing name, age, and city, check whether a property named email exists in the object.

const userr = {
    name: "Aman",
    age: 21,
    city: "Delhi",
    course: "JavaScript"
};

// Q9. Create an object containing a student's name, age, and an array of subjects. Access the array, print one subject, and modify one subject in the array.

// Q10. Given an array of student objects, where each student has a name and marks, find and print the student who has the highest marks.


