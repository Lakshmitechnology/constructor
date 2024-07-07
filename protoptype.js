function Person(first,last){
    this.firstName=first;
    this.lastname=last;
    // this.getfullName=function(){
    //     return this.firstName +" " +this.lastname;

    // }
}
const person=new Person("Happy","Yamuna")
const person2=new Person("lakshmi","saravanan")


//get pull name

Person.prototype.getfullName=function(){
    return this.firstName +" "+ this.lastName;
}
console.log(person)
console.log(person2)


function People(name1, age1) {
    this.name = name1;
    this.age = age1;
}

// Adding a method to the prototype of Person
People.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating instances of Person
let people = new People('Alice', 30);
let people2 = new People('Bob', 25);

// Accessing the properties and prototype method
console.log(people); // Output: Alice
console.log(people2);  // Output: 25
people.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
people2.sayHello(); 