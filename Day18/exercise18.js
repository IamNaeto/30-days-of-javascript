/*********
Exercises
*********/
/*
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
*/

/*****************
Exercises: Level 1
*****************/
/*
Read the countries API using fetch and print the name of country, capital, languages, population and area.
*/
const countriesAPI = 'https://restcountries.com/v2/all';

fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Country: ${country.name}`);
      console.log(`Capital: ${country.capital}`);
      console.log(`Languages: ${country.languages.map(lang => lang.name).join(', ')}`);
      console.log(`Population: ${country.population}`);
      console.log(`Area: ${country.area}`);
      console.log('----------------------');
    });
  })
  .catch(error => console.error(error));
/*
This code uses the fetch function to make a GET request to the countries API and retrieve the data. It then uses the json method to parse the response data into a JavaScript object. Finally, it loops over the array of countries and logs the requested information for each one.

Note that the languages property of each country is an array of objects, where each object represents a language and has a name property. To print out the names of all the languages for each country, we use the map method to extract the name property from each language object, and then join the resulting array of names into a comma-separated string using the join method.
*/


/*****************
Exercises: Level 2
******************/
/*
Print out all the cat names in to catNames variable.
*/
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
 fetch(catsAPI)
  .then(response => response.json())
  .then(data =>{
    let catName = data.map(cat => cat.name)
      console.log(catName)
    })
  .catch(error => console.error(error))


/*****************
Exercises: Level 3
******************/
/*
Read the cats api and find the average weight of cat in metric unit.
*/
const catsAPI2 = 'https://api.thecatapi.com/v1/breeds';

// Make a request to the API and retrieve the data in JSON format
fetch(catsAPI2)
  .then(response => response.json())
  .then(data => {
    // Initialize variables for the total weight and number of cat breeds
    let totalWeight = 0;
    let numBreeds = 0;

    // Iterate through each cat breed and extract the weight information
    data.forEach(cat => {
      // Check if the weight information is available for this breed
      if (cat.weight.metric) {
        // Split the weight information into an array containing the minimum and maximum weight
        const weightArr = cat.weight.metric.split('-');
        // Convert the minimum and maximum weights to numbers and calculate the average weight
        const avgWeight = (Number(weightArr[0]) + Number(weightArr[1])) / 2;
        // Add the average weight to the total weight and increment the number of cat breeds
        totalWeight += avgWeight;
        numBreeds++;
      }
    });

    // Calculate the average weight of all cat breeds and log the result to the console
    const avgWeight = totalWeight / numBreeds;
    console.log(`The average weight of cats in metric units is ${avgWeight} grams.`);
  })
  .catch(error => console.log(error));


  /*
  Read the countries api and find out the 10 largest countries
  */
  const countriesAPI2 = 'https://restcountries.com/v2/all';

  fetch(countriesAPI2)
    .then(response => response.json())
    .then(data => {
      const sortedCountries = data.sort((a, b) => b.area - a.area);
      const largestCountries = sortedCountries.slice(0, 10);
      largestCountries.forEach(country => {
        console.log(`${country.name} (${country.area} sq km)`);
      });
    })
    .catch(error => console.error(error));
/*
This code uses the fetch function to make a GET request to the countries API and retrieve the data. It then uses the json method to parse the response data into a JavaScript object.

Next, the code sorts the array of countries by their area in descending order using the sort method and a comparison function that compares the area property of each country object.

After sorting the countries, the code creates a new array containing only the 10 largest countries using the slice method.

Finally, the code loops over the array of largest countries and logs the name and area of each country to the console.

Note that the area property of each country is in square kilometers.
*/  


/*
Read the countries api and count total number of languages in the world.
*/
const countriesAPI3 = 'https://restcountries.com/v2/all';

fetch(countriesAPI3)
    .then(response => response.json())
    .then(data =>{
      let count = 0
      data.map(lang => {
        lang.languages;
        count++
      })
      console.log(`Total number of languages in the world is ${count}`)
    })
    .catch(error => console.error(error))


    
/*
Read the countries api and count total number of languages in the world used as officials.
*/
const countriesAPI4 = 'https://restcountries.com/v2/all';

fetch(countriesAPI4)
  .then(response => response.json())
  .then(data => {
    const totalOfficialLanguages = data.reduce((acc, curr) => {
      return acc + curr.languages.filter(lang => lang.hasOwnProperty('official') && lang.official === true).length;
    }, 0);
    console.log(`Total number of official languages in the world: ${totalOfficialLanguages}`);
  })
  .catch(error => console.error(error));
/*
This code uses the fetch function to make a GET request to the countries API and retrieve the data. It then uses the json method to parse the response data into a JavaScript object.

Next, the code uses the reduce method to iterate over the array of countries and accumulate the total number of official languages used by all countries. The reduce method takes a callback function that takes two arguments: an accumulator (acc) and the current value (curr) being iterated over. The callback function filters the languages array of the current country to only include languages that are listed as official and adds the length of that filtered array to the accumulator. The reduce method starts with an initial value of 0 for the accumulator.

After iterating over all the countries, the code logs the total number of official languages in the world to the console.
*/