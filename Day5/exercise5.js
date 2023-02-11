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