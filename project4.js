const form = document.querySelector('form')
let randomNumber =  Math.floor((Math.random()*100 + 1))
console.log(randomNumber);
const result = document.querySelector('.lowOrHi')
const spanCount = document.querySelector('.guesses')
let input = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
let arr = []
let guessleft = 10
const leftChance = document.querySelector('.lastResult')
const restart = document.querySelector('.resultParas')
const Probability = document.createElement('p')

function resetGame(){
    randomNumber = Math.floor((Math.random()*100 + 1))
    console.log(`Current number: ${randomNumber}`);
    arr = []
    guessleft = 10
    spanCount.textContent = ''
    leftChance.textContent = guessleft
    Probability.textContent = ''
    input.value = ''
    result.textContent = ''
    input.disabled = false
    submit.disabled = false
    const button = restart.querySelector('button')
    if(button){
        button.remove()
    }
    input.focus()
}

form.addEventListener('submit', (e)  => {
    e.preventDefault()
    result.textContent = ""
    const number = Number(input.value)
    if(isNaN(number) || number < 1 || number > 100){
        result.textContent = 'Please enter a valid Number'
        input.focus()
    }else if(number !== randomNumber){
        arr.unshift(number)
        spanCount.textContent = arr.join(" ")
        input.value = ''
        input.focus()
        guessleft--
        leftChance.textContent = guessleft
        if(Math.abs(number - randomNumber) <= 5){
            Probability.textContent = 'Probabilty of last guess: Very Close Guess'
        }else if(Math.abs(number - randomNumber) <= 10){
            Probability.textContent = 'Probabilty of last guess: Close Guess'
        } else if(Math.abs(number - randomNumber) > 10 && Math.abs(number - randomNumber) <= 40){
            Probability.textContent = 'Probabilty of last guess: Normal Guess'
        } else{
            Probability.textContent = 'Probabilty of last guess: Very far Guess'
        }

        restart.insertBefore(Probability, result)

        if(guessleft == 0){
            result.textContent = `Loss... The number was ${randomNumber}`
            input.disabled = true
            submit.disabled = true
            const button = document.createElement('button')
            button.textContent = 'Restart'
            restart.appendChild(button)
            button.addEventListener('click', resetGame) 
} }else if(number === randomNumber){
    
    Probability.textContent = 'Probabilty of last guess: Exact Guess'
    restart.insertBefore(Probability, result)
    result.textContent = 'Win'
    leftChance.innerHTML = `${--guessleft}`
    input.disabled = true
    submit.disabled = true
    const button = document.createElement('button')
    button.textContent = 'New Game'
    restart.appendChild(button)
    button.addEventListener('click', resetGame)

}})



