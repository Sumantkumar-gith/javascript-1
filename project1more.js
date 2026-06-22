const spans = document.querySelectorAll("span")
const body = document.querySelector("body")
for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener('click', (event) =>{
            switch (event.target.id) {                   //e.target is which element triggered the event
            case 'grey':
            body.style.backgroundColor = event.target.id    
                break;
            
            case 'white':
            body.style.backgroundColor = event.target.id    
                break;
            
            case 'blue':
            body.style.backgroundColor = event.target.id    
                break;

            case 'yellow':
            body.style.backgroundColor = event.target.id    
                break;

            default:
                break;
          }
        })
}