// console.log(1==2)
// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2!=1)

console.log("2"<1) //js converts automatically string datatype to numeric
console.log("02">1)
console.log("1">2)

console.log(null==0)
console.log(null>=0)
console.log(null!=0) //equality check(==) and comparisons works differently...
//comparisons convert null to a number ,treating it as 0...
//that's why null>=0 is true and (null==0, null>0) is false

console.log(undefined==0) //undefined is always false

//=== strict check
console.log("2" == 2) //here the string data type converts to numeric
console.log("2"===2) //but here strictly check happens and datatypes also compared