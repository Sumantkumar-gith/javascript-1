//non-singleton ->object literals
//object.create() ->object constructor
//both are not-singleton as there exist only one instance but they both share the same object- prototype
//that is, two objects created cant be same but their prototype is same(object)

const user = {
    name: "lucky"
} //literal object

//two things in objects 
//keys and values
//keys are internally stored as strings
//values can be anything like numbers,string,array even nested objects...

const mysym = Symbol("key1")
const key2 = "hobby"

const user1 ={
    name: "yuvraj",
    "surname": "mann rana",    //you can't access this field with dot so you have to use bracket method
    age: 18,
    [key2]: "flirting",
    [mysym]: "handball",
    email: "yuvi10@gmail.com",
    isLoggedIn: false,
    lastLongInDaYs: ["mondays", "saturday"]
}
console.log(user1.email); //access objects
console.log(user1["age"]); //another way to access objects just like arrays but we have string here inplace of index
console.log(user1["surname"]); //for keys as literal strings
console.log(user1[mysym]); //access using a dynamic variable
console.log(Object.keys(user1)) //to access keys in array form
console.log(Object.values(user1)); //to access values in array form
console.log(Object.entries(user1)); //to access keys as well as values in form of array

user1.age = 20 //modify value
console.log(user1);
// Object.freeze(user1) -> it freezes the object you cant modify the data anymore
// Object.seal(user1) ->it seals ,you can modify the data but cant add or remove fields
// delete(user1.name) //it deletes the given field
// console.log(user1);

user1.greetings = function(){ //we can define functions also
     console.log("hello");
}
console.log(user1)
console.log(user1.greetings); //only the function reference came function is not executed...
console.log(user1.greetings()) //to access the function

user1.greetingTwo = function(){
    console.log(`hello ${this.name}`);  //string interpolation in objects using this
    
}
console.log(user1.greetingTwo());
// 'this' is used to refer to the same object in which we are present

//2nd

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLogIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
          name: "Lucky",
          lastname: "Jadon"
        }
    }
}
console.log(regularUser.fullname.userfullname); //accessing nested objects

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {...obj1, ...obj2} //spread operator to merge two objects ->shallow copy
console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2) //assign method to merge two two or more objects ->also a shallow copy
// object.assign(target, source) =>first one is the target in which objects are  going to copy
console.log(obj4);

console.log((Object.keys(user1)).length) //it is how you can access array properties through objects

const obj6 = [
    {
        101: "abc",
        102: "G@22"
    },
    {
        101: "abc",
        102: "G@22"
    },
    {
        101: "abc",
        id: "G@22"
    }
]

console.log(obj6[2]["101"]); //accessing objects from array

console.log(tinderUser.hasOwnProperty("isLogIn")) //to check whether the property of object exists or not
//beware that the property is a string...







