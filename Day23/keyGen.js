let h2 = document.createElement('h2')
let h1 = document.createElement('h1')
const body = document.querySelector('body')


document.body.appendChild(h2)
document.body.appendChild(h1)

h2.textContent = 'Press Any Keyboard Key'
console.log(body)

body.addEventListener('keypress', value =>{
    h2.innerHTML = `You pressed ${value.key}`
    h1.innerHTML = value.keyCode
    h1.style.color = 'green'
})