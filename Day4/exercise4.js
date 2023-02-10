/********
Exercises: Level 1
*******/

/*
Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/

let age = parseInt(prompt("Enter your age"))
if(age >= 18){
  console.log("You are old enough to drive.")
}else if(age < 18){
  let below = 18 - age
  console.log(`You are left with ${below} years to drive`)
}else{
  console.log("Please put in your age and try again")
}

/*
Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.
*/

let myAge = 26
let yourAge = parseInt(prompt("How old are you"))
if(myAge == yourAge){
  console.log("We are of the same age bracket")
}else if(myAge > yourAge){
  let ageAbove = myAge - yourAge
  console.log(`I am ${ageAbove} years older than you`)
}else if (myAge < yourAge){
  let ageBelow = yourAge - myAge
  console.log(`You are ${ageBelow} years older than me`)
}else{
  console.log("Please input a valid age")
}

/*
If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways.
using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3
*/
let a = 4
let b = 3
if(a > b){
  console.log(`${a} is greater than ${b}`)
}else{
  console.log(`${b} is greater than ${a}`)
}

let compare = a > b
? console.log(`${a} is greater than ${b}`)
: console.log(`${b} is greater than ${a}`)

/*
Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/

let num = parseInt(prompt("Enter a number"))
if(num % 2 == 0){
  console.log(`${num} is an even number`)
}else{
  console.log(`${num} is an odd number`)
}


/**********
 *Exercises: Level 2 
***********/
/*
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let score = parseInt(prompt("Enter your score"))
if(score >= 80){
  console.log("A")
}else if(score >= 70){
  console.log("B")
}else if(score >= 60){
  console.log("C")
}else if(score >= 50){
  console.log("D")
}else{
  console.log("F")
}

/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

let month = prompt("What month are we in?")
let season = month.toLowerCase()
if(season == "september" || season == "october" || season == "november"){
  console.log("The season is Autum")
}else if(season == "december" || season == "january" || season == "february"){
  console.log("The season is Winter")
}else if(season == "march" || season == "april" || season == "may"){
  console.log("The season is Spring")
}else if(season == "june" || season == "july" || season == "august"){
  console.log("The season is Summer")
}else{
  console.log("Not a valid month")
}

/*
Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/

let day = prompt("What is the day?").toLowerCase()
let res = ""
switch(day){
  case "monday":
    res = `${day} is a working day`;
    break;
  case "tuesday":
    res = `${day} is a working day`;
    break;
  case "wednesday":
    res = `${day} is a working day`;
    break;
  case "thursday":
    res = `${day} is a working day`;
    break;
  case "friday":
    res = `${day} is a working day`;
    break;
  case "saturday":
    res = `${day} is a weekend`;
    break;
  case "sunday":
    res = `${day} is a weekend`;
    break;
  default:
      res = "invalid day"
}
console.log(res)

/*
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/

let months = prompt("Enter a month").toLowerCase()
let days = ""
switch(months){
    case "september":
    case "april":
    case "june":
    case "november":
        days = `${months} has 30 days`;
        break;
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        days = `${months} has 31 days`;
        break;
    case "febuary":
        days = `${months} has 28 days`;
        break;
    default:
        days = "Not a valid months";
        break;
}
console.log(days)

// Write a program which tells the number of days in a month, now consider leap year.

let monthInput = prompt("Enter a month").toLowerCase()
let daysOfMonth = ""
switch(monthInput){
    case "september":
    case "april":
    case "june":
    case "november":
        daysOfMonth = `${daysOfMonth} has 30 days`;
        break;
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        daysOfMonth = `${daysOfMonth} has 31 days`;
        break;
    case "febuary":
        daysOfMonth = `${daysOfMonth} has 29 days`;
        break;
    default:
        daysOfMonth = "Not a valid months";
        break;
}
console.log(daysOfMonth)