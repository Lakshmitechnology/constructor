class Person {
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;

    }
    greet(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }
}

const person=new Person(" Lakshmi","Yamuna")
console.log(person)


class Cutsomer extends Person{
    constructor(firstName,lastName,phone,membership){
        super(firstName,lastName)
        this.phone=phone
        this.membership=membership

    }
    greet(){
        return `Hello there ${this.firstName} ${this.lastName} Welcome to our team `
    }
}

const cutsomerservice=new Cutsomer("Sudha","Sravanan",8936354579,"Standed")
console.log(cutsomerservice.greet())