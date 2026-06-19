//for loop...

// for (let i = 0; i < array.length; i++) {       //basic structure
//     const element = array[i];
    
// }


function power(base, pow) {               //function to give power of a number through for loop
     
    if (!Number(base) || !Number(pow)) {
        console.log("enter numbers");
        return
    } 
        
    let total = 1

    for (let i = 0; i < pow; i++) {
        total = total* base
        
    }
    return total
}
console.log(power(17, 3));


for (let i = 0; i < 10; i++) {           //nested loops
    for (let j = 0; j <= i; j++) {
        console.log(i + j);
                
    }
    console.log(" ");
    
}


let i = 10                  //while loop =>another way of writing for loop
while (i >= 1) {
    console.log(i);
    i = i-2
}

//dowhile loop

let score = 11
do {                                  //dowhile loop atleast runs one time  coz. it checks 
    console.log(`score is ${score}`); //condition in the last of loop
    score++
} while (score <=10);
