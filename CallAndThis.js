function setUserName(username){
    this.username = username
}

function createUser(username, email, password){
    this.email = email
    this.password = password
    setUserName.call(this, username)   //in non strict mode this refers to the global object not the curent context
}                                      // it will set the username of global object not our newly created object
                                   //thats why we pass this to our function as well to refer to our own function 
const chai = new createUser("chai", "chai@fb.com", "123")   //and we also use call to call the method
console.log(chai);
