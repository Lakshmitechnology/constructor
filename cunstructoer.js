// In JavaScript, a constructor is a special method that is automatically called when an object is instantiated (created). It is used to initialize the object's state. Constructors are typically defined using the class syntax or as standalone functions. Here’s how constructors work in JavaScript:


function Person(first,last){
    this.firstName=first
    this.lastName=last
    this.getfullName=function(){
        return this.firstName +" "+ " "+this.lastName
    }
}

// const obj={
//     greet:function(){
//      console.log("hello")
//     }
// }
// obj?.greet()

// const anotherObj=null
// anotherObj?.greet()



const person=new Person("Saravanan","Venugopal")
const person1=new Person("Lakshmi","Saravanan")
// console.log(person)
// console.log(person1.getfullName())


var People=function (name,yearOfBirth,occupation){
    this.name=name
    this.yearOfBirth=yearOfBirth
    this.occupation=occupation
    // this.calculateAge=function(){
    //     var currentAge=new Date().getFullYear();
    //     var age=currentAge-this.yearOfBirth;
    //     console.log(age)
    // }

}
People.prototype.calculateAge=function(){
    var currentAge=new Date().getFullYear();
    console.log(currentAge)
    var age=currentAge-this.yearOfBirth;
    console.log(age)
}

People.prototype.city="Londone"

var lakhsmi=new People('lakshmi',1998,'developer')
var sudha=new People('Sudha',1992,'Nurscing Officer')
var sumathi=new People('sumathi',1991,'antoperoner')
console.log(lakhsmi)
console.log(lakhsmi.city)
console.log(sudha)
console.log(sumathi)
lakhsmi.calculateAge()
sudha.calculateAge()
sumathi.calculateAge()