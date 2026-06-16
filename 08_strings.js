const name = "banana"
const repoCount = 50

// console.log(name + repoCount + " Value") //outdated
//using back ticks ->string interpolation
// ${} is used as placeholder and just fill the variable name in this

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// another way to declare string

const gameName = new String('luckyju')
console.log(gameName) //object way to define string

console.log(gameName[0]) //to access the key value pair
console.log(gameName.__proto__) //to access the prototype
console.log(gameName.length) //access length of string
console.log(gameName.indexOf("kyj")) //we can find the starting index of a substring or index of particular letter also
console.log(gameName.indexOf("u",2)) //search for specific index ....starting from 2nd index
console.log(gameName.indexOf("u"))
console.log(name.length)
console.log(name.indexOf("na",3)) //search from specific substring starting from 3rd index(ban'a'na)
console.log(gameName.startsWith("luck")) //to check whether a string starts with a specific text-boolean output
console.log(gameName.startsWith("kyj", 3)) //starts with kyj starting from 3rd index
console.log(gameName.endsWith("ju")) //for ending specific text
console.log(gameName.includes("cky")) //to check whether a particular substring exists or not

//these operations dont change our original string*

console.log(gameName.toUpperCase()) //changes string to uppercase
console.log(gameName.charAt(5)) //to check the character at any index
console.log(gameName.substring(0,4)) //to get a substring that is starting from start but doesnot include end ->luck
console.log(gameName.substring(1)) //starts with index 1 till end
console.log(gameName.substring(6,2)) //if start>end js swaps the start and end - (2,6)
//substring dont use negative indices but slice do use it

console.log(gameName.slice(-5,-2))

//slice does not swaps the indices when start>end...
//strings are immutable...original string remains intact after operations

//trim...
//it trims the white spaces,tabs and line breaks at the start and end of the string

let str = "    Argentina    "
console.log(str.trim()) //trims end and start spaces

//replace
console.log(str.replace("tin","lon")) //it finds the first occurence of the exact substring and replaces it with the new one on the basis of separator
//it only replaces once

//split
//it breaks string into pieces and returns array
//for character split use empty string ""...
console.log(str.split(""))
let multiStr = "mango,apple,papaya"
console.log(multiStr.split(",",2)) //it gives only first two pieces of string after breaking into array...
//string converts one string to many strings inside an array

let myName = "my name is sumant kumar"
let breaks = myName.split(' ')
console.log(breaks[3]) //gives 3rd index element of array...

//charAt ->returns character at the index
console.log(name.charAt(1))
//at ->same as charAt but supports neg. indices also
console.log(name.at(-1))
//charCodeAt ->returns unicode value of character at the index
console.log(name.charCodeAt(1))
//repeat ->repeats the string n times
console.log("hi ".repeat(2))
//padstart and padend
console.log("5".padStart(4,"0")) //added padding in start 

//match-seaarh string using regular expressions and matches in array form

console.log("cat, rat, bat".match(/at/g)) //global search..it gives all matches in array form
console.log("i got 15 rank in 12 class".match(/\d+/g)) //to find all numbers in string
console.log("i love javascript".match(/javascript/))

//regex symbols
// \d => digit (0-9)
// \D => not a digit
// [abc] => a,b or c
// [a-z] => lowercase letters
// [A-Z] => uppercase letters
// [0-9] => digits
// + => one or more
// * => 0 or more
// ? => optional 
// g => global - it finds all existing matches
//* \d+ =>it matches the number sequence while \d matches the first number only
// we can find all the vowels using match in a string
// returns 'null' if match not found

//search
//it only returns the starting index of the matched text
//it also uses regex like match
// can we used like to find the index of first captical letter if any
//returns -1 if not found
console.log("i love javascript".search(/javascript/)) // index=7
//can be used to find first white space \s
console.log("hello world".search(/\s/))
//mostly it is used to find first position of a pattern

//search => where is it?
//match => what is it?






