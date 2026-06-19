// if

// if (condition) {}     //if condition is true only then inside code executes
    
let temperature = 41

if (temperature < 50) {
    console.log(`temp less than 50`);
    
} else {
    `temp greater than 50`
}

const balance = 1000

if (balance < 500) console.log("test");    //implicit scope method

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else{
    console.log("greater than 1000");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false

if (userLoggedIn && debitCard) {          //if anyone condition is false in '&&' condition then code will not execute
    console.log("allow to buy course");
}

if (userLoggedIn || loggedInFromGoogle) {    //if anyone condn. is true in '||' condition then code execute
    console.log("user logged in from one device");
    
}

//break and continue =>loop control statement
//break => immediately exit the loop
//continue => skips the current iteration and moove to the next iteration

//switch case...
//we use break to break through the code when the aim is achieved
//if we dont use break here then after one case matches all the cases below that will be executed...
const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break; 
    default:
        console.log("wrong month");
        
        break;
}

//truthy and falsy values

const userEmail = "h@hitesh.ai"
if (userEmail) {                          //string value is assumed true value here 
    console.log("got user email");
} else {
    console.log("don't have user email");
    
}

//falsy values => false, 0, undefined, -0, BigInt 0n, ""(empty string), null, undefined, NaN

//truthy values => "0", "false", " ", [] (empty array), {} (empty object), function(){} (empty function)

let arr =[]
if (arr.length === 0) {
    console.log("array is empty");
    
}

const emptyobj =  {}

if (Object.keys(emptyobj).length === 0) {    //converts objects to array properties
    console.log("object is empty");
    
}

console.log(Object.keys(emptyobj))

//Nullish Coalescing Operator (??): null, undefined uses

let val1
// val1 = 5 ?? 10   //val1 takes 5
// val1 = null ?? 10    //here val1 takes 10 as value as a safety precaution for future
// val1 = undefined ?? 15   //here also val1 takes 15
val1 = null ?? 10 ?? 15    //it takes the first value it encounters

console.log(val1);

//ternary operator

//condition ? true : false

const iceTeaPrice = 100

iceTeaPrice>=80 ? console.log("greater than 80") : console.log("less than 80");




