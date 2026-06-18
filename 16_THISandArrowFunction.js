const user = {
    username: "lucky",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`);    //this refers to the current context here
        console.log(this);
        
    }
}

user.username = "ashish"
user.welcomeMessage()
console.log(this);       //in the node environment, here the current context refers to empty object
//but in browser, the global object in window object... thats why in browser 'this' refers to the window object

function chai() {
    let username = "lucky"
    console.log(this.username);     //we can't access by this in a function, it works in objects
}

chai()

// arrow function...

const chai1 = ()  => {
    let username = "yuvraj"
    console.log(this);
    
}

chai1()

//arrow function does not creates its own this instead it looks outside  itself for this
//eg. it looks for window object outside so 'this' does not work in arrow function

//important

//objects are not scope
//normal functions look at the call site i.e., obj.normal() =>normal is called through object
//that's why for normal object => this=== obj

//for arrow function, they looks for 'this' outside their scope and we know objects are not scope 
//that's why they look for global scope, for browser it's window object and for node environment it is undefined

//an example for better understanding

const obj1  = {
    name: "lucky",
    normal(){
         const arrow = () => {
            console.log(this.name);
            
         }
         arrow()
    }
}

obj1.normal()

//in this, normal is called through object means normal has call site obj, so when the arrow is
//executed inside normal fn. so arrow looks outside its scope for "this" but outside it is normal fn.
//and normal has its call site for obj, that's why 'this' inside arrow refers to the object...

//three scopes->global scope,function scope, block scope

// function fn1() {
//    const name = "lucky"
//    function fn2() {
//          console.log(this.name);
         
//    }
//    fn2()
// }
// fn1()  //this will give unddefined as normal function refer to the global scope
          //but in arrow function inside it will refer to the outer function and will print lucky

//arrowfunction

//const arrow = (parameters) => {}


const addTwo = (num1,num2) => {    //normal arrow function/explicit
    return num1 + num2             //if we put curly braces we have use return keyword
}   

console.log(addTwo(4, 5));

const square = (num) => (num * num)    //implicit return method of arrow function
                                       //we dont use return keyword when we use parenthesis
console.log(square(6));

const object1 = () => ({name: "lucky"})   //to return an object, we have to use parenthesis

console.log(object1());

const myArray = [2, 5, 7, 9];

// myArray.forEach(() => {})   //forEach method of array

//**********Immediately Invoked Function Expression (IIFE)***********
//those functions which immediately executes
//to prevent our function from being polluted by global scope and to create private scope for variables

(function chai1() {                  //named IIFE
    console.log(`DB Connected`);
})();
// ()() => to prevent our function from global scope pollution like global variables and declaration
// chai()
((name) => {console.log(`hello ${name}`)})("lucky");