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

const wrapper = document.querySelectorAll('.wrapper')
wrapper.forEach((wrap) =>{
    wrap.style.display = 'flex'
    wrap.style.flexDirection = "column"
    wrap.style.alignItems = "center"
    wrap.style.justifyContent = "center"
})

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
let month = currentDate.getMonth()
let months = ''
switch (month){
    case 1:
        months = 'January';
        break; 
    case 2:
        months = 'Febuary';
        break; 
    case 3:
        months = 'March';
        break; 
    case 4:
        months = 'April';
        break; 
    case 5:
        months = 'May';
        break; 
    case 6:
        months = 'June';
        break; 
    case 7:
        months = 'July';
        break; 
    case 8:
        months = 'August';
        break; 
    case 9:
        months = 'September';
        break; 
    case 10:
        months = 'October';
        break; 
    case 11:
        months = 'November';
        break; 
    case 12:
        months = 'December';
        break; 
}
let day = currentDate.getDay()
let year = currentDate.getFullYear()
let hour = currentDate.getHours()

let minutes = currentDate.getMinutes()
let sec = currentDate.getSeconds()

let compliedDate = `${months} ${day}, ${year} ${hour}:${minutes}:${sec}`

const ul = document.querySelector('h3')
ul.innerHTML = compliedDate.toLocaleString('en-US', {
    hour12: false,
     })

 const colorCode = Math.floor(Math.random() * 16777215).toString(16);

  let randomClr =  "#" + "0".repeat(6 - colorCode.length) + colorCode;

  document.querySelector('h3').style.backgroundColor = randomClr
  document.querySelector('span').style.color = randomClr
  
}, 1000);


