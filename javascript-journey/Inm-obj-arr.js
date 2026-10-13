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

// Q8. Convert the object where languages are the top-level keys, and inside each are translation strings by key into an object where translation keys are the top-level keys, and inside each you store values per language [HARD**]

let objs = {
  en: { 
    hello: "Hello",
    bye: "Goodbye"
     },
  fr: {
     hello: "Bonjour",
     bye: "Au revoir" },
  es: 
  { hello: "Hola" }
}

// {
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }

let myarr = Object.entries(objs)

let myobj = {}

for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];

    let myarr1 = Object.entries(element[1]);

    for (let j = 0; j < myarr1.length; j++) {
        const item = myarr1[j];

        if (!myobj[item[0]]) {
            myobj[item[0]] = {};
        }
        myobj[item[0]][element[0]] = item[1];
    }
}

console.log(myobj);

// Q9. Build index of ids grouped by category

let objs = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]

// { fruit: [1,3], veggie: [2] }

let myobj = {}

for (let i = 0; i < objs.length; i++) {
    const element = objs[i];

        if (!myobj[element.category]) {
        myobj[element.category] = [];
}
myobj[element.category].push(element.id);
    
    }

console.log(myobj);

// Q10. Remove deeply nested key from object 

let myobject = { a: { b: { c: 1, d: 2 } } } 
// remove "c"

// { a: { b: { d: 2 } } }

    delete objs.a.b.c;

    console.log(objs)

    // Q11. Check if two objects are deeply equal

    
let myobjects = { a: { x: 1, y: 2 } };
let myobjects1 = { a: { x: 1, y: 2 } };

let arr = Object.entries(myobjects);
let arr1 = Object.entries(myobjects1);

let result = true;

if (arr.length !== arr1.length) {
    result = false;
}

for (let i = 0; i < arr.length && result; i++) {
    if (arr[i][0] !== arr1[i][0]) {
        result = false;
        break;
    }

    let nested = Object.entries(arr[i][1]);
    let nested1 = Object.entries(arr1[i][1]);

    if (nested.length !== nested1.length) {
        result = false;
        break;
    }

    for (let j = 0; j < nested.length; j++) {
        if (
            nested[j][0] !== nested1[j][0] ||
            nested[j][1] !== nested1[j][1]
        ) {
            result = false;
            break;
        }
    }
}

console.log(result)

// Q12. Deep flatten nested arrays inside object

let arrismy = { a: [1, [2, [3]]], b: [4, [5]] }

// { a: [1,2,3], b: [4,5] }

let conv = Object.entries(arrismy)
let objec = {}

for (let i = 0; i < conv.length; i++) {
    const element = conv[i];

   objec[element[0]] = element[1].flat(Infinity)}
console.log(objec);

// Q13. Find most repeated word across categories

let fruobj = { 
    fruits: ["apple","apple","banana"],
    drinks: ["apple","tea"] 
    }

    // apple

let arrfru = Object.entries(fruobj)
let frequency = {};
 
for (let i = 0; i < arrfru.length; i++) {
    const element = arrfru[i];

    for (let j = 0; j < element[1].length; j++) {
       const item = element[1][j];
           frequency[item] = (frequency[item] || 0) + 1;
        }
    }
    let fre = Object.entries(frequency)
    let maxcount = 0;
    let srt = ""
    for(i = 0; i < fre.length; i++){
        if (fre[i][1] > maxcount) {
        maxcount = fre[i][1];
        str = fre[i][0];
    }
}

console.log(str);

// Q14. Find intersection of all arrays in object 

let allobj = { a: [1,2,3], b: [2,3,4], c: [3,4,5] }

// [3]

let allarr = Object.values(allobj);
let emptyarr = []

for (let i = 0; i < allarr.length; i++) {
    const element = allarr[i];
    for (let j = 0; j < element.length; j++) {
        const item = element[j];
        if (
    allarr[0].includes(item) &&
    allarr[1].includes(item) &&
    allarr[2].includes(item)
) {
    if (!emptyarr.includes(item)) {
   emptyarr.push(item);
}
 }
  }
   }

console.log(emptyarr);

// Q15. Deep merge two nested objects

let objone = {a: { x: 1, y: 2 } }
let onjtwo = { a: { y: 3, z: 4 } }

// { a: { x: 1, y: 3, z: 4 } }

let result = {
    a: {
        ...objone.a,
        ...objtwo.a
    }
};
console.log(result);

// Q16. Nested object destructuring

let multobj = { user: { profile: { name: "Alice", age: 25 } } }

// Alice 25

let {
    user: {
        profile: { name, age }
    }
} = multobj;

console.log(name); 
console.log(age);  

// Q17. Find top N keys by value

let twoobj= { a: 10, b: 50, c: 30, d: 40 }
//  N=2
// ["b","d"]

let arr = Object.entries(twoobj);

let first = -Infinity;
let second = -Infinity;
let firstKey;
let secondKey;

for (let i = 0; i < arr.length; i++) {
    let key = arr[i][0];
    let value = arr[i][1];

    if (value > first) {
        second = first;
        secondKey = firstKey;

        first = value;
        firstKey = key;
    } else if (value > second) {
        second = value;
        secondKey = key;
    }
}

console.log([firstKey, secondKey]);