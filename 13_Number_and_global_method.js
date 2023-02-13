/*
    First one id isFinite() Method
    The global isFinite() method return false if the argument is inFinite or NaN

    The second one is Is NaN method
    The Global isNaN() method return true if the argument is NaN. otherwise it false;

    Third one is isInteger() method
    THe Number isInteger() method return true if the argument is an Integer

*/


// all the integer gives  inFinite is true
let num = 5;
console.log(isFinite(num));


let number = 555;
console.log(Number.isFinite(num));




let a = 5;
console.log(isNaN(a));


let d = 5;
console.log(Number.isNaN(d));

let b = NaN;
console.log(isNaN(b));


let c = 'Plafn';
console.log(isNaN(c));




let e = 5;
console.log((Number.isInteger(e))); // true

let f= -2;
console.log((Number.isInteger(f))); // true

let t = 5.5;
console.log(NUmber.isInteger(t));