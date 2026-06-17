//object destructuring

const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

const {courseInstructor: CI} = course //to extract values from objects
//we can also rename a key during restructuring for our convenience
console.log(CI);

//APIs and JSON
//API- application programming interface....set of functions and rules that allow our code to interact with something
//JSON- JavaScript Object Notation
//the values that come from backend are in json form {}...i.e. in object form but no name of object
// {
//     "name":  "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } //json form api

[
    {},
    {},
    {}
]  //api in array form

//we can get api in nested form of array and objects