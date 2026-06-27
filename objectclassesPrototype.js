function multiply5(num){
    return num*5
}
multiply5.power = 2
console.log(multiply5(5));
console.log(multiply5.power);
console.log(multiply5.prototype);   //function is also an object

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++                            //whoever calls it go to that object
}

createUser.prototype.printMe = function(){     //we created the prototype methods for user which was accessible to the 
    console.log(`score is ${this.score}`);     //objects we created using new keyword
    
}
const user1 = new createUser('lucky', 5)    //new keyword creates a new object and links it to the prototype property of the constructor function
console.log(user1);                        //if no return value is assigned then javascript assumes that the newly created object as the return 
user1.increment()
console.log(user1.score);
user1.printMe()                //it checks for printme() in=> 1. user1 object => 2. user1.prototype => 3. createUser.prototype 

let myName = 'Hitesh    '

Object.prototype.truelength = function(){     //this is how we create our own prototype method
    return this.trim().length
}

console.log(myName.truelength());

//inheritance

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport      //now TAsupport prototype is TeachingSupport also=> comes first in chain before Object
}

TeachingSupport.__proto__ = Teacher   //TeachingSupport is prottotype of Teacher now

console.log(TASupport.isAvailable)

//new syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //teachingsupport is prototype of teacher





