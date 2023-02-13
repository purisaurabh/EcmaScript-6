/*
    promised are used to handle asynchronous operation in javascript
    They are easy to manage when dealing with multiple asynchronous operation where
    callbacks cam create callback hell leading to unnamagable code
*/

/*
    A Promise is an object that keep track about whether a certain 
    event has happened already or not
*/

/*
    Determines what happens after the events has happened
*/

// to reduce the callback hell or write the simplified code of call back hell we can use the promises





/*
tasks

1: after 2sec we get roll Number
2: after that 2 sec we get the name age
*/

// there are two ways to write promises first one is promises constructor
// another one is promises as a object


// object of promise 
// use executor

// this is the promise produce
                        // executor
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
podj1.then((roll_no) =>{
    console.log(roll_no);
    return get_bio_data(roll_no[1])
}).then((canbe) =>{
    console.log(canbe);
}).catch((error) =>{
    console.log(error);
})
