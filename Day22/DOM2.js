document.querySelector('h1').style.textAlign = 'center'
document.querySelector('h2').style.textAlign = 'center'
document.querySelector('.author').style.textAlign = 'center'
let div = document.querySelector('div')
div.className = 'container'

for(let i=0; i<=101; i++){
    let element = document.createElement('p')
    element.style.fontSize = '60px'
    element.textContent = i

    div.appendChild(element)

    if(i % 5 === 0){
        div.append(document.createElement('br'))
    }
    element.style.width = '15%'
    element.style.textAlign = 'center'
    element.style.margin = '3px'
    
    if(i % 2 === 0){
        element.style.backgroundColor = 'green'
    }else{
        element.style.backgroundColor = 'yellow'
    }

    function isPrime(n) {
        if (n <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
      }
      if (isPrime(i)) {
        element.style.backgroundColor = 'red'
      }

}
div.style.display = 'flex'
div.style.flexWrap = 'wrap'
div.style.alignItems = 'center'
div.style.justifyContent = 'center'