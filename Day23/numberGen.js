document.querySelector('h1').style.textAlign = 'center'
document.querySelector('h1').style.color = '#5BBC7A'
document.querySelector('h2').style.textAlign = 'center'
document.querySelector('.author').style.textAlign = 'center'

const info = document.querySelector('.info')
info.style.color = 'red'
info.style.height = '1px'
info.style.marginLeft = '75px'

hero = document.querySelector('.hero')
hero.style.display = 'flex'
hero.style.alignItems = 'center'
hero.style.justifyContent = 'center'
hero.style.marginTop = '30px'
hero.style.marginBottom = '30px'


const input = document.querySelector('input')
input.style.width = '70%'
input.style.padding = '10px'
input.style.borderColor = '#5BBC7A'
input.style.borderWidth = '2px'
input.style.outline = 'none'
input.style.border

const button = document.querySelector('button')
button.style.paddingTop = '10px'
button.style.paddingBottom = '10px'
button.style.width = '15%'
button.style.color = 'white'
button.style.backgroundColor = '#5BBC7A'
button.style.borderColor = '#5BBC7A'
button.style.borderWidth = '2px'
button.style.marginLeft = '10px'


let wrapper = document.querySelector('.wrapper')
wrapper.style.display = 'flex'
wrapper.style.flexWrap = 'wrap'
wrapper.style.alignItems = 'center'
wrapper.style.justifyContent = 'center'

 for(let i=0; i<=50; i++){

        let element = document.createElement('p')
        element.style.fontSize = '2.5rem'
         element.style.padding = '5px'
        element.textContent = i
    
        wrapper.appendChild(element)
    
        // To add line break after every fifith number and the styling of the P element.
        if(i % 5 === 0){
            wrapper.append(document.createElement('br'))
        }
        element.style.width = '15%'
        element.style.textAlign = 'center'
        element.style.margin = '3px'

        if(i % 2 === 0){
            element.style.backgroundColor = '#5BBC7A'
            // for even numbers bgcolor
        }else{
            element.style.backgroundColor = '#F7DC5C'
            // for odd numbers bgcolor
        }

        // for prime numbers bgcolor
        function isPrime(n){
            if (n <=1){
                return false;
            }
            for(let i = 2; i <= Math.sqrt(n); i++){
                if(n % i === 0){
                    return false;
                }
            }
                return true;
            }
            if(isPrime(i)){
                element.style.backgroundColor = '#EB695B'
            }
        }

function moreNumGen(){

        if(input.value === ""){
            info.textContent = 'Enter number value on the input field to generate numbers'
            element.textContent = ""
            wrapper.textContent = ""
        }else if (!/^\d+$/.test(input.value)){
            info.textContent = 'Input value must be a number'
        }else{
            info.textContent = ""
            wrapper.textContent = ""

             for(let i=0; i<=input.value; i++){

        let element = document.createElement('p')
        element.style.fontSize = '2.5rem'
         element.style.padding = '5px'
        element.textContent = i
    
        wrapper.appendChild(element)
    
        // To add line break after every fifith number and the styling of the P element.
        if(i % 5 === 0){
            wrapper.append(document.createElement('br'))
        }
        element.style.width = '15%'
        element.style.textAlign = 'center'
        element.style.margin = '3px'

        if(i % 2 === 0){
            element.style.backgroundColor = '#5BBC7A'
            // for even numbers bgcolor
        }else{
            element.style.backgroundColor = '#F7DC5C'
            // for odd numbers bgcolor
        }

        // for prime numbers bgcolor
        function isPrime(n){
            if (n <=1){
                return false;
            }
            for(let i = 2; i <= Math.sqrt(n); i++){
                if(n % i === 0){
                    return false;
                }
            }
                return true;
            }
            if(isPrime(i)){
                element.style.backgroundColor = '#EB695B'
            }
        }
        }
}

button.addEventListener('click', ()=>{
    
    moreNumGen()
})