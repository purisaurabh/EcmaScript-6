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



// Instead of above we can write the below things using async and await

async function getData(){
    try{
        const  roll_no_data = await podj1;
        console.log(roll_no_data);

        const bio_datas = await get_bio_data(roll_no_data[1]);
        console.log(bio_datas);

        return bio_datas;
    }catch(error){
        console.log(`The Error : ${error}`);
    }
}

const getname = getData().then((myname) =>{
    console.log(myname);
});



// try catch is used to simplify the understanding the error
