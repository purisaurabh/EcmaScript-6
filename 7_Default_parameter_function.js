/*
default function parameter allowed named parameters to be initialise woth default values 
if no or undefined is passed
*/


// multiply two number
/*
function mult(a , b) // this is the parameter
{
    console.log(a*b);
}

mult(4);// argument called which are in bracket
*/
//it gives the error if all the value are not given in the function


// in es6 


const mult = ( a , b = 4)  =>
{
    console.log(`the multiplication of two number is ${a*b}`);
}

mult(4);