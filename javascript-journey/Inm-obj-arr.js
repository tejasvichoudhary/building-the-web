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