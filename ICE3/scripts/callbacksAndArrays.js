/* ARRAYS */

// ARRAY CONSTRUCTOR
let j = new Array();
console.log(`Empty array: ${j}`);
j.push(45);
console.log(`Now array: ${j}`);

// with values
let k = new Array(10,20,30);
console.log(`3 elements: ${k}`);

// initialized with 1 element, then pushed more
let m = new Array(1);
console.log(`Array with: ${m}`);
m.push(30);
m.push(45);
m [0] = 1;
console.log(`Array with 3 element: ${m}`);

let r = new Array(10).fill("Friday!!");
console.log(`Array that's happy it's friday: ${r}`);

let s = [1,34,56,99];

function square(x){
    return x*x
}

let newS = s.map(function(val, index){
    return {key: index, value:square(val)};
});

console.log(newS);