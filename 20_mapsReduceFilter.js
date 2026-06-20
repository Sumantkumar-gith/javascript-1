const myNums = [1,2,3,4,5,6,7,8,9,10]

//filter

const values = myNums.filter((num) => {return num > 5})    //filter out elements for whom the condition is true
console.log(values);

//if we put curly braces than we have to write return

newNums = []

myNums.forEach((num) => {   //forEach only can mutates array so we have to create new array
       if (num>4) {         //thats why filter is good here,because it automatically creates a new array
        newNums.push(num)
       }
})
console.log(newNums);

myNums.forEach((num, i, arr) => {   //foreach cant create a new array
    arr[i] = num*5                   //it mutates original array
})
console.log(myNums);

//map =>it creates a new array and doesnot mutates the original array

myNumbers = [2,4,6,8,10,12,14]

const new1 = myNumbers.map((num) => num+10 )
console.log(new1);

//chaining in methods

const new2 = myNumbers
            .map((nums) => nums* 10)
            .map((nums) => nums +1)         //here only that values come which passes through above map/other method
 console.log(new2)

 //reduce

 //reduce((accumulator, cureent value) => {return updated accumulator}, initial value)

const newArr = [1,2,3,6,4,5,6]

const accumulate = newArr.reduce((acc, num) => acc + num , 0)

console.log(accumulate);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "data science",
        price: 3999
    },
    {
        itemName: "mobile dev",
        price: 1999
    },
    {
        itemName: "Mern stack",
        price: 4999
    }
]

const totalCartPrice = shoppingCart.reduce((total,  num) => total + num.price, 0)
console.log(totalCartPrice);



