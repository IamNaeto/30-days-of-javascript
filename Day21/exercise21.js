/************
DOM Exercises
*************/

/****************
Exercise: Level 1
*****************/
/*
Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
*/
const firstPara = document.querySelector('p')
console.log(firstPara)

/*
Get each of the the paragraph using document.querySelector('#id') and by their id
*/
const para1st = document.querySelector('#para')
const para2nd = document.querySelector('#para')
const para3rd = document.querySelector('#para')
const para4th = document.querySelector('#para')

console.log(para1st)
console.log(para2nd)
console.log(para3rd)
console.log(para4th)

/*
Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
*/
const pList = document.querySelectorAll('p')
console.log(pList)

/*
Loop through the nodeList and get the text content of each paragraph
*/
for(let i=0; i<pList.length; i++){
    console.log(pList[i])
}

/*
Set a text content to paragraph the fourth paragraph,Fourth Paragraph
*/
const fourthPara = document.querySelectorAll('p')
fourthPara[3].textContent = 'This the beginning of me using text content to modify javascript'

/*
Set id and class attribute for all the paragraphs using different attribute setting methods
*/
fourthPara[0].classList = 'first-rename'
fourthPara[1].setAttribute('class', 'second-rename')
fourthPara[2].classList.add('class', 'third-rename')
fourthPara[3].classList = 'fourth-rename'
fourthPara[0].id = 'first-id'
fourthPara[1].setAttribute('id', 'second-id')
fourthPara[2].id = 'second-id'
fourthPara[3].setAttribute('id', 'fourth-id')
console.log(fourthPara)


/****************
Exercise: Level 2
*****************/
/*
Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
*/
const paraDom = document.querySelectorAll('p')
paraDom.forEach((paraDom, i) => {
    if(i %2 === 0){
        paraDom.style.color = 'white'
        paraDom.style.backgroundColor = 'gold'
        paraDom.style.border = '2px solid grey'
        paraDom.style.fontFamily = 'cursive'
        paraDom.style.padding = '10px'
        paraDom.style.fontSize = '32px'
    }else{
        paraDom.style.backgroundColor = 'black'
        paraDom.style.color = 'white'
        paraDom.style.border = '4px solid grey'
        paraDom.style.fontFamily = 'Times New Roman'
        paraDom.style.padding = '20px'
        paraDom.style.fontSize = '42px'
    }
})

/*
Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
*/
const anoDOM = document.querySelectorAll('p')
anoDOM.forEach((dom, i) =>{
if(i % 2 == 0){
    dom.style.color = 'green'
}else{
    dom.style.color = 'red'
}
})


/*
Set text content, id and class to each paragraph
*/
const nextDom = document.querySelectorAll('p')
nextDom.forEach((next, i) =>{
    if(i %2 == 0){
        next.setAttribute('class', 'next-class')
        next.id = 'next-id'
        next.textContent = "Yoooooo, it fit to the condition so I'm getting the text manuiplulated the dom way"
    }else{
        next.setAttribute('class', 'ooops-class')
        next.id = 'ooops-id'
        next.textContent = "Aaaarrrrrggg, since this got to this conditon, no other option than to manipulate shaa, nothing spoil"
    }
    console.log(next)
})

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


<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
  </body>
</html>
*/