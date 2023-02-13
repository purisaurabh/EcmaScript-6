/*
    Call back are just the name of convention of using javascript function.
    There is not a special thing called a callback in the js.
    It is just a convention Instead of immediately returning some result
    like most function , functions that use callbacks take some time to produce a result
*/


/*
    The word asynchronous, async mean 'take some time' or 'happens in the future not right now'
    Usually callbacks only use when doing I/O eg downloading thing , reading files , 
    talking to databases
*/

const getRollNo = () => {
    setTimeout(() => {
        // first of all this timeout call execute
        console.log("API getting the roll number");
        let roll_no = [1 ,2 ,3 , 4, 5];
        console.log(roll_no);

        
        // second time this will execute
        setTimeout((rollno /* this gives the value 2 from roll no*/ ) => {

            const biodata = {
                name : 'Puri',
                age : 20
            }
            console.log(`My name is ${biodata.name} ans i am ${biodata.age} years old`);


            // this execute at third
            setTimeout((name) => {
                biodata.gender = 'Male';
                console.log(`My roll no is ${rollno} , My name is ${biodata.name} and i am ${biodata.age} year
                old I am ${biodata.gender}`);
                
            }, 2000 , biodata.name);

        }, 2000) , roll_no[1];
        
    }, 2000);
}


getRollNo();