// Primitive
//call by value data types...

// 7 types: String, number, boolean, null(empty), undefined, symbol(for uniqueness), bigint
//examples...
const score = 100
const scoreValue = 100.3 //alsp number
const isLoggedIn = false
const outsideTemp = null //object datatype
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof id) //symbol data type

console.log(id == anotherId) //false as symbol data type is unique
const bigNumber = 432434345454545646n

//Reference type/ non-primitive
//reference can be allocated in memories...

//3: arrays, objects, functions--> all have datatype object
//arrays
const heros =["shaktiman", "batman", "spiderman"]
//objects
let myObj = {
   name: "lucky",
   age: 20
}
//function
const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction) //object function
console.log(typeof myObj) //object

//js is dynamically-typed language:variable types are determined at runtime....



