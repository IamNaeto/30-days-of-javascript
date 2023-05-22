const div = document.createElement('div')
div.style.display = 'flex'
div.style.flexDirection = 'column'
div.style.alignItems = 'center'
div.style.justifyContent = 'center'
div.style.height = '100vh'

const h2 = document.createElement('h2')
h2.style.fontSize = '60px'
h2.style.color = '#1c1b1b'
h2.style.textShadow = '1px 2px 4px #e0e0e0'
h2.style.padding = '15px 80px'
h2.style.boxShadow = '1px 1px 4px #777676'
h2.style.textAlign = 'center'

const h1 = document.createElement('h1')


const body = document.querySelector('body')


body.appendChild(div)
div.appendChild(h2)
div.appendChild(h1)

h2.textContent = 'Press Any Keyboard Key'
console.log(body)

body.addEventListener('keypress', value =>{
    h2.textContent = `You pressed ${value.key}`
    // Split the text content into an array of characters
    const characters = h2.textContent.split(' ');

    // Set the color of the last character
    characters[characters.length - 1] = `<span style="color: #5bbc7a">${characters[characters.length - 1]}</span>`;

    // Join the array back into a string
    h2.innerHTML = characters.join(' ');

    h1.textContent = value.keyCode
    h1.style.fontSize = '50px'
    h1.style.color = '#5bbc7a'
    h1.style.textShadow = '2px 2px 4px #e0e0e0'
    h1.style.padding = '30px'
    h1.style.boxShadow = '1px 1px 4px #777676'
    h1.style.borderRadius = '5px'
    h1.style.marginTop = '0px'
})