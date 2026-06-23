const clock = document.getElementById('clock')
let date = new Date()
const Time = console.log(date.toLocaleTimeString());
setInterval(()=> {         //it performs the method at the interval set by us...
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
