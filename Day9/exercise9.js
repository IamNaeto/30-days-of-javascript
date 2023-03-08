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