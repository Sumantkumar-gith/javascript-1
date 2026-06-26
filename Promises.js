const promise1 = new Promise(function(resolve, reject) {
    //Do async Tasks
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)
})
promise1.then(function(){
    console.log('Promise Consumed');
    
})
new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const Promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    },1000)
})

Promise3.then(function(user){
    console.log(user);    
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Lucky", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})

promise4
.then((user) =>{            //here the parameter comes from resolve =>resolved value
    console.log(user);
    return user.username
})
.then((username) => {              //it is chaining => the value from above then that is returned is used as parameter here
    console.log(username);
    
})
.catch((err) => {                  //here the parameter comes from reject
    console.log(err);
    
})
.finally(() =>{                    //it happens everytime like default callback
    console.log("The Promise is either resolved or rejected")
})

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else{
            reject('JS went wrong')
        }
    }, 2000)     
})

async function consumePromise5 (){
    try {const response = await promise5     //we have to use keywords like try and catch
        console.log(response); 
    } catch(err) {                           //the parameter err comes from the reject value
        console.log('Error: ', err);                       //if an await doesn't respond anything then it goes to catch
    }                                                      //catch catches the error too
}
consumePromise5()

//get data from an api
 
// async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')     //fetch is object reponse like ajax it directly comes from the server
//     // console.log(response);                                      //response comes in object form
//     const data = await response.json()       //it also takes time so we have to make it await  //reponse comes in a string form so we convert it into json form     
//     console.log(data);
//     } catch(err) {
//         console.log("Error: ", err);
//     }
    
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{           //then works as the await in async function
    return response.json()
})
.then((data) => {             //chaining
    console.log(data);
})
.catch((error) => {console.log(error);
})