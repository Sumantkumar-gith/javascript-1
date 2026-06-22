const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {       //event is click here and we can add function we want to perform using the event here
          switch (e.target.id) {                   //e.target is which element triggered the event
            case 'grey':
            body.style.backgroundColor = e.target.id    
                break;
            
            case 'white':
            body.style.backgroundColor = e.target.id    
                break;
            
            case 'blue':
            body.style.backgroundColor = e.target.id    
                break;

            case 'yellow':
            body.style.backgroundColor = e.target.id    
                break;

            default:
                break;
          }
          
    })
});


