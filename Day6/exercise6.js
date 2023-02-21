/*****
Exercises:Day 6
******/
/*
Exercises: Level 1
*/


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']


// Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i=0; i<=10; i++){
    console.log(i)
}

let x = 0
while(x <= 10){
    console.log(x)
    x++
}

let i = 0
do{
    console.log(i)
    i++
}while(i <= 10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i = 10; i >= 0; i--){
    console.log(i)
}

let k = 10
while(k >= 0){
    console.log(k)
    k--
}

let j = 10
do{
    console.log(j)
    j--
}while(j >= 0)

// Iterate 0 to n using for loop
let n = 10
for(let i=0; i<=n; i++){
    console.log(i)
}

/*
Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

for(let i=0; i<=7; i++){
    console.log("#".repeat(i))
}

/*
Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for(let i=0; i<=10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

/*
Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
for(let i=0; i<=10; i++){
    console.log(`${i}\t ${i**2}\t ${(i**3)}`)
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0; i<=100; i++){
    if(i%2 == 0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i=0; i<=100; i++){
    if(i%2!=0){
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for(let i=0; i<=100; i++){
    let notPrime = false
    for(let j=2; j<=i; j++){
        if(i%j===0 && i!=j){
            notPrime = true
        }
    }if(notPrime===false){
            console.log(i)
    }
}


/*
Use for loop to iterate from 0 to 100 and print the sum of all numbers.

The sum of all numbers from 0 to 100 is 5050.
*/
let sum = 0
for(let i=0; i<=100; i++){
    sum += i
}
console.log(sum)

/*
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
*/
let sumOfEven = 0
let sumOfOdd = 0
for(let i=0; i<=100; i++){
    if(i%2==0){
        sumOfEven += i
    }else{
        sumOfOdd += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdd}`)

/*
Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  [2550, 2500]
*/
let sumOfEvenNum = 0
let sumOfOddNum = 0
for(let i=0; i<=100; i++){
    if(i%2==0){
        sumOfEvenNum += i
    }else{
        sumOfOddNum += i
    }
}
console.log([sumOfEvenNum, sumOfOddNum])

// Develop a small script which generate array of 5 random numbers
let randNum = []
for(let i=0, j=5; i<j; i++){
    let rand = Math.floor(Math.random()*20)
    randNum.push(rand)
}
console.log(randNum)
// alternatively
let rand = [];
while(rand.length < 5){
    let randomArr = Math.floor(Math.random() * 20);
    rand.push(randomArr);
}
console.log(rand);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arr = [];
while(arr.length < 5){
    let randArr = Math.floor(Math.random() * 100);
    if(arr.indexOf(randArr) === -1) arr.push(randArr);
}
console.log(arr);

/*
Develop a small script which generate a six characters random id:

5j2khz
*/
const result = Math.random().toString(36).substring(2,8);
console.log(result);


/**********
Exercises: Level 2
***********/
/*
Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
*/
const charRandom = Math.random().toString(36).substring(2)
console.log(charRandom)

/*
Write a script which generates a random hexadecimal number.

'#ee33df'
*/
const hex = Math.floor(Math.random()*16777215).toString(16)
console.log(`#${hex}`)

/*
Write a script which generates a random rgb color number.

rgb(240,180,80)
*/
let r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);

let rgbString = r + "," + g + "," + b;
console.log(`rgb(${rgbString})`)

/*
Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
let newCountriesArr = []
for(let i=0; i<countries.length; i++){
    newCountriesArr.push(countries[i].toUpperCase())
}
console.log(newCountriesArr)


// Using the above countries array, create an array for countries length'.
let arrLength = []
for (let i=0; i<countries.length; i++){
    arrLength.push(countries[i].length)
}
console.log(arrLength)

/*
Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
let newCountries = []
for(let i=0; i<countries.length; i++){
    // newCountries.push(countries[i])
    // newCountries.push(countries[i].slice(0,3).toUpperCase())
    // newCountries.push(countries[i].length)
    let coun1 = (countries[i])
    let conu2 = (countries[i].slice(0,3).toUpperCase())
    let coun3 = (countries[i].length)
    newCountries.push([coun1, conu2, coun3])
}
console.log(newCountries)

/*
In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland']
*/
let withLand = []
for(let i=0; i<countries.length; i++){
    if(countries[i].includes("land")){
        withLand.push(countries[i])
    }
}
console.log(withLand)

/*
In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']
*/
let endsWith = []
for(let i=0; i<countries.length; i++){
    if(countries[i].includes("ia")){
      endsWith.push(countries[i])
    }
}
console.log(endsWith)

/*
Using the above countries array, find the country containing the biggest number of characters.

Ethiopia
*/
let maxLen = 0
let maxCountry = ""
for(let i=0; i<countries.length; i++){
    if(countries[i].length > maxLen){
      maxLen = countries[i].length
      maxCountry = countries[i]
    }
}
console.log(maxCountry)

/*
Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']
*/
let fiveChar = []
for(let i=0; i<countries.length; i++){
    if(countries[i].length == 5){
      fiveChar.push(countries[i])
    }
}
console.log(fiveChar)

// Find the longest word in the webTechs array
let longWord = 0
let word = ""
for(let i=0; i<webTechs.length; i++){
  if(webTechs[i].length>longWord){
    longWord = webTechs[i].length
    word = webTechs[i]
  }
}
console.log(word)

/*
Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/
let newWebTechs = []
for(let i=0; i<webTechs.length; i++){
  newWebTechs.push([webTechs[i], webTechs[i].length])
}
console.log(newWebTechs)

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernStackArr = []
let mernStackStr = ""
for(let i=0; i<mernStack.length; i++){
  mernStackArr.push(mernStack[i].slice(0,1))
  mernStackStr = mernStackArr.join("")
}
console.log(mernStackStr)

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
let fullStackArr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
let newFullStackArr = []
for(let i=0; i<fullStackArr.length; i++){
  newFullStackArr.push(fullStackArr[i])
}
console.log(newFullStackArr)

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit = ['banana', 'orange', 'mango', 'lemon']
let newFruit = []
for(let i=fruit.length-1; i>=0; i--){
  newFruit.push(fruit[i])
}
console.log(newFruit)

/*
Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for(let i=0; i<fullStack.length; i++){
  for(let j=0; j<fullStack[i].length; j++){
    console.log(fullStack[i][j])
  }
}

/**********
Exercises: Level 3
**********/
// Copy countries array(Avoid mutation)

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

// Sort the webTechs array and mernStack array
 const sortedWebTechs = webTechs.sort()
 console.log(sortedWebTechs)

 const sortedMernStack = mernStack.sort()
 console.log(sortedMernStack)

// Extract all the countries contain the word 'land' from the countries array and print it as array

// Find the country containing the hightest number of characters in the countries array

// Extract all the countries contain the word 'land' from the countries array and print it as array

// Extract all the countries containing only four characters from the countries array and print it as array

// Reverse the countries array and capitalize each country and stored it as an array