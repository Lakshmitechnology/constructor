
//Number 
const num=5
const num1=new Number(3)

const str="I love webdeveloper"
const str1=new String("I have find newjob")
console.log(str1)


// function
const fun=function(x,y){
    return x+y
}
console.log(fun(2,5))


const fun2=new Function("x","y","return x+y")
console.log(fun2(10,5))

// Object

const obj={
    name:"Lakshmi"
}
const obj2=new Object({name:"sravanan"})


// array
console.log(obj)
console.log(obj2.name)

const arr=[1,2,3,4,5,6]
console.log(arr)
const arr2=new Array(10,20,30,40,50)
// arr2.push(...arr)
console.log(arr2)

// console.log(arr2)
// let arr=['a','b','c',];
// arr.push(...'de')
// console.log(arr)