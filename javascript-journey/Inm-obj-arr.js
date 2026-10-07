// Q1.Sum all transactions per user
// { A: 150, B: 200 }

let arr = [
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 }
];

let obj = {};

for (let i = 0; i < arr.length; i++) {

    const element = arr[i];

    if (!obj[element.user]) {
        obj[element.user] = element.amount;
    } else {
        obj[element.user] += element.amount;
    }
}

console.log(obj);

// Q2. Transform API response to object (id → name)
// { 1: "Alice", 2: "Bob" }

let arr1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

let obj1 = {};

for (let i = 0; i < arr1.length; i++) {

    const element = arr1[i];

    obj1[element.id] = element.name;
}

console.log(obj1);

// Q3.Remove falsy values from object
// { c: "hello", e: 5 }


let object ={ 
    a: 0,
    b: null,
    c: "hello",
    d: undefined,
    e: 5
}

let arr2 = Object.entries(object)
obj2 = {};

for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (element[1]) {
         obj2[element[0]] = element[1]; 
    }
}
console.log(obj2);

// Q4.Check for permissions from roles 
// false

let roles = {
    admin: ["read", "write"],
    user: ["read"],
    staff: ["write"]
};

let checkRole = "user";
let action = "write";

console.log(roles[checkRole].includes(action));

// Q5. Transform array of orders into revenue per category
// { electronics: 300, clothes: 50 }

let arr3 = [
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "clothes", price: 50 },
    { id: 3, category: "electronics", price: 200 }
];

let obj3 = {};

for (let i = 0; i < arr3.length; i++) {

    const element = arr3[i];

    if (!obj3[element.category]) {
        obj3[element.category] = element.price;
    } else {
        obj3[element.category] += element.price;
    }
}

console.log(obj3);

// Q6. Remove duplicate objects by id
// [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ]



let arr4 = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A" }
];

let arry = [];
let result = [];

for (let i = 0; i < arr4.length; i++) {

    const element = arr4[i];

    if (!arry.includes(element.id)) {

        result.push(element);
        arry.push(element.id);

    }
}

console.log(result);

// Q7. Chunk object entries into groups of size

let obj4 = { a: 1, b: 2, c: 3, d: 4 }
//  size = 2
// [ [["a",1],["b",2]], [["c",3],["d",4]] ]


let arr5 = Object.entries(obj4)
let array1 = []

for (let i = 0; i < arr5.length; i += 2) {
    const element = arr5[i]
    const second = arr5[i + 1]

    array1.push([element, second])
}

console.log(array1)

// Q7i. Find longest string among object values


let obj6 = { a: "apple", b: "banana", c: "kiwi" }

let long = 0;
let longest = "";

for (let i = 0; i < arrr.length; i++) {
    const element = arrr[i];

    if (element.length > long) {
        long = element.length;
        longest = element;
    }
}

console.log(longest);

