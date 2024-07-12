
//forEach Method:
//forEach is used to iterate over each element of an array and execute a provided callback function once for each array element.

// Executes the provided callback function for each element in the array.
// Does not return a new array or modify the original array (the callback function cannot return a value that will affect the iteration).

// Map

// map is used to iterate over each element of an array and create a new array populated with the results of calling a provided function on every element in the calling array.

// Does not modify the original array.

var data=[10,20,30,40,50,60]

var result=data.forEach((value)=>{
  return value
})

console.log(result)



var datas=data.map((info)=>{
//   console.log(info)
return info
})
console.log(datas)

let objdata=[
    {name:'iphone',price:50000},
    {name:'samsung',price:15000},
    {name:'oppo',price:30000},
    {name:'Moto',price:20000}
]
// objdata.forEach((objval)=>{
//   console.log(objval.price)

// })
var items=objdata.map((item)=>{
return item.price*2
   
})
console.log(items)