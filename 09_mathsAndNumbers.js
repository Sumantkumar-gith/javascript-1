//numbers...
const score = 400
const balance = new Number(100)
console.log(balance) //specially defines it as a number
console.log(score)
console.log(typeof balance)
console.log(balance.toString().length) //first changed to string then can perform string operations
console.log(balance.toFixed(2)) //numbers of decimal digits after point =>100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) //no. of digits in precision =>23.9

const hundreds = 100000000
console.log(hundreds.toLocaleString()) //convert number to country standards
console.log(score.length)

//maths...

console.log(Math)
console.log(Math.abs(-5)) //gives the absolute value of a number
console.log(Math.round(4.49)) //round off the number
console.log(Math.ceil(4.5)) //like GIF
console.log(Math.floor(4.5)) //opp. of gif
console.log(Math.sqrt(25)) // square root
console.log(Math.min(10,4,7,9)) //to find min. value...similarly max
//mostly used math.random
console.log(Math.floor((Math.random()*6)+1)) //gives random values between 0 and 1
//math.random can be used to give random numbers like for a game of ludo**

const min = 10
const max = 20
//formula for random number between min and max
console.log(Math.floor((Math.random()*(max-min+1)) + min))
//eg. for dice min=1 max=6 so formula is Math.floor((Math.random()*6) + 1) 







