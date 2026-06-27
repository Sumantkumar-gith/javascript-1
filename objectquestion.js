const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(Math.PI);
console.log(descriptor);
Math.PI.writable = true
console.log(descriptor);

const chai = {
    name: "gingerchai",
    price: 250,
    isAvailable: true,

    orderchai: function(){
        console.log("chai nhi bani");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false,
    
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}

