class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    //if you write getter, you will also have to write the setter of it...

    get password(){
        return this._password.toUpperCase()    //when we want to get the password it will always set it to uppercase now
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value          //we dont return the setters
    }

    set password(value){          //in this case, max call stack exceeds
        this._password = value
    }
}

const hitesh = new User('h@hitesh.ai', 'abc')
console.log(hitesh.password);

//oldmethod

function User1(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = email
        }
    })
}

const chai = new User1('chai@chai', 'chai')

console.log(chai.email);

//object based getter setter

const user2 = {
    _email: 'h@hc.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){     //here get and set acts like properties over the top of other properties
        this._email = value  
    }
}

const tea = Object.create(user2)
console.log(tea.email);

