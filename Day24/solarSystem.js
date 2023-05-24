const body = document.querySelector('body')
body.style.backgroundImage = 'url(./img/galaxy.gif)'
body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
body.style.justifyContent = 'center'
body.style.fontFamily = 'Montserrat'

const header = document.querySelector('header')
header.style.marginBottom = '10px'

const h1 = document.querySelector('h1')
h1.style.textAlign = 'center'
h1.style.color = '#ffffff'
h1.style.fontSize = '30px'
h1.style.textShadow = '1px 1px 1px #0000ff'
h1.style.marginBottom = '50px'

const input = document.querySelector('#mass')
input.style.padding = '10px'
input.style.outline = 'none'
input.style.border = 'none'
input.style.width = '200px'
input.style.marginLeft = '80px'

const select = document.querySelector('select')
select.style.padding = '10px'
select.style.outline = 'none'
select.style.border = 'none'
select.style.width = '150px'
select.style.borderRadius = '3px'
select.style.color = '#777676'

const button = document.querySelector('button')
button.style.padding = '12px'
button.style.backgroundColor = '#777676'
button.style.color = '#ffffff'
button.style.outline = 'none'
button.style.border = 'none'
button.style.borderRadius = '3px'
button.style.cursor = 'pointer'

const main = document.querySelector('main')
main.style.display = 'flex'
main.style.alignItems = 'center'
main.style.justifyContent = 'center'
main.style.backgroundColor = 'rgba(255,255,255,0.1)'
main.style.width = '80%'
// main.style.height ='70vh'

const flexContainer = document.querySelector('.flex-container')
flexContainer.style.display = 'flex'
flexContainer.style.alignItems = 'center'
flexContainer.style.justifyContent = 'center'
flexContainer.style.padding = '50px 0'
// flexContainer.style.width = '100%'
 
const flexItem = document.querySelector('.flex-item')
flexItem.style.width = '70%'

const planetImg = document.querySelector('.planet-image')
planetImg.style.width = '100%'



const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Moon']
const planetGravity = [3.59, 8.87, 9.81, 3.77, 25.95, 11.08, 10.67, 14.07, 0.42, 1.62]

let solarSystem = {
    mercury : {
        gravity : 3.59,
        // 'image' : //source,
    },
    venus : {
        gravity : 8.87,
        // 'image' : //source,
    },
    earth : {
        gravity : 9.81,
        // 'image' : //source,
    },
    mars : {
        gravity : 3.77,
        // 'image' : //source,
    },
    jupiter : {
        gravity : 25.95,
        // 'image' : //source,
    },
    saturn : {
        gravity : 11.08,
        // 'image' : //source,
    },
    uranus : {
        gravity : 10.67,
        // 'image' : //source,
    },
    neptune : {
        gravity : 14.07,
        // 'image' : //source,
    },
    pluto : {
        gravity : 0.42,
        // 'image' : //source,
    },
    moon : {
        gravity : 1.62,
        // 'image' : //source,
    }
}

function createPlanetsOption(){
    for(let i=0; i<planets.length; i++){
        let createOption = document.createElement('option')
        createOption.innerHTML = planets[i]
        createOption.value = `${planets[i]}`
        select.appendChild(createOption)
    }
}
createPlanetsOption()



function createDescriptionDiv(){
    let descriptionDiv = document.querySelector('.description')
    descriptionDiv.style.display = 'flex'
    descriptionDiv.style.flexDirection = 'column'
    descriptionDiv.style.alignItems = 'center'
    descriptionDiv.style.justifyContent = 'center'
    descriptionDiv.style.color = '#ffffff'
    descriptionDiv.style.fontSize = '50px'
    descriptionDiv.style.width = '100%'

    return descriptionDiv
}

let descriptionParagraph = document.createElement('p')
descriptionParagraph.innerHTML = 'The Weight of the object on: ';
descriptionParagraph.style.fontSize = '30px'

let planetSpan = document.createElement('span')
planetSpan.id = 'planetSpan'
descriptionParagraph.appendChild(planetSpan)

let resultDiv = document.createElement('div')
resultDiv.style.display = 'flex'
resultDiv.style.alignItems = 'center'
resultDiv.style.justifyContent = 'center'
resultDiv.style.background = 'red'
resultDiv.style.borderRadius = '100px'
resultDiv.style.width = '200px'
resultDiv.style.height = '200px'
resultDiv.innerHTML = 'Ballablu, blu, bulaba'
resultDiv.fontSize = '60px'
resultDiv.textAlign = 'center'

function calculateWeight(){
    button.addEventListener('click', () => {
        let descriptionDiv = createDescriptionDiv()
        descriptionDiv.appendChild(descriptionParagraph)
        descriptionDiv.append(resultDiv)

        let mass =  input.value
        let planetType = select.value
        let weight 
        planetSpan.innerHTML = `${select.value.toUpperCase()}`
        let image = document.querySelector('.image')
        let description = document.querySelector('.description')
        if(planetType === 'none' || mass === ''){
            image.style.display = 'none'
            description.style.display = 'none'
            resultDiv.style.display = 'none'
            resultDiv.style.display = 'flex'
            resultDiv.style.justifyContent = 'center'
            resultDiv.style.alignItems = 'center'
            resultDiv.style.backgroundColor = 'rgba(255,255,255,0.1)'
            resultDiv.style.borderRadius = '20px'
            resultDiv.style.width = '75%';
            resultDiv.style.height = '200px'

            if(mass === ''){
                resultDiv.innerHTML = 'Mass Is Required'
            }else{
                resultDiv.innerHTML = 'You did not select a planet'
            }
        }else{
        image.style.display = 'block'
        description.style.display = 'block'

        resultDiv.style.display = 'flex'
        resultDiv.style.justifyContent = 'center'
        resultDiv.style.alignItems = 'center'
        resultDiv.style.backgroundColor = 'rgba(255,255,255,0.1)'
        resultDiv.style.borderRadius = '100px'
        resultDiv.style.width = '200px';
        resultDiv.style.height = '200px';
        }

         switch(true){
            case (planetType === 'mercury') : 
             weight = mass * solarSystem.mercury.gravity;
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = 'img/mercury.png'
            break;
            
            case (planetType === 'venus') : 
             weight = mass * planetGravity[1];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/venus.png'
            break;
            
            case (planetType === 'earth') : 
             weight = mass * planetGravity[2];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/earth.png'
            break;

            case (planetType === 'mars') : 
             weight = mass * planetGravity[3];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/mars.png'
            break;

            case (planetType === 'jupiter') : 
             weight = mass * planetGravity[4];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/jupiter.png'
            break;

            case (planetType === 'saturn') : 
             weight = mass * planetGravity[5];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/saturn.png'
            break;

            case (planetType === 'uranus') : 
             weight = mass * planetGravity[6];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/uranus.png'
            break;

            case (planetType === 'neptune') : 
             weight = mass * planetGravity[7];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/neptune.png'
            break;

            case (planetType === 'pluto') : 
             weight = mass * planetGravity[8];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/pluto.png'
            break;

            case (planetType === 'moon') : 
             weight = mass * planetGravity[9];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/moon.png'
            break;
    
            default:
            weight = 'Something is Wrong somewhere'
            console.log('There must be a problem to get here');
            resultDiv.innerText = weight;
        }
    })
}
calculateWeight()