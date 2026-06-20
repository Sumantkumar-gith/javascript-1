//array specific loop

//for of loop

const arr =[1,2,3,4,5]

for (const num of arr) {     //forof loop just assumes the value from object like array and strings
    console.log(num);        //and iterates accordingly in that object and prints values itself
    
}

//maps  =>key,value pairs like objects
//enters values in form of array elements 
//we use map.size to check the length of map not map.lentgh
//we have map.key() and map.values()
//can iterate through elements easily
//keys can be any data type
//objects can also be set as keys here
//order is exactly preserved here
const map = new Map()
map.set("name", "lucky")
map.set("age", 31)
console.log(map);

console.log(map.keys());




for (const entry of map) {
    console.log(entry);
}

for (const [keys, values] of map) {
    console.log(keys, values);
}

const myObject  = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift:  'swift by apple'
}

//for...in loop =>mostly used to iterate through objects and arrays

for (const key in myObject) {
    console.log(key, ":", myObject[key]);
}

const programming =['js', 'python', 'cpp', 'java', 'rb' ]

for (const key in programming) {
    console.log(key, ':', programming[key]);
    
}

//for...each loop....=>it is roughly equivalent to...
// for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
// } 

//break is only for for,while and for...of
//forEach can mutate array but does not create new array

const coding = ['js', 'python', 'cpp', 'java', 'rb' ]

// coding.forEach( (nums, i, arr) => {      //a function to mutate array
//     arr[i] = nums * 2
    
// });

const number = [5,7,8,9,19]

number.forEach((nums,i,arr) => {     //forEach is a callback function
    arr.reverse()
})

console.log(number);

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach((nums, i, arr) => {
    console.log(nums.languageName);
    
    
}

)


