/***********
Exercises: Level 1 
************/
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName1 = "Charles"
let lastName1 = "Egesionu"
let country = "Nigeria"
let city = "Imo"
let age = 25
let year1 = 2023

console.log(typeof(firstName1))
console.log(typeof(lastName1))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(year1))

// // Check if type of '10' is equal to 10
let num1 = '10'
let num2 = 10
console.log(num1===num2)
let num3 = parseInt(num1)
console.log(num3===num2)

// Check if parseInt('9.8') is equal to 10
let integer1 = parseInt('9.8')
let integer2 = 10
console.log(typeof(integer1)===typeof(integer2))

/**
 * Boolean value is either true or false.
*Write three JavaScript statement which provide truthy value.
*Write three JavaScript statement which provide falsy value.
**/
let compare = 40 > 11
let compare2 = 0.5 == 0.5 
let compare3 = 15 >= 11
console.log(compare)
console.log(compare2)
console.log(compare3)

let amount = 150 < 15
let niceName = "Ahmed" === "ahmed"
let bigCity = "England" === 50
console.log(amount)
console.log(niceName)
console.log(bigCity)

/**
 * Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
**/ 
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// Find the length of python and jargon and make a falsy comparison statement.
let lang1 = "Python"
let lang2 = "Jargon"
console.log(lang1.length)
console.log(lang2.length)
let bothLang = lang1 === lang2
console.log(bothLang)

/**
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python
**/
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
let wildLife = "dragon"
let langTech = "python"
console.log(wildLife.includes("on"))
console.log(langTech.includes("on"))

/**
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
**/
const nowDate = new Date()
console.log(nowDate.getFullYear())
console.log(nowDate.getMonth())
console.log(nowDate.getDate())
console.log(nowDate.getDay())
console.log(nowDate.getHours())
console.log(nowDate.getMinutes())
console.log(nowDate.getTime())


/**************
Exercises: Level 2
************/
/*** Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100
***/
let base = prompt("Base", "Enter base of triangle")
let height = prompt("Height", "Enter height of triangle")
let baseOfTriangle = base
let heightOfTriangle = height
let area = 0.5 * baseOfTriangle * heightOfTriangle
console.log(area)

/***
Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
***/
let a = parseInt(prompt("side a", "Enter the perimeter for this side"))
let b = parseInt(prompt("side b", "Enter the perimeter for this side"))
let c = parseInt(prompt("side c", "Enter the perimeter for this side"))
let sideA = a
let sideB = b
let sideC = c
let perimeter = sideA + sideB + sideC
console.log(perimeter)

/**
Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
**/
let length = parseInt(prompt("Enter-length"))
let width = parseInt(prompt("Enter width"))
let areaOfRectangle = length * width
let rectanglePerimeter = 2 * (length + width)
console.log(areaOfRectangle)
console.log(rectanglePerimeter)

/**
Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
**/
let radius = parseInt(prompt("Enter the radius"))
const pi = 3.14
let areaOfCircle = pi * radius * radius
let circumferenceOfCircle = 2 * pi * radius
console.log(areaOfCircle)
console.log(circumferenceOfCircle)

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
let xIntercept = prompt("Enter value of x")
let xInt = parseInt(xIntercept)
let yInt = 2*xInt - 2
let slopeSol = y
console.log(slopeSol)

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let y2 = parseInt(prompt("Enter y2"))
let y1 = parseInt(prompt("Enter y1"))
let x2 = parseInt(prompt("Enter x2"))
let x1 = parseInt(prompt("Enter x1"))
let m = (y2-y1)/(x2-x1)
let slope = m
console.log(slope)

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = parseInt(prompt("Enter the value of x"))
let y = (x**2+(6*x)+9)
console.log(y) //y is 0 at x=-3

/*
Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
let hoursWork = parseInt(prompt("Enter hour"))
let ratePerHour = parseInt(prompt("Enter rate per hour"))
let weeklyEarning = (hoursWork*ratePerHour)
console.log(weeklyEarning)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt("Enter your name")
let lengthOfName = name.length
if (lengthOfName > 7){
    console.log("Your name is long")
}else{
    console.log("Your name is short")
}

/*
Compare your first name length and your family name length and you should get this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
*/
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
if(firstName.length > lastName.length){
    console.log(`Your first name ${firstName} is longer than your family name, ${lastName}`)
}else{
    console.log(`Your family name ${lastName} is longer than your first name, ${fistName}`)
}

/*
Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/
let myAge = 250
let yourAge = 25
console.log("I am 225 years older than you")

/*
Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
Enter birth year: 1995
You are 25. You are old enough to drive
Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/
let yearOfBirth = parseInt(prompt("Enter year of birth"))
if(yearOfBirth <= 2002){
    console.log("You are old enough to drive")
}else{
    console.log("You will be allowed to drive when you reach 18 years and above")
}

/*
Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
Enter number of years you live: 100
You lived 3153600000 seconds.
*/
let numOfYear = parseInt(prompt("Enter number of years"))
let sec = numOfYear * 365 * 24 *60 * 60
console.log(sec)

/*
Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
let dateTime = new Date()
let yearForm = dateTime.getFullYear()
let monthForm = dateTime.getMonth()
let dateForm = dateTime.getDate()
let hour = dateTime.getHours()
let mins = dateTime.getMinutes()
console.log(`${yearForm}-${monthForm}-${dateForm} ${hour}:${mins}`)
console.log(`${dateForm}-${monthForm}-${yearForm} ${hour}:${mins}`)
console.log(`${dateForm}/${monthForm}/${yearForm} ${hour}:${mins}`)


/***************
 *Exercises: Level 3 
 ***************/

 /*
 Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
 */
const now = new Date()
const year = now.getFullYear() // return year 
let month = now.getMonth() + 1 // return month(0 - 11) 
let date = now.getDate() // return date (1 - 31) 
let hours = now.getHours() // return number (0 - 23) 
let minutes = now.getMinutes() // return number (0 -59)  
if(month<10)     
   month="0" + month 
if (date < 10)    
   date = "0" + date 
if (hours < 10)    
   hours = "0" + hours 
if (minutes < 10)     
   minutes = "0" + minutes  
console.log(`${year}-${month}-${date} ${hours}:${minutes}`)