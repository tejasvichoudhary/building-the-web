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

console.log(result);