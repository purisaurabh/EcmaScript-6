// async / wait 
/*
    There is a special syntax to work with promises in a more confortable fashion
    called async/wait. It is surprisingly easy to understand and use

    The word 'async' before a function means one simple thing : a 
    function always returns a promise

    so the async keyword is added to function to tell them to return promises rather 
    than directly returning the value

    we can use await when any function that return a promise inclulding web api function

    The keyword await makes jf wait until that promise settle and return its result


    jbtak ek condtion satisfy na ho jaye tb tak function ko return mt kroo :- Asynchronous function

*/


const podj1 = new Promise( (resolve , reject) =>{
    setTimeout(() => {
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);
        // reject("Error while communication");
    }, 2000);
});
// the above is the first task



// then the second class is 
const get_bio_data = (index_data) =>{
    return new Promise ((resolve , reject) => {
        setTimeout((index_data) => {
            let bio_data = {
                name:'Puri',
                age:20
            }

            resolve(`My roll number is ${index_data} My name is ${bio_data.name} and I am ${bio_data.age} year old`)
        }, 2000 , index_data);
    });
}



// promise consume means get the output
/*
podj1.then((roll_no) =>{
    console.log(roll_no);
    return get_bio_data(roll_no[1])
}).then((canbe) =>{
    console.log(canbe);
}).catch((error) =>{
    console.log(error);
})
*/



// Insted of above we can write the below things using async and await

async function getData(){
    const  roll_no_data = await podj1;
    console.log(roll_no_data);

    const bio_datas = await get_bio_data(roll_no_data[1]);
    console.log(bio_datas);

    return bio_datas;
}

const getname = getData().then((myname) =>{
    console.log(myname);
});
