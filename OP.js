const user = {             //object literal
    username: "hitesh",
    logincount: 8,
    signedIn: true,

    getUserDetails: function(){            //it is a method so we have to run it we cant give only reference
        console.log(this);
        
    }
}

console.log(user['username']); //user.username
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this       //it isimplicitly define
}

const user1 = new User("hitesh", 8, true)   //we have to create a new instance for every new object
console.log(user1);

//js has prototyple behaviour in common

