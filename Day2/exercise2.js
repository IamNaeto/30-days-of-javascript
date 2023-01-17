/*****
 *
 *Exercise: Level 1 
 * 
 *****/

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days of JavaScript"

// Print the string on the browser console using console.log()
console.log(challenge)

// Print the length of the string on the browser console using console.log()
console.log(challenge.length)

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(3, 20))
console.log(challenge.substring(3, 21))

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(0, 2))
console.log(challenge.substring(0, 3))

// Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"))

// Split the string into an array using split() method
console.log(challenge.split())

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '))

// Split the string 30 Days Of JavaScript word by word using split() method
console.log(challenge.split(''))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let organizations = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(organizations.split(","))

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"))

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("J"))

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"))

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"))

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf("because"))

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf("because"))

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search("because"))

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challengeTrim = " 30 Days Of JavaScript "
console.log(challengeTrim.trim())

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith("30"))
console.log(challenge.startsWith("3"))

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("JavaScript"))
console.log(challenge.endsWith("t"))

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match("a"))

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let merge = "30 Days of"
console.log(merge.concat(" JavaScript"))

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))



/*****
 *
 *Exercise: Level 2
 * 
 *****/

//  Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
let statement = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(statement)

// Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let motherTeresa = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
console.log(motherTeresa)

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = "10"
let num2 = 10
console.log(typeof(num)=== typeof(num2))
let numInt = parseInt(num)
console.log(typeof(numInt)=== typeof(num2))

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let float1 = parseFloat('9.8')
let float2 = 10
console.log(typeof(float1)=== typeof(float2))

// Check if 'on' is found in both python and jargon
let lang1 = "python"
console.log(lang1.includes("on"))
let lang2 = "jargon"
console.log(lang2.includes("on"))

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let jargon = "I hope this course is not full of jargon. Check if jargon is in the sentence."
console.log(jargon.includes("jargon"))

// Generate a random number between 0 and 100 inclusively.
let random = Math.random()
console.log(random)
let randomNum = random * 101
console.log(randomNum)
let randomNumFloor = Math.floor(randomNum)
console.log(randomNumFloor)

//Generate a random number between 50 and 100 inclusively.
let randomInt = Math.floor(Math.random() * 51) + 50
console.log(randomInt)

// Generate a random number between 0 and 255 inclusively.
let randomBigInt = Math.floor(Math.random() * 256)
console.log(randomBigInt)

/**Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
**/
console.log("1\t1\t1\t1\t1\t\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentenceSlice = "You cannot end a sentence with because because because is a conjunction"
console.log(sentenceSlice.substr(0, 30))

/*****
 *
 *Exercise: Level 3
 * 
 *****/

//  'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let wordCount = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let wordsOccur = /love/gi
console.log(wordCount.match(wordsOccur))

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let count = "You cannot end a sentence with because because because is a conjunction"
let pattern = /because/gi
console.log(count.match(pattern))

/****
 * Clean the following text and find the most frequent word (hint, use replace and regular expressions).
 *const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
 ****/
// remove non-alphabetic characters and convert to lowercase
const cleanedText = sentence.replace(/[^a-zA-Z ]/g, "").toLowerCase();
// split the text into an array of words
const words = cleanedText.split(" ");
// create an object to keep track of word counts
let wordCounts = {};
// iterate through the array and add each word to the object
for (let i = 0; i < words.length; i++) {
    if (wordCounts[words[i]]) {
        wordCounts[words[i]]++;
    } else {
        wordCounts[words[i]] = 1;
    }
}
// find the word with the highest count
let mostFrequentWord = "";
let highestCount = 0;
for (let word in wordCounts) {
    if (wordCounts[word] > highestCount) {
        highestCount = wordCounts[word];
        mostFrequentWord = word;
    }
}
console.log(mostFrequentWord);


// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let txt = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let regEx = /\d+/
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))