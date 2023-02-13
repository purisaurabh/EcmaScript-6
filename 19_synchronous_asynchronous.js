/*
    Synchronous Js : A synchronous request blocks the client until operations completes
    i.e. browsers is unresponsive 

    In such case js engine of the browser is blocked

    meadns ek kam khatam hone tal dusra kam nhi kr sakte

*/


/*
    Asynchronous is the AJAX web-Application Model 
    An asynchronous request does not block the client i.e. browser is responsive
    at that time user can perform another operation operation also

    in such case js engine the browser is not blocked

    hum mulitple kam ek sath kr sakte ho
*/



// This is the synchronous
const fun2 = () => {
    console.log("fun2 is starting");
}

const func1 = () =>{
    console.log("Fun1 is starting");
    fun2();
    console.log("Fun1 is ending");
}

func1();















// This is the asynchronous
const b = () =>{
    setTimeout( () => {
       console.log("This is the starting of b"); 
    } , 3000)
}

const a = () =>{
    console.log("This is the a");
    b();
    console.log("This is the ending of a");
}

// this gives output as
/*
    1. This is the a
    2.This is the ending of a
    // after the 3 sec
    3.This is the starting of b
*/



