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

const input = document.querySelector('input')
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
main.style.width = '90%'

const flexContainer = document.querySelector('.flex-container')
flexContainer.style.display = 'flex'
flexContainer.style.alignItems = 'center'
flexContainer.style.justifyContent = 'center'
flexContainer.style.padding = '50px 0px 50px 20px'
 
const flexItem = document.querySelector('.flex-item')
flexItem.style.width = '70%'

const planetImg = document.querySelector('.planet-image')
planetImg.style.width = '100%'



const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto', 'Moon']
const planetGravity = [3.59, 8.87, 9.81, 3.77, 25.95, 11.08, 10.67, 14.07, 0.42, 1.62]


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
    descriptionDiv.style.fontSize = '30px'
    descriptionDiv.style.width = '100%'
    descriptionDiv.style.backgroundColor = 'rgba(255,255,255,0.1)'
    descriptionDiv.style.padding = '0px 20px 5px 20px'
    descriptionDiv.style.margin = '0 20px'

    return descriptionDiv
}

let descriptionParagraph = document.createElement('p')
descriptionParagraph.innerHTML = 'The Weight of the object on: ';
descriptionParagraph.id = descriptionParagraph
descriptionParagraph.style.fontSize = '20px'
descriptionParagraph.textAlign = 'center'
descriptionParagraph.margin = '0px'

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
resultDiv.style.height = '100px'
resultDiv.innerHTML = 'Ballablu, blu, bulaba'
resultDiv.textAlign = 'center'

function calculateWeight(){
    button.addEventListener('click', () => {
        let descriptionDiv = createDescriptionDiv()
        descriptionDiv.appendChild(descriptionParagraph)
        descriptionDiv.append(resultDiv)

        let mass =  input.value
        let planetType = select.value
        let weight;
        planetSpan.innerText = `${select.value.toUpperCase()}`
        let image = document.querySelector('.image')
        if(planetType === 'none' || mass === ''){
            image.style.display = 'none'
            resultDiv.style.display = 'none'
            if(mass === ''){
                descriptionParagraph.innerText = 'Mass Is Required'
            }else{
                descriptionParagraph.innerText = 'You did not select a planet'
            }
        }
        else{
        image.style.display = 'block'
        resultDiv.style.display = 'flex'
        resultDiv.style.justifyContent = 'center'
        resultDiv.style.alignItems = 'center'
        resultDiv.style.backgroundColor = 'rgba(255,255,255,0.1)'
        resultDiv.style.borderRadius = '100px'
        resultDiv.style.width = '150px';
        resultDiv.style.height = '150px';
        resultDiv.style.fontWeight = 'bolder'
        descriptionParagraph.innerHTML = `The Weight of the object on: <b>${select.value.toUpperCase()}</b>`
        planetImg.style.width = '90%'

        
         switch(true){
            case (planetType === 'Mercury') : 
             weight = mass * planetGravity[0]
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/mercury.png'
            break;
            
            case (planetType === 'Venus') : 
             weight = mass * planetGravity[1];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/venus.png'
            break;
            
            case (planetType === 'Earth') : 
             weight = mass * planetGravity[2];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/earth.png'
            break;

            case (planetType === 'Mars') : 
             weight = mass * planetGravity[3];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/mars.png'
            break;

            case (planetType === 'Jupiter') : 
             weight = mass * planetGravity[4];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/jupiter.png'
            break;

            case (planetType === 'Saturn') : 
             weight = mass * planetGravity[5];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/saturn.png'
            break;

            case (planetType === 'Uranus') : 
             weight = mass * planetGravity[6];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/uranus.png'
            break;

            case (planetType === 'Neptune') : 
             weight = mass * planetGravity[7];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/neptune.png'
            break;

            case (planetType === 'Pluto') : 
             weight = mass * planetGravity[8];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/pluto.png'
            break;

            case (planetType === 'Moon') : 
             weight = mass * planetGravity[9];
            resultDiv.innerText = `${weight.toFixed(1)}N`;
            planetImg.src = './img/moon.png'
            break;
    
            default:
            weight = 'Something is Wrong somewhere'
            console.log('There must be a problem to get here');
            resultDiv.innerText = weight;
        }

        }
    })
}
calculateWeight()