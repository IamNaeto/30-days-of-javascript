/****************
Exercise: Level 3
****************/

/*********
DOM: Mini project 1
*********/
/*
Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

The year color is changing every 1 second
The date and time background color is changing every on seconds
Completed challenge has background green
Ongoing challenge has background yellow
Coming challenges have background red
*/

// Get the dom of the div and center it
const wrapper = document.querySelectorAll('.wrapper')
wrapper.forEach((wrap) =>{
    wrap.style.display = 'flex'
    wrap.style.flexDirection = "column"
    wrap.style.alignItems = "center"
    wrap.style.justifyContent = "center"
})

// get the dom of the li in the ul inside the div and style it
document.querySelector('ul').style.listStyleType = 'none'
const list = document.querySelectorAll('li')
list.forEach((eachList, i) => {
    eachList.style.padding = '15px 300px 15px 20px'
    eachList.style.textAlign = 'left'
    eachList.style.border = '2px solid #ffff'
    if(i === 0){
        eachList.style.backgroundColor = '#5BBC7A'
    }else if(i === 1){
        eachList.style.backgroundColor = '#F7DC5C'
    }else{
        eachList.style.backgroundColor = '#EB695B'
    }
})
document.querySelector('span').style.fontSize = '50px'
document.querySelector('h2').style.textDecoration = 'underline'

document.querySelector('h3').style.border = '1px solid #FFFFFF'
document.querySelector('h3').style.padding = '15px 20px'

document.querySelector('body').style.margin = '0px'
document.querySelector('body').style.padding = '0px'
document.querySelector('body').style.boxSizing = 'border-box'

setInterval(() => {
const currentDate = new Date()
let month = currentDate.toLocaleString('default', { month: 'long' })

let day = String(currentDate.getDay()).padStart(2,0)
let year = currentDate.getFullYear()
let hour = currentDate.getHours();
let amPm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12; // convert to 12-hour format
    hour = String(hour).padStart(2, 0);

let minutes = String(currentDate.getMinutes()).padStart(2,0)
let sec = String(currentDate.getSeconds()).padStart(2, 0)

let compliedDate = `${month} ${day}, ${year} ${hour}:${minutes}:${sec} ${amPm}`

const ul = document.querySelector('h3')
ul.innerHTML = compliedDate

 const colorCode = Math.floor(Math.random() * 16777215).toString(16);

  let randomClr =  "#" + "0".repeat(6 - colorCode.length) + colorCode;

  document.querySelector('h3').style.backgroundColor = randomClr
  document.querySelector('span').style.color = randomClr
  
}, 1000);


