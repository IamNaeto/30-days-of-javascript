/* Exercise

Exercise: Level 1

const countries = [ 'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya' ] 

const webTechs = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ] */

/* Declare an empty array; */
let emptyArr = []

/* Declare an array with more than 5 number of elements */
let arrNum = [1,2,3,4,5,6,7]

/* Find the length of your array */
let length = arrNum.length
console.log(length)

/* Get the first item, the middle item and the last item of the array */
let elements = []
let mid = Math.floor(arrNum.length/2)
let end = arrNum.length-1
for(let i=0; i<arrNum.length; i++){
    if(i==0){
        elements.push(arrNum[i])
    }else if(i==mid){
        elements.push(arrNum[i])                
    }else if(i==end){
        elements.push(arrNum[i])
        }
}        
console.log(elements)

/* Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5 */
let mixedDataTypes = [1,2,"Charles",true, "Egesionu", false]
let lengthOfArr = mixedDataTypes.length
console.log(lengthOfArr)

/* Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon */

let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

/* Print the array using console.log() */
console.log(companies)

/* Print the number of companies in the array */
let numOfCompanies = companies.length
console.log(numOfCompanies)

/* Print the first company, middle and last company */
let newCompanies = []
let midCompany = Math.floor(companies.length/2)
let endCompany = companies.length-1
for(let i=0; i<companies.length; i++){
    if(i==0){
        newCompanies.push(companies[i])
    }else if(i==midCompany){
        newCompanies.push(companies[i])                
    }else if(i==endCompany){
        newCompanies.push(companies[i])
        }
}        
console.log(newCompanies)


/* Print out each company */
for(let i=0; i<companies.length; i++){
    console.log(companies[i])
}

/* Change each company name to uppercase one by one and print them out */
for(let i=0; i<companies.length; i++){
    console.log(companies[i].toUpperCase())
}

/* Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. */
let IT = companies.join(", ").concat(" are big IT companies")
console.log(IT)

/* Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found */
let index = companies.indexOf("Apple")
if(index == -1){
    console.log("Company is not found")
}else{
    console.log("Company exists")
}

/* alternatively;  */

let itCompanies = "Microsoft"
if(companies.includes(itCompanies)){
    console.log(`${itCompanies} exists`)
}else{
    console.log(`${itCompanies} is not found`)
}
/* Filter out companies which have more than one 'o' without the filter method */
let newIt = []
for(let i=0; i<companies.length; i++){
    let comp = companies[i].match(/o/gi)
        if(comp == null){
        newIt.push(companies[i])
        }else if(comp.length == 1){
            newIt.push(companies[i])
        }
}
console.log(newIt)
// alternatively
let itNew = []
for(let itComp of companies){
    let compIt = itComp.match(/o/gi)
        if(compIt == null){
            itNew.push(itComp)
        }else if(compIt.length == 1){
            itNew.push(itComp)
        }
}
console.log(itNew)
// alternatively
let newComp = []
for(let i=0; i<companies.length; i++){
    if(companies[i].indexOf("o") == companies[i].lastIndexOf("o") || companies[i].indexOf("o")  < 0 ){
        newComp.push(companies[i])
    }
}
console.log(newComp)

// Sort the array using sort() method
let sortedCompanies = companies.sort()
console.log(sortedCompanies)

// Reverse the array using reverse() method
let reversedCompanies = sortedCompanies.reverse()
console.log(reversedCompanies)

// Slice out the first 3 companies from the array
let sliceCompanies = reversedCompanies.slice(0, 3)
console.log(sliceCompanies)

// Slice out the last 3 companies from the array
let lastSlice = reversedCompanies.slice(4, 7)
console.log(lastSlice)

// Slice out the middle IT company or companies from the array
let midSlice = reversedCompanies.slice(3,4)
console.log(midSlice)

// Remove the first IT company from the array
let firstRemove = reversedCompanies.shift()
console.log(reversedCompanies)
console.log(firstRemove)

