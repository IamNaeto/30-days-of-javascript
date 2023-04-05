/*************
Exercises: Level 1
**************/

/*
Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
*/
function calculateTotalAnnualIncome(monthlySalaries, onlineCoursesPerMonth, annualBonus){
totalMonthlyIncome = monthlySalaries +onlineCoursesPerMonth;
totalAnnualIncome = (totalMonthlyIncome *  12) + annualBonus;
return totalAnnualIncome;
}
let salaries = 4000;
let onlineCourses = 5500;
let bonus = 10000
annualIncome = calculateTotalAnnualIncome(salaries, onlineCourses, bonus)
console.log(`The total annual income is ${annualIncome} euros.`)

/*
The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12
*/
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const particles = points.filter(p => parseInt(p) !== 0).map(p => parseInt(p));
const sortedParticles = particles.sort((a, b) => a - b);
const distance = sortedParticles[sortedParticles.length - 1] - sortedParticles[0];
console.log(distance); 

/*
Write a pattern which identify if a string is a valid JavaScript variable

is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True
*/

function validVariable(variable){
    let pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
    let ifValid = variable;
    let result = pattern.test(ifValid);
    return result;
}
console.log(validVariable('first_name'))
console.log(validVariable('first-name'))
console.log(validVariable('1first_name'))
console.log(validVariable('firstname'))

/******************
Exercises: Level 2
******************/
/*
Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

    paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    console.log(tenMostFrequentWords(paragraph))
    [
    {word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1},
    {word:'to', count:1},
    {word:'the', count:1},
    {word:'something', count:1},
    {word:'if', count:1},
    {word:'give', count:1},
    {word:'develop',count:1},
    {word:'capabilities',count:1},
    {word:'application', count:1},
    {word:'an',count:1},
    {word:'all',count:1},
    {word:'Python',count:1},
    {word:'If',count:1}]
    console.log(tenMostFrequentWords(paragraph, 10))
    [{word:'love', count:6},
    {word:'you', count:5},
    {word:'can', count:3},
    {word:'what', count:2},
    {word:'teaching', count:2},
    {word:'not', count:2},
    {word:'else', count:2},
    {word:'do', count:2},
    {word:'I', count:2},
    {word:'which', count:1}
    ]
*/
function tenMostFrequentWords(str, num=10) {
  // replace all non-letter characters with a space and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z]/g, ' ').toLowerCase();
  
  // split the string into an array of words
  const words = cleanedStr.split(' ');
  
  // create a dictionary to store word frequency counts
  const wordCounts = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }
  
  // sort the words by frequency count in descending order
  const sortedWords = Object.keys(wordCounts).sort((a, b) => wordCounts[b] - wordCounts[a]);
  
  // return the top `num` most frequent words with their counts
  const result = [];
  for (let i = 0; i < num && i < sortedWords.length; i++) {
    const word = sortedWords[i];
    result.push({ word, count: wordCounts[word] });
  }
  return result;
}
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))

/*
Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
  sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
  console.log(cleanText(sentence))
*/
function cleanText(text) {
  const cleaned = text.replace(/[^\w\s]|_/g, '') // Remove non-alphanumeric characters
                     .replace(/\s+/g, ' ') // Replace multiple spaces with single space
                     .toLowerCase() // Convert to lowercase
                     .trim(); // Remove leading/trailing spaces
  const words = cleaned.split(' ');
  const counts = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word in counts) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  }
  const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
  return sorted.slice(0, 3).map(word => ({word, count: counts[word]}));
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
console.log(cleanText(sentence));
