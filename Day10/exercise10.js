/****************
Exercises:Level 1
*****************/
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

/*
create an empty set
*/
const emptySet = new Set()
console.log(emptySet)

/*
Create a set containing 0 to 10 using loop
*/
const setOfNum = new Set()
for(let i = 0; i<=10; i++){
  setOfNum.add(i)
}
console.log(setOfNum)

/*
Remove an element from a set
*/
const removeNum = setOfNum.delete(10)
console.log(setOfNum)

/*
Clear a set
*/
const clearNum = setOfNum.clear()
console.log(setOfNum)

/*
Create a set of 5 string elements from array
*/
let arr = ['mango', 'apple', 'banana', 'orange', 'pinapple']
const setOfArr = new Set(arr)
console.log(setOfArr)

/*
Create a map of countries and number of characters of a country
*/
let countriesAndCHarNum = [
['Afghanistan',	11],
['Albania',	7],
['Algeria',	7],
['Andorra',	7],
['Angola',	6],
['Antigua and Barbuda',	18],
['Argentina',	9],
['Armenia',	7],
['Australia',	9],
['Austria',	7],
['Azerbaijan',	10],
]
const countiresMap = new Map(countriesAndCHarNum)
console.log(countiresMap)


/****************
Exercises:Level 2
*****************/
/*
Find a union b
*/
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)

/*
Find a intersection b
*/
let A1 = new Set(a)
let B1 = new Set(b)
let c1 = a.filter((num) => B.has(num))
let C1 = new Set(c1)
console.log(C1)

/*
Find a with b
*/
let A2 = new Set(a)
let B2 = new Set(b)
let c2 = a.filter((num) => !B2.has(num))
let C2 = new Set(c2)
console.log(C2)


/****************
Exercises:Level 3
****************/

/*
How many languages are there in the countries object file.
*/

/*
Use the countries data to find the 10 most spoken languages:

   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
*/