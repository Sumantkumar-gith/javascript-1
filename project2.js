const form = document.querySelector('form')
const para = document.querySelectorAll('p')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = Number(document.querySelector('#height').value)
    const weight = Number(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height'
    }else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight'
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi< 18.6) {
            const text = document.createElement('div')
            text.textContent = 'You are underweight.'
            results.appendChild(text)
            para[2].style.backgroundColor = 'green'

        } else if(bmi> 18.6 && bmi < 24.9){
             const text = document.createElement('div')
            text.textContent = 'You are in normal range.'
            results.appendChild(text)
            para[3].style.backgroundColor = 'green'
        } else {
             const text = document.createElement('div')
            text.textContent = 'You are overweight'
            results.appendChild(text)
            para[4].style.backgroundColor = 'green'
        }
    }    
})