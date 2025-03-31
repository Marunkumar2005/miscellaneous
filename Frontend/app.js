// function PersonMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`hi my  name is ${this.name}`);

//         },
//     };
//     return person;

// }
//new operator
//constructors
// function Person(name,age){
   
//         this.name=name;
//         this.age=age;
  
// }
// Person.prototype.talk=function(){
//     console.log(`hi ,my name is${name}`);
    
// }


// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     talk(){
//         console.log(`hi my name id ${name}`);

//     }
// }

// let p1=new Person("arun",63);
// let p2=new Person("vijar",33);


//inheritance

class Person{
    constructor(name,age){
        console.log("parent class constructor");

        this.name=name;
        this.age=age;

    }
    talk(){
        console.log(`hi my name is ${this.name}`);
        
    }
}

class Student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor");
      super(name,age);

        this.marks=marks;

    }
   
}

