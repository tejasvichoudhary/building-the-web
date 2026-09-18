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

