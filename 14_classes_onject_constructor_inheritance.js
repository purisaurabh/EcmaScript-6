// Object is an instance of class

/*
    A class is a type of function but instead of using the keyword 
    function to initiate it , we ise the keyword class and the 
    properties are assigned inside a constructor() method
*/

/*
    A class is a user defined blueprint or prototype from which
    objects are created. It represent the set if properties or 
    methods are common to all objects of one type
*/


class Student{

    constructor(name , age , cls){
        this.myname = name;
        this.age = age;
        this.cls = cls;

    }


    // Instance methos
    biodata(){
        console.log(`This is the method and name is ${this.myname}`);
    }
}

// create the object
let obj1 = new Student('Puri' , 21 , 'BE');
obj1.biodata();




// Inheritance
class Player extends Student(){

}

// NOT Complete