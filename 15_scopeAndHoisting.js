// {} =>scope of that program
// if we declare anything inside scope then it's importance belongs only within the scope
// if we declare anything outside scope then tis is called globle scope and above is local scope

//but the variable 'var' doesn't obey the scope....
//but let and const obey the scope...
//eg.

let a = 300
if(1){
    let a = 10
    console.log("inner: ", a);   //here the a is taken of inner/local/block scope
}
console.log(a);                  //here the a is of global scope as block scope works only inside block

//nested scope...

function one(){
    const username ="hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);     //can't access website as its scope is only in function two()

    two()
}
// console.log(username)

one()
// two()    //it can't be executed...for this first we have to execute one
//the child function can access the variables of parent function

if(true){
    const user1 = "lucky"
    if (user1 === "lucky") {
        const web = " youtube"
        console.log(user1 + web);
    }
    // console.log(web);   //can't access this because it is beyond the scope level so the code stops here
    
}
// console.log(user1);  //it also can't be accessed as it is also beyond scope

//hoisting =>it is moving declaration to the top of scope before it(code) is executed
//means we can sometimes use variables or functions before they are declared in code
//the declaration is hoisted but assignment is not hoisted...

console.log(addOne());    //can be accessed

function addOne (num){    //one way to declare function =>here function declaration is fully hoisted
    return num + 1
}

// console.log(addTwo());  //cant be accessed before variable is initialized/declaration

//function expression => needs to declared before accessing =>not fully hoisted like const and let
const addTwo = function(num){     //another way to declare a function
    return num + 2                //here we have stored the function in a variable so we can't access 
                                  //this before the function
}

addTwo(5)


console.log(z); //let and const are also hoisted but they remain in temporal dead zone(TDZ) before declaration
const z = 5

//arrow functions behaves like function expressions in hoisting...
//var,let,const and function declaration is only hoisted....
//reference error(referring to something that does not exist(maybe yet)) comes when =>
//1. when variable is not declared at all
//2. we try to access let or const variable before initialization(TDZ)
//type error=>you are doing operation on wrong type of value =>found but unusable

//important...

//in case of arrow function or function expression if we declare it using var variable and then
//do hoisting we can face type error cause var has always a global scope so it is declared 
//in the first place but the function is declared afterwards hoisting so it will give the 
//type error alike the const and let variables which give reference error

