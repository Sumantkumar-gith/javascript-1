obj1 = {
    name: "lucky",
    greeting: function(){
        console.log("hello");
        
    }
}
console.log(Object.keys(obj1));
// obj1["greeting"]
obj1.greeting() //accessing functions from object
//or
console.log(obj1.greeting()) //it is also calls the function but the function does not returns anything thats why 
//it implicitly also returns undefined

//if we obj1.greeting =>it refers to the reference of the function if we want to execute the function 
//then we should write obj1.greeting()

function addTwoNumbers(a,b){   //function to add two numbers->we have to pass arguments in ()...to get a return output
    return a+b 
    console.log(a+b);  //this is unreachable code for function as return is already executed above so the function does not reach this line
}

// console.log(addTwoNumbers(124,456)) //executes function and gives output(also implicitly gives undefined)
const result = addTwoNumbers(124,248) //only executes function but doesnot gives output
//if we add a condition to arguments and it doesn't satisfies it then it gives undefined output
//what we set in the function are called parameter and what we pass in the function are called arguments
console.log(result); //we to have return the output in the fuction to get a value here

function loginUSerMessage(username){
    if(username === undefined){            //or we can write if(!username) => it means (undefined means false)=>so if username is undefined then it is false so we make it true by saying (!username) which is true and the code enters if statement...
        console.log("please enter username"); 
        return
    }
    return `${username} just logged in`
}

const message = loginUSerMessage() //here we  can directly do console.log or first store in a variable and then do console.log to print the result
console.log(message);

function loginUser4(username = "lucky"){  //we can also give value to the parameter here so if we don't pass a argument this value will be passed then
    return `${username} logged in`
}
console.log(loginUser4());

//shopping e-cart

function calculateCartPrice(val1, val2, ...num1){  //rest operator ->it collects all values and pack it in array...here in argument num1 has many values so it collects all values and rests it in an array
    return num1
}
//here (val1, val2, ...num1) =>1st argument goes in val1,2nd to val2 and rest goes in num1 array

console.log(calculateCartPrice(200,400,500)); //[200, 400, 500] if (...num1)
//objects
const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);   
}
handleObject(user) //accessing objects using function

const array = [200, 400, 100, 600]

function secondVal(arr){
    console.log(`second value of array is ${arr[1]}`);
    
}

console.log(secondVal(array)); //accessing arrays through functions












