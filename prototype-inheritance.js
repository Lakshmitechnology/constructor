function Person(job,age){
    this.JobTile=job
    this.age=age
}
Person.prototype.greeting=function(){
    return `My Job Title ${this.JobTile} and My age is ${this.age}`
}
const profile=new Person("FrontEnd Developer",28)
console.log(profile)


// cutsomer object

function Cutsomer(firstName,lastName,membership,phone){
    this.firstName
}