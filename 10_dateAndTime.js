//date is an object in javascript used to work with dates and times...

let myDate = new Date()
console.log(myDate) //gives date and time
//months start from 0 eg.Jan = 0

console.log(new Date(2026, 5, 17).getDay()) //specific date

let d= new Date(2026, 4, 18);
console.log(d);
//getting date components...
console.log(d.getDay()); //to get the day....starts with sunday = 0
console.log(d.getFullYear()); //for year
console.log(d.getMonth()); //for month
console.log(d.getDate()); //for date
console.log(d.getHours()); //for hours(time)
console.log(d.getMinutes()); //for minutes
console.log(d.getSeconds()); //for seconds
console.log(d.getMilliseconds()); //for milliseconds

// setting date components...

console.log(d.setDate(21));
console.log(d.setMonth(10));
console.log(d.setFullYear(2027));
console.log(d.setHours(15));
console.log(d);
console.log(Date.now()); //to get the timestamp (in milliseconds)

//formatting dates

console.log(d.toString()); //change in string
console.log(d.toDateString()); //for only date in string
console.log(d.toTimeString()); //for time in string
console.log(d.toISOString()); //represent date as iso format

//date calculations...

console.log(d.setDate(d.getDate() + 5)); //add 5 days to date
console.log(d.toDateString());
let d1 = new Date("2026-06-01") //string format to set date
let d2 = new Date("2026-06-06")
let diff = d2 - d1
console.log(diff / (1000 * 60 * 60 * 24)) //to get the difference of dates in days

//important
let d3 = new Date(2026, 5, 31, 7, 35) //js rolls overs extra date or month
console.log(d3.toDateString());
console.log(d3.toString());
console.log(d3.toLocaleDateString());
console.log(d3.toISOString());
console.log(d3.toJSON());
console.log(d3.toLocaleString()); //it converts to human readable string format
console.log(typeof d3); //date is an object
console.log(`total years from 1970 till now are ${Math.floor(d3.getTime() / (1000*60*60*24*365))}`);
console.log(d3.getMonth() +1);
D3 = d3.toLocaleString('default', {
    weekday: "long"
})

console.log(D3);






















