class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());

console.log(chai.changeUsername());

//inheritance

class Teacher extends User{
    constructor(username, email, password){
        super(username)       //speciality of classes => this takes username from the prototype class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const user2 = new Teacher("lucky", "lucky@gmail.com", "234")

user2.addCourse()
console.log(user2.encryptPassword())
console.log(user2 instanceof Teacher);

class User3 {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){           //static keyword blocks the permit to use the method to its constructor and the child
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId())


