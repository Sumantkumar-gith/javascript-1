//arrays are objects
//elements in array can be number,string or boolean...
// empty array => let arr = []
//js array is resizable
//arrays indexing start from 0
//arrays stored in heap means if we create a copy of original array and make changes in it....changes
// will be reflected in original array (shallow copies->copy of an object that shares the same reference)

const myArr = [0, 1, 2, 6, 'hitesh', true]
console.log(myArr[4]);
//or...
const myArr1 = new Array("yuvraj", "anushka", "shreya", "bhumika")
console.log(myArr1.length);
myArr1.push("priyanshi")
console.log(myArr1);
//if we access an exceding index then output is undefined...

let arr = [10,5,8,7,23,11]

arr.push(5) //pushes 5 in the end....it mutates array...
arr.pop() //pops last element from end...mutates array
arr.unshift(0) //adds at the beginning...mutates array
arr.shift() //pops from the beginning...mutates array
console.log(arr);
console.log(arr.includes(9)); //check if a element exist or not-any data type
console.log(arr.indexOf(9)); //to check index of element(if not found then -1)
// console.log(myArr1.includes('yuvraj'));
console.log(arr.join("")); //joins element of array into a string...don't mutates array

//slice and splice
//slice does not mutates array
//splice mutates array

console.log(arr.slice(1,4)); //includes start but excludes end element -> 5,8,7

console.log(arr.splice(2, 1, 100)) //splice => splice(startindex, delete count, new1, new2,....)
//splice used to edit elements - remove, insert, replace
//here element at index no. 2 is deleted and new element 100 is inserted at that place
console.log(arr);

console.log(arr.concat(myArr)) //merges two arrays but doesnot mutates the array
console.log(arr);

let newArr = [...arr, ...myArr] //spread operator makes copy of array and used to merge two arrays
console.log(newArr);

let anotherArr = [1, 2, 3, 4, 5, [6, 4, 8], [7, 2, [4,9]]]
console.log(anotherArr[6][2][1]) //accessing elements

let realAnotherArr = anotherArr.flat(1) //returns a new array with all subarrays concatenated into it
//the number in flat is the depth till which you to concatenate the subarrays in main array....
// we can use infinity in it if we need all subarrays to concat...
console.log(realAnotherArr);

console.log(Array.isArray('lucky')) //array constructor used to check whether is an array and convert to an array 
console.log(Array.from('lucky')) //converts array from any data type

let myObject ={
    name: 'lucky',
    class: 12,
    age: 19
}
console.log(Array.from(Object.entries(myObject))); //interesting  for object conversion to array
 let s1 = 100
 let s2 = 98
 let s3 =97
 console.log(Array.of(s1, s2, s3)) //converts array from different variables -> creates new array
 console.log(Array.of(5)) //this creates an array of one element ->[5]
console.log(Array(5)) //this creates an array of length 5

//sort

console.log(arr.sort()) //it treats array values as strings and sort like that
console.log(arr) //sort mutates the original array

console.log(arr.sort((a,b)=> a-b)) //numeric sort (ascending) if a-b is then it does not swaps 
// but if a-b is positive then it swaps

console.log(arr.sort((a,b)=> b-a)) //descending numeric sort

console.log(arr.reverse()) //reverse an array...also mutates the array















