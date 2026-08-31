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


