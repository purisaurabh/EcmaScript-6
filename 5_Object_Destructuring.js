const bio_data = {
    name:'Saurabh',
    age:21,
    deg:'BE'
}

// object destructuring
let {name , age , deg} = bio_data;

console.log(`My name is ${name} My age is ${age} and the qualification is ${deg}`);

console.log(`My name is ${bio_data.name}`);


