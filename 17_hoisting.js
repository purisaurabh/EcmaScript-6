/*
    Hoisting is a Javascript mechanism where variables and function declarations are moves 
    to the top of their scope before the code execution
*/


// Function Hoisting

{
    //function calling
    sum(5,5);

    // function define or declaration 
    function sum(a , b)
    {
        add = a+b;
        console.log(add);
    }

}

// This is called hoisting


/*
    In function expression and arrow function hoisting is not worked 
*/


// Variable Hoisting


// this gives output undefined
console.log(a);
var a = 20;


// this also gives the undefined
var b = undefined;
console.log(b);
b = 10