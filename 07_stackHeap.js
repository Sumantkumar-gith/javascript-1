// Stack(Primary), Heap(Non-Primary)

let myYoutubeName = "luckyjadondotcom"

let anothername = myYoutubeName //here, the copy of myYoutubeName came thats why it is call by value
anothername = "chaiaurcode" //so when we changed anothername it doesnot affected the myYoutubeName

console.log(myYoutubeName)
console.log(anothername)

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne //it is call by reference so it makes changes in original data also

userTwo.email = "lucky@google.com" //here the email is changed and it was stored in the heap so the data of userOne also changed

console.log(userTwo)
console.log(userOne)