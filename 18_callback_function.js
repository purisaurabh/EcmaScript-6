/*
    Any function that is passed as an argument is called a callback()
     function

    A callback() is a function that is to be executed after another function has 
    finished executing - hence the naem call back
*/


// This is the simple
const funA = () =>{
    console.log(`Welcome funA`);
}

const funB = () =>{
    console.log(`Welcome funB`);
}


funA(); // gives the welcome funA
funB(); // gives the welcome funB



const perOne = (friend , callfrnd) => {
    console.log(`I am busy right now , I am taking to ${friend}. I will call you back`);
    callfrnd();
}

const perTwo = () => {
    console.log(`I called you`);
}


perOne('Puri' , perTwo);