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
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products.map((product) => Number(product.price)).filter((prices) => !isNaN(prices)).reduce((total, price) => total + price, 0)
console.log(totalPrice)

// Find the sum of price of products using only reduce reduce(callback))
const sumOfPrices = products.reduce((total, product) => {
  const price = Number(product.price)
  if (!isNaN(price)){
    return total + price
  }
  return total
}, 0)
console.log(sumOfPrices)

/*
Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
*/
function categorizeCountries (countries) {
  const patterns = ['land', 'ia', 'island','stan']
  const result = []

  for(let country of countries){
    for(let pattern of patterns){
      if(country.toLowerCase().includes(pattern)){
        result.push(country)
      }
    }
  }
  return result
}
const countriesFull = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
console.log(categorizeCountries(countriesFull))

/*
Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
*/
function countCountriesByFirstLetter(countries) {
  let counts = {};
  for (let country of countries) {
    let firstLetter = country[0].toUpperCase();
    if (counts[firstLetter]) {
      counts[firstLetter]++;
    } else {
      counts[firstLetter] = 1;
    }
  }
  return Object.entries(counts).map(([letter, count]) => ({letter, count}));
}
let countriesArr = ['Australia', 'Brazil', 'Canada', 'Denmark', 'Egypt', 'France', 'Germany', 'Hungary', 'India', 'Japan', 'Korea', 'Liberia', 'Mexico', 'Nigeria', 'Oman', 'Poland', 'Qatar', 'Russia', 'Spain', 'Turkey', 'Ukraine', 'Vietnam', 'Wales', 'Yemen', 'Zambia'];
let counts = countCountriesByFirstLetter(countriesArr);
console.log(counts);

/*
Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
*/
function getFirstTenCountries () {
  return countriesFull.slice(0, 10)
}
console.log(getFirstTenCountries())

// Using filter to get the first 10 countries
const getFirstTenCountries1 = () => {
  return countriesFull.filter((country, index) => index < 10);
};
console.log(getFirstTenCountries1())

// Using map and slice to get the first 10 country names
const getFirstTenCountries2 = () => {
  return countriesFull.map((country) => country).slice(0, 10);
};
console.log(getFirstTenCountries2())

// Using reduce to get the first 10 countries
const getFirstTenCountries3 = () => {
  return countriesFull.reduce((result, country, index) => {
    if (index < 10) {
      result.push(country);
    }
    return result;
  }, []);
};
console.log(getFirstTenCountries3())

/*
Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
*/
function getLastTenCountries () {
  return countriesFull.slice(-10)
}
console.log(getLastTenCountries())

// using map, slice and reverse
function getLastTenCountries1 () {
  return countriesFull.map((country) => country).reverse().slice(0, 10).reverse()
  // map make a shallow copy of the array
  // first reverse, reverse the array to get the countries in descending order
  // slice get the first 10 countries in the array
  // last reverse reverse the array again to restore the original order
}
console.log(getLastTenCountries1())


/*
Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
*/
const countCountryInitials = () => {
  const initials = countriesFull.map(country => country[0].toUpperCase()); // get the first letter of each country name and convert it to uppercase
  const frequencies = {};
  for (const initial of initials) { // loop through the initials array and count the frequency of each letter
    if (frequencies[initial]) {
      frequencies[initial]++;
    } else {
      frequencies[initial] = 1;
    }
  }
  let mostFrequentInitial = null;
  let highestFrequency = 0;
  for (const initial in frequencies) { // loop through the frequencies object and find the most frequent initial
    if (frequencies[initial] > highestFrequency) {
      mostFrequentInitial = initial;
      highestFrequency = frequencies[initial];
    }
  }
  return mostFrequentInitial;
};

console.log(countCountryInitials()); 


/****************
Exercises: Level 3
****************/
/*
Use the countriesData information, in this folder. Sort countries by name, by capital, by population
*/

/*
Find the 10 most spoken languages:
// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]```
*/

/*
Use countries_data.js file create a function which create the ten most populated countries

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]
```
*/


/*
Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/
/*
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/