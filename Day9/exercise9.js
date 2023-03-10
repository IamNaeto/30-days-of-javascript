/*************
 Exercises: Level 1
**************/

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/*
Explain the difference between forEach, map, filter, and reduce.
*/
// forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.
// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.
// Filter: Filter out items which full fill filtering conditions and return a new array.
// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

/*
Use forEach to console.log each country in the countries array.
*/
countries.forEach((country) => console.log(country))

/*
Use forEach to console.log each name in the names array.
*/
names.forEach((name) => console.log(name))

/*
Use forEach to console.log each number in the numbers array.
*/
numbers.forEach((num) => console.log(num))

/*
Use map to create a new array by changing each country to uppercase in the countries array.
*/
const countriesUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesUpperCase)

/*
Use map to create an array of countries length from countries array.
*/
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)

/*
Use map to create a new array by changing each number to square in the numbers array
*/
const numSquared = numbers.map((num) => num ** 2)
console.log(numSquared)

/*
Use map to change to each name to uppercase in the names array
*/
const namesUpper = names.map((name) => name.toUpperCase())
console.log(namesUpper)

/*
Use map to map the products array to its corresponding prices.
*/
const productCorres = products.map((product) => product.price)
console.log(productCorres)

/*
Use filter to filter out countries containing land.
*/
const countriesWithLand = countries.filter((country) => country.includes("land"))
console.log(countriesWithLand)

/*
Use filter to filter out countries having six character.
*/
const countriesWithSixChar = countries.filter((country) => country.length === 6)
console.log(countriesWithSixChar)

/*
Use filter to filter out countries containing six letters and more in the country array.
*/
const countriesWithMoreThanSixChar = countries.filter((country) => country.length >= 6)
console.log(countriesWithMoreThanSixChar)

/*
Use filter to filter out country start with 'E';
*/
const countryStartWithE = countries.filter((country) => country.startsWith("E"))
console.log(countryStartWithE)

/*
Use filter to filter out only prices with values.
*/
const pricesWithValues = products.filter((priceInit) => typeof priceInit.price === "number" && priceInit.price).map((priceInit) => priceInit.price)
console.log(pricesWithValues)

/*
Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
*/
function getStringLists (arr) {
  const newArr = arr.filter((array) => typeof array === "string")
  return newArr
}
console.log(getStringLists (["ada", "obi", "ijeoma", 6, 8, 5, "chioma"]))

/*
Use reduce to sum all the numbers in the numbers array.
*/
const sumAll = numbers.reduce((acc, cur) => acc + cur,0)
console.log(sumAll)

/*
Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
*/
const concatenatedCountries = countries.reduce((acc, curr, index) => {
  if (index === 0) {
    return curr;
  } else if (index === countries.length - 1) {
    return `${acc}, and ${curr}`;
  } else {
    return `${acc}, ${curr}`;
  }
});

console.log(`${concatenatedCountries} are north European countries`);

/*
Explain the difference between some and every
*/
// some: Check if some of the elements are similar in one aspect. It returns boolean
// every: Check if all the elements are similar in one aspect. It returns boolean

/*
Use some to check if some names' length greater than seven in names array
*/
const namesLen = names.some((name) => name.length > 7) 
console.log(namesLen)

/*
Use every to check if all the countries contain the word land
*/
const countriesContain = countries.every((country) => country.includes("land"))
console.log(countriesContain)

/*
Explain the difference between find and findIndex.
*/
// find: Return the first element which satisfies the condition
// findIndex: Return the position of the first element which satisfies the condition

/*
Use find to find the first country containing only six letters in the countries array
*/
const firstCountry = countries.find((country) => country.length === 6)
console.log(firstCountry)

/*
Use findIndex to find the position of the first country containing only six letters in the countries array
*/
const countryFindIndex = countries.findIndex((country) => country.length === 6)
console.log(countryFindIndex)

/*
Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
*/
const NorwayPos = countries.findIndex((country) => country === "Norway")
console.log(NorwayPos)

/*
Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
*/
const russiaPos = countries.findIndex((country) => country === "Russia")
console.log(russiaPos)


/***************
Exercises: Level 2
****************/