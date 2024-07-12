
// The map function in JavaScript is used to transform elements of an array. It applies a callback function to each element of the array and returns a new array with the results of these transformations, without mutating the original array.


// let data=["Ram","Sam","Kumar","Sathya","Sasi","Raj"]

// console.log(data)
// // arrow fuction

// let dataval=data.map((item)=>{
//     return item + " good"
// })
// console.log(dataval)


let newdata=[10,20,30,40,50,60]

// arrow function
//=============================

// let finaladata=newdata.map((items)=>{
//    return items
// })
// console.log(finaladata)

// call back function
//=============================

// let newdatas=newdata.map(diplay)

// function diplay(items){
//     return items
// }
// console.log(newdatas)


// inline call back function 
//=============================
// let result =newdata.map(function(item){
//     return item
// })
// console.log(result)


// var marks=[41,25,48,36,78,90];

// let finalamark=marks.map((mark)=>{
//   var result= mark>=40? "true": "false"
//   return result
// })
// console.log(finalamark)

var data=[
    {
    firstName:"laksmi",
    lastName:"Saravanan",
   },
   {
    firstName:"Sudha",
    lastName:"Dinesh",
   },
   {
    firstName:"Sumathi",
    firstName:"Vengatesh"
   },

   {
    firstName:"Raji",
    firstName:"Saravanan"
   },
]
// console.log(data)

// var finaldata=data.map((item)=>{
//    return item.firstName
// })
// console.log(finaldata)


var val=data.map(dispaly)

function dispaly(item){
    // console.log(item)
    return `This is data from: ${item.firstName} `
}
console.log(val)