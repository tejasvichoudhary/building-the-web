// Questions-1 Print all elements const arr = [10, 20, 30, 40, 50] for loop se print kar.

const arr = [10, 20, 30, 40, 50,];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
    
}
// Q2. Find the sum of all elements const arr = [10, 20, 30, 40, 50] sum variable + loop.

const array = [10, 20, 30, 40, 50]
let element = 0;

for(let index = 0 ; index < array.length; index++){
     element = element + array[index];
    
}
console.log(element);

// Q3. Find the largest number const arr = [12, 45, 7, 89, 23] Array traverse karke largest find kar.

const myarr = [12, 45, 7, 89, 23];
let largest = myarr[1]

for (let index = 0; index < myarr.length; index++) {
    
    if (myarr[index] > largest)
        largest = myarr[index]

}

console.log(largest)

// Q4 = Smallest number find karna const myarr = [12, 45, 7, 89, 23] . find smallest .

const myarray = [12, 45, 7, 89, 23];
let smallest = myarray[1]

for (let index = 0; index < myarray.length; index++) {
    
    if (myarray[index] < smallest)
        smallest = myarray[index]

}
console.log(smallest)

// Q5 — Count Even and Odd Numbersconst myarray = [1, 2, 3, 4, 5, 6, 7, 8] find odd and even.

let arry = [1, 2, 3, 4, 5, 6, 7, 8];

let odd = 0;
let even = 0;

for (let index = 0; index < arry.length; index++) {
  if (arry[index] % 2 === 0){
    even += 1   
} else {
    odd += 1
}
}

console.log(even)
console.log(even)

// Q6 — Reverse an Array const arr = [1, 2, 3, 4, 5].

const array1 = [1, 2, 3, 4, 5];

for (let index = array1.length - 1; index >= 0; index--) {
    const element = array1[index];
    console.log(element)
    
}

// Q7 — Search an Element const arr = [10, 20, 30, 40, 50].

 const ar = [10, 20, 30, 40, 50];

let target = 30;

for (let index = 0; index < ar.length; index++) {
     if (target === ar[index])
    console.log(target)
}

// Q8 — Second Largest Number const arr = [10, 40, 20, 50, 30].

const arrr = [10, 40, 20, 50, 30];

let largestn = arrr[0];
    let secondlargest = arrr[0];

for(let index = 0; index < arrr.length; index++ ){

    if (arrr[index] > largestn) {
       secondlargest = largestn;
        largestn = arrr[index];
    }
}
console.log(secondlargest)


// Q9 — Remove Duplicate Elements const arr = [1, 2, 2, 3, 4, 4, 5].

const ary = [1, 2 ,2, 3, 4, 4, 5];

let unique = [];

for (let index = 0; index < ary.length; index++) {
   unique.includes(ary[index])
   if (unique.includes(ary[index]) === false )
    unique.push(ary[index])
    
}
console.log(unique);

// Q10 — Positive aur Negative Numbers ko separate karo const arr = [-2, 5, -7, 8, -1, 4].

const aryy = [-2, 5, -7, 8, -1, 4];

let positive = [];
let negative = [];

for (let index = 0; index < aryy.length; index++) {
    if(aryy[index] >= 0){
        positive.push(aryy[index])
    } {
        negative.push(aryy[index])
    }
    
}

console.log(positive);
console.log(negative);






