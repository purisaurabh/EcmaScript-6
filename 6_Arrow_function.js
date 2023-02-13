// this function is also called as fat arrow function


// let consider old javascript
var sum = function()
{
    var a = 5;
    var b = 6;

    return a+b;
}

console.log(sum());



// in modern javascript

const a_sum = () =>{
    let a = 1;
    let b = 2;
    return a + b;
}

console.log(a_sum());


// in also
const sum = (q , b) => a+b;
console.log(sum(25 , 20));