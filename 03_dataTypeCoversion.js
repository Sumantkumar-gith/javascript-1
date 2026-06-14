let score = ""
console.log(typeof score); //or
console.log(typeof(score));
let valueinNumber = Number(score)
console.log(typeof valueinNumber)
console.log(valueinNumber)
// conversions
// "33" => 33 (type-number)
// "33abc" => NaN but type is number
// "" =>  0 (number)
// true => 1, false => 0 (type-number)
// null => 0 (type-number)

let isLoggedIn = ""
let booleanIsLoggedin = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedin)
console.log(booleanIsLoggedin)

// 1 => true, 0 => false
// "" => false 
// "lucky" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

// 33(number)  => 33(string)