// Remove the middle IT company or companies from the array
let itRefreshed = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let companiesLen = itRefreshed.splice(3,1)
console.log(itRefreshed)

// Remove the last IT company from the array
let lastSplice = itRefreshed.splice(5,1)
console.log(itRefreshed)

// alternatively
let popIt = itRefreshed.pop()
console.log(itRefreshed)
console.log(popIt)


// Remove all IT companies
let popAll = itRefreshed.splice()
console.log(popAll)

/*
Exercise: Level 2
*/

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

/*
First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
13
*/
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let newText = text.replace(/[!@#$%^&*()[|],.?;':"s]/g).split(" ")
console.log(newText)
console.log(newText.length)

/*
In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)
shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)
shoppingCart.splice(4,1)
console.log(shoppingCart)
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries.includes("Ethiopia"))
for (let i = 0; i < countries.length; i++){
    if(countries[i]=="Ethiopia"){
        console.log(countries[i].toUpperCase())
        break;
    }
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
console.log(webTechs.includes("Sass"))
for(let i = 0; i < webTechs.length; i++){
    if(webTechs[i] != "Sass"){
        webTechs.push("Sass")
        console.log(webTechs)
        break;
    }
}
console.log(webTechs[7])

/*
Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

/******
Exercise: Level 3
*******/
/*
The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortedAge = ages.sort()
console.log(sortedAge)
let min = Math.min(...sortedAge)
console.log(min)
let max = Math.max(...sortedAge)
console.log(max)


// alternatively
let minAge = 19
let maxAge = 26
for(let i=0; i<sortedAge.length; i++){
    if(sortedAge[i] <= minAge){
        console.log(sortedAge[i])
    }else if(sortedAge[i] >= maxAge){
        console.log(sortedAge[i])
    }
}

// Find the median age(one middle item or two middle items divided by two)
let ageLength = Math.floor(sortedAge.length/2)
console.log(ageLength)
for(let i=0; i<sortedAge.length; i++){
    if(ageLength % 2 == 1){
        console.log((sortedAge[ageLength - 1] + sortedAge[ageLength])/2)
    }else if(ageLength % 2 == 0){
        console.log(sortedAge[ageLength]/2)
    }
}

// Find the average age(all items divided by number of items)
let ageSizeLength = sortedAge.length
// console.log(ageSizeLength)
let sum = 0
for(let i=0; i<sortedAge.length; i++){
    sum = sum + sortedAge[i]
}
console.log(sum/ageSizeLength)

// Find the range of the ages(max minus min)
let maxNum = Math.max(...ages)
// console.log(maxNum)
let minNum = Math.min(...ages)
// console.log(minNum)
let range = maxNum - minNum
console.log(range)

// Compare the value of (min - average) and (max - average), use abs() method
let average = sum/(ages.length)
console.log(average)
let compareMin = Math.abs(minNum - average)
console.log(compareMin)
let compareMax = Math.abs(maxNum - average)
console.log(compareMax)

// Slice the first ten countries from the countries array
let countriesSlice = countriesFull.slice(0, 10)
console.log(countriesSlice)

// Find the middle country(ies) in the countries array
let midCountry = Math.floor(countriesFull.length/2)
console.log(midCountry)
for(let i=0; i<countriesFull.length; i++){
    if(countriesFull.length % 2 == 0){
        console.log(countriesFull[midCompany - 1], countriesFull[midCountry])
        break;
    }else{
        console.log(countriesFull[midCountry])
        break;
    }
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
for(let i=0; i<countriesFull.length; i++){
    if(countriesFull.length % 2 == 0){
        console.log(countriesFull.slice(0, 96), countriesFull.slice(96))
        break;
    }else{
        let oddCountries1 = countriesFull.slice(0, 96)
        oddCountries1.push("NewCountry")
        let oddCountries2 = countriesFull.slice(96)
        console.log(oddCountries1, oddCountries2)
        break;
    }
}