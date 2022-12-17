// THe destructuring syntax is the javascript expression that makes it possible to unpack values 
// from arrays or properties from objects into distinct values


// IN NORMAL JS
const arr = ['js' , 'cpp' , 'c' , 'java'];
/*
var top1 = arr[0];
var top2 = arr[1];
var top3 = arr[2];


console.log("My programming language is : " + top1);
console.log("My another programming language is : " + top2);
console.log("My also programming language is : " + top3);
*/

// IN ES6
// by using the array destructuring

let [top1 , top2 , top3 , top4 , top5] = arr;
console.log("My programming language is : " + top1);

console.log(`The length of the given arr is ${arr.length}`);

// if we have to get only the first and last value of the Array then
let [first,,,last] = arr;
console.log(`The first value is ${first} and the last value is ${last}`);


// by another way 
let first_value , second_value;
[first_value , second_value] = arr;

console.log(`The first programming language is ${first_value} and the second programming language is ${second_value}`)