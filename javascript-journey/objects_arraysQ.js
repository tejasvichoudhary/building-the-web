// Q1. Sum values in object arrays
  
let obj = { 
    food: [10, 20, 30],
    travel: [5, 15],
    bills: [40, 60]
};

let keys = Object.keys(obj);

let result = {};

for (let index = 0; index < keys.length; index++) {

    let key = keys[index];
    let element = obj[key];

    let total = 0;

    for (let i = 0; i < element.length; i++) {

        total += element[i];

    }

    result[key] = total;
}

// console.log(result);

// 2. Count word occurrences in array

let countword = ["apple", "banana", "apple", "orange", "banana", "apple"]

// { apple: 3, banana: 2, orange: 1 }

 
let obj = {}

for (let index = 0; index < countword.length; index++) {

    let currentWord = countword[index]

    if (currentWord in obj) {

        obj[currentWord]++

    } else {

        obj[currentWord] = 1

    }
}

console.log(obj)

// Q3. Swap keys and values of object

let swap = { a: "x", b: "y", c: "z" }

let object = Object.fromEntries(
    Object.entries(swap).map(([key, value]) => [value, key])
);
 
console.log(object)

// Two way of doing

// let object = {}

for (let key in swap) {
    let value = swap[key]
    object[value] = key
}

// Q4. Find the largest value key

let largest = { a: 10, b: 50, c: 20 }


let maxValue = object.value(largest)
let maxKey = object.key(largest)

for (let key in largest) {

    if (largest[key] > maxValue) {

        maxValue = largest[key];
        maxKey = key;
    }
}

console.log(maxKey);

// Q5.Flatten object of arrays into one array

 let flatten = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

let result = Object.values(flatten).flat()

console.log(result)

// Q6. Group people by city

let city = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

let group = {};

for (let index = 0; index < city.length; index++) {

    let element = city[index];

    if (!group[element.city]) {
        group[element.city] = [];
    }

    group[element.city].push(element.name);
}

console.log(group);

// Q7. Filter object by values > 50

 let filter = { a: 20, b: 60, c: 40, d: 90 };

let result = {};

let obje = Object.entries(filter);

for (let i = 0; i < obje.length; i++) {

    if (obje[i][1] > 50) {
        result[obje[i][0]] = obje[i][1];
    }

}

console.log(result);

// Q8. Find student with highest average mark

 let studentmarks = {
    A: [80, 90], 
    B: [70, 75, 85]
 }

let average = Object.entries(studentmarks)


let highest = 0;
let highestStudent = ""
 for (let index = 0; index < average.length; index++) {
    const element = average[index];
    let total = 0
    for (let i = 0; i < element.length; i++) {
       total+= element[i]
        
    }
    let avg = total / element.length
    if (avg > highest) {
    highest = avg
    highestStudent = element[0]
}

 }
 console.log(highestStudent)

//  Q9. Unique values across all object arrays

 let val = { 
    x: [1,2,3],
    y: [2,3,4], 
    z: [4,5]
     }

     let key = Object.values(val);

     let arr = []

    for (let index = 0; index < key.length; index++) {
        const element = key[index];
       for (let i = 0; i < element.length; i++) {
       if (!arr.includes(element[i])) {

            arr.push(element[i]);
        }
        
       }
    }
    console.log(arr);

    // Q10. Pick only given keys from object

    let object = { 
        name: "Rahul",
         age: 23,
         city: "Noida"
         }

    let keys = ["name", "city"];
    let obj = {};
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        obj[element] = object[element];
        
    }
    console.log(obj);

//    Q11. Find student with highest average marks

  let high =  { 
    A: [80, 90], 
    B: [70, 75, 85] 
}

let highest = Object.entries(high);
let highAverageStudent;
let highAverage = 0;

for (let index = 0; index < highest.length; index++) {
    const element = highest[index];
    let total = 0;

 for (let i = 0; i < element[1].length; i++) {
   total+= element[1][i];
    let average = total / element[1].length
   if (average > highAverage) {
    highAverage = average;
        highAverageStudent = element[0];
   }
    
 }
    
}

console.log(highAverageStudent);






    

   




    
 
 
