// /********
//  *  Exercises: Level 1 
// *********/

/* Declare a function fullName and it print out your full name. */
function fullName() {
    console.log("Charles Obimnaeto Egesionu ")
}
fullName()

/* Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name. */
function fullName(firstName, lastName){
    let space = " "
    return firstName + space + lastName
}
console.log(fullName("Charles", "Egesionu" ))

/* Declare a function addNumbers and it takes two two parameters and it returns sum. */
function addNumbers(num1, num2){
    let sum = num1 + num2
    return sum
}
console.log(addNumbers(35, 88))

/* An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle. */
function areaOfRectangle(length, width){
    let area = length*width
    return area
}
console.log(areaOfRectangle(15, 78))

/* A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
 */
function perimeterOfRectangle(length, width){
     let perimeter = 2 * (length + width)
     return perimeter 
 }
 console.log(perimeterOfRectangle(24, 82))
 
/* A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism. */
function volumeOfRectPrism (length, width, height){
    let volume = length * width * height
    return volume 
}
console.log(volumeOfRectPrism(4, 56, 18))

/* Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
 */
function areaOfCircle (r) {
     let area = Math.PI * r * r
     return area
 }
 console.log(areaOfCircle(24))
 
/* Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle */
function circumOfCircle (r) {
    let π = Math.PI
    let circumference = 2 * π * r
    return circumference
}
console.log(circumOfCircle(12))

/* Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density. */
function densityOfSubstance (mass, volume ) {
    let density = mass / volume
    return density
}
console.log(densityOfSubstance(80, 14))

/* Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
 */
function speedOfMovingObject (totalDistance, totalTime){
     let speed =  totalDistance / totalTime
     return speed
 }
 console.log(speedOfMovingObject(100, 84))
 
 /* Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight. */
function weightOfSubstance (mass, gravity){
     let weight = mass * gravity
     return weight 
 }
 console.log(weightOfSubstance(84, 102))

/* Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
 */ 
function convertCelsiusToFahrenheit (degreeCelsius){
     let degreeFahrenheit = (degreeCelsius * 9/5) + 32
     return degreeFahrenheit 
 }
 console.log(convertCelsiusToFahrenheit(48))
  
/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.

Underweight: BMI is less than 18.5

Normal weight: BMI is 18.5 to 24.9

Overweight: BMI is 25 to 29.9

Obese: BMI is 30 or more */

function bodyMassIndex (weight, height){
    let bmi = weight / (height * height)
    if(bmi < 18.5){
        return "Underweight"
    }else if (bmi >= 18.5 && bmi <= 24.9){
        return "Normal weight"
    }else if(bmi >=25 && bmi <=29.9){
        return "Overweight"
    }else{
        return "Obese"
    }
}
console.log(bodyMassIndex(70, 1.8));
console.log(bodyMassIndex(55, 5.68));
console.log(bodyMassIndex(90, 1.75));
console.log(bodyMassIndex(100, 1.8));

/* Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer. */
function checkSeason (month){
    let season = ""
    switch(month){
        case "September":
        case "October":
        case "November":
        season = "Autumn";
        break;
        case "December":
        case "January":
        case "February":
        season = "Winter";
        break;
        case "June":
        case "July":
        case "August":
        season = "Summer";
        break;
        case "March":
        case "April":
        case "May":
        season = "Spring";
        break;
        default:
        season = "Not a valid month, please provid a valid month"
    }
    return season
}
console.log(checkSeason("May"))
console.log(checkSeason("August"))
console.log(checkSeason("December"))
console.log(checkSeason("October"))
console.log(checkSeason("Mayay"))

/*
Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/

function findMax (num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1
    }else if(num2 > num1 && num2 > num3){
        return num2
    }else{
        return num3
    }
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))


/*********
 * Exercises: Level 2
 ********/
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation (a,b,c,x,y){
    let linearEquation = a*x + b*y + c
    return linearEquation
}
console.log(solveLinEquation(2, 3, 4, 5, 6))

/**
Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
**/
function solveQuadratic(a, b, c) {
    if (a === 0) {
      return 0; // not a quadratic equation
    }
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      return {}; // no real solutions
    } else if (delta === 0) {
      const x = -b / (2 * a);
      return {x};
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return {x1, x2};
    }
  }
  console.log(solveQuadratic()) // {0}
  console.log(solveQuadratic(1, 4, 4)) // {-2}
  console.log(solveQuadratic(1, -1, -2)) // {2, -1}
  console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
  console.log(solveQuadratic(1, 0, -4)) //{2, -2}
  console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let arrToPrint = [1, 9, 7, 2, 3, "Mine", 5, 4, "Love", 8]
function printArray(arr){
    for(let i=0; i<arr.length; i++)
    return arr[i]
}
console.log(arrToPrint)

/*
Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08
*/
function showDateTime() {
    // Create a new Date object
    const now = new Date();
  
    // Extract the date components (day, month, year)
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
  
    // Extract the time components (hours, minutes)
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
  
    // Return the formatted date and time string
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  console.log(showDateTime())

/*
Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
*/
function swapValues(x,y){
    z = x
    x = y
    y = z
    let swap = `x => ${x}, y => ${y}`
    return swap
}
console.log(swapValues(3, 4))
console.log(swapValues(4, 5))

/*
Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
*/
function reverseArray(arr){
    let newReverseArr = []
    for(let i=arr.length-1; i>=0; i--){
        newReverseArr.push(arr[i])
    }
    return newReverseArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray (arr){
    let newCapitalizeArr = []
    for(let i=0; i<arr.length; i++){
        newCapitalizeArr.push(arr[i].toUpperCase())
    }
    return newCapitalizeArr
}
console.log(capitalizeArray(["Umuokpara", "Umuorji", "Umuehi", "Uzinaumu", "Umuabiahu", "Ihite"]))

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem (item){
    let newItem = []
    newItem.push(item)
    return newItem
}
console.log(addItem("Orange"))

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index){
let itemArr = ["orange", "mango", "banana", "pear", "watermelon"]
let itemRemoved = itemArr.splice(index, 1)
return itemArr
}
console.log(removeItem(3))

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers (num) {
    let sum = 0
    for(let i=1; i<=num; i++){
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(100))

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds (num) {
    let sumOdd = 0
    for(let i=1; i<=num; i++){
        if(i % 2 == 1){
            sumOdd += i
        }
    }
    return sumOdd
}
console.log(sumOfOdds(100))

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven (num) {
    let sumEven = 0
    for(let i=1; i<=num; i++){
        if(i % 2 == 0){
            sumEven += i
        }
    }
    return sumEven
}
console.log(sumOfEven(100))

/*
Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
*/
function evensAndOdds (int) {
    let countEven = 0
    let countOdd = 0
    for(let i=0; i<=int; i++){
        if(i % 2 == 0){
            countEven++
        }else{
            countOdd++
        }
    }
    return `The number of odds are ${countOdd}\nThe number of evens are ${countEven}`
}
console.log(evensAndOdds(100))

/*
Write a function which takes any number of arguments and return the sum of the arguments
sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
*/
function sumOfArg (...arg) {
    let sumArg = 0
    for(let i=0; i<arg.length; i++){
        sumArg += arg[i]
    }
    return sumArg
}
console.log(sumOfArg(1,2,3))
console.log(sumOfArg(1, 2, 3, 4))

// Writ a function which generates a randomUserIp.
function randomUserIp () {
    let ip = []
    for(let i=0; i<=4; i++){
        ip.push(Math.floor(Math.random()*256))
    }
    return ip.join(".")
    /*
    This function uses a for loop to generate four random numbers between 0 and 255, which represent the four octets of an IP address. The numbers are stored in an array and then joined with periods to form a string representation of the IP address.
    */
}
console.log(randomUserIp())

// Write a function which generates a randomMacAddress
function generateRandomMacAddress() {
    let macAddress = "";
  
    for (let i = 0; i < 6; i++) {
      let octet = "";
      for (let j = 0; j < 2; j++) {
        octet += Math.floor(Math.random() * 16).toString(16).toUpperCase();
      }
      macAddress += octet + (i < 5 ? ":" : "");
    }
  
    return macAddress;

    /*
    This function uses two nested for loops to generate 6 octets, each of which is composed of two hexadecimal digits. The Math.random() function is used to generate a random number between 0 and 1, which is then multiplied by 16 to generate a random integer between 0 and 15. The toString(16) method is used to convert this integer to a hexadecimal string, and the toUpperCase() method is used to ensure that the string is in uppercase. Finally, the + operator is used to concatenate the two hexadecimal digits, and the : character is added between each octet except for the last one. The resulting string is a random MAC address.
    */
  }
  console.log(generateRandomMacAddress())

/*
Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
console.log(randomHexaNumberGenerator());
'#ee33df'
*/
function randomHexaNumberGenerator() {
    let hexaDecimalNumber = '';
    for (let i = 0; i < 6; i++) {
      // Generate a random number between 0 and 15 (inclusive)
      const randomNumber = Math.floor(Math.random() * 16);
      // Convert the random number to a hexadecimal digit
      const hexDigit = randomNumber.toString(16);
      // Append the hexadecimal digit to the string
      hexaDecimalNumber += hexDigit;
    }
    // Return the hexadecimal number with a "#" symbol in front
    return '#' + hexaDecimalNumber;

    /*
    This implementation generates a random hexadecimal number by generating 6 random hexadecimal digits one at a time and concatenating them to form the final string. The resulting string is then returned with a "#" symbol in front.

    This function should produce the same output as the previous implementation, such as "#ee33df".
    */
  }
  console.log(randomHexaNumberGenerator())

/*
Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
*/
function userIdGenerator() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
console.log(userIdGenerator())  


/**************
 Exercises: Level 3
 **************/
/*
Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
*/
function userIdGeneratedByUser() {
  const charCount = parseInt(prompt("Enter the number of characters:"));
  const idCount = parseInt(prompt("Enter the number of ids to generate:"));
  let userIds = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for (let i = 0; i < idCount; i++) {
    let id = "";
    for (let j = 0; j < charCount; j++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    userIds += id + "\n";
  }
  return userIds;
  /*
  The function prompts the user to enter the number of characters and the number of ids to generate, and then generates the specified number of user ids, each with the specified number of characters. The function returns a string containing all the generated user ids, separated by newline characters.

    You can call the function userIdGeneratedByUser() to generate user ids based on the user inputs.
  */
}
console.log(userIdGeneratedByUser())

/*
Write a function name rgbColorGenerator and it generates rgb colors.
rgbColorGenerator()
rgb(125,244,255)
*/
function rgbColorGenerator (){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    return `rgb(${r},${g},${b})`
}
console.log(rgbColorGenerator())

/*
Write a function name rgbColorGenerator and it generates rgb colors.
rgbColorGenerator()
rgb(125,244,255)
*/
function arrayOfHexaColors(numColors) {
    const hexaChars = "0123456789abcdef";
    const colors = [];
    
    for (let i = 0; i < numColors; i++) {
      let color = "#";
      for (let j = 0; j < 6; j++) {
        color += hexaChars[Math.floor(Math.random() * 16)];
      }
      colors.push(color);
    }
    
    return colors;
  }
  console.log(arrayOfHexaColors(6))
  /*
  Here's an explanation of how this function works:

The hexaChars variable is a string that contains all the valid characters for a hexadecimal color code.
The colors variable is an empty array that will store the generated colors.
The for loop runs numColors times and generates a random hexadecimal color in each iteration.
The inner for loop runs 6 times to generate a 6-digit hexadecimal color code. In each iteration, it randomly selects a character from the hexaChars string and appends it to the color variable.
Finally, the generated color is added to the colors array using the push method.
The function returns the colors array containing all the generated colors.
  */

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
    // Remove the '#' character if it exists
    hex = hex.replace('#', '');
  console.log(hex)
    // Parse the hexadecimal color string to integers
    let r = parseInt(hex.substring(0, 2), 16);
    console.log(r)
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
  
    // Return the RGB color string
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
let hexColor = '#ff0000'; // Red
let rgbColor = convertHexaToRgb(hexColor); // 'rgb(255, 0, 0)'
console.log(rgbColor);

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(r, g, b) {
    // Convert each color component to a two-digit hexadecimal string
    var rHex = ('0' + r.toString(16)).slice(-2);
    var gHex = ('0' + g.toString(16)).slice(-2);
    var bHex = ('0' + b.toString(16)).slice(-2);
  
    // Concatenate the three hexadecimal strings to form the final color string
    var hexaColor = '#' + rHex + gHex + bHex;
  
    return hexaColor;
  }
  // Convert the RGB color (255, 192, 203) to a hexadecimal color string
var hexaColor = convertRgbToHexa(255, 192, 203);
console.log(hexaColor); // Outputs: "#ffc0cb"

/*
Write a function generateColors which can generate any number of hexa or rgb colors.
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/
function generateColors(type, count) {
  const colors = [];
  
  for (let i = 0; i < count; i++) {
    if (type === 'hexa') {
      // Generate a random 6-digit hex string
      const hex = `#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`;
      colors.push(hex);
    } else if (type === 'rgb') {
      // Generate a random RGB string
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const rgb = `rgb(${r}, ${g}, ${b})`;
      colors.push(rgb);
    } else {
      throw new Error('Invalid color type: ' + type);
    }
  }
  
  return count === 1 ? colors[0] : colors;
}
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
/*
In this implementation, we use Math.random() to generate random values for the red, green, and blue components of the colors. If type is 'hexa', we generate a random 6-digit hex string by generating a random integer between 0 and 0xFFFFFF (inclusive), converting it to a hexadecimal string using toString(16), and padding it with zeroes using padStart(6, '0'). If type is 'rgb', we generate a random RGB string using template literals.
*/

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
  // create a copy of the original array to avoid modifying it directly
  const shuffledArr = [...arr];
  // loop through the array from the last element to the second
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    const j = Math.floor(Math.random() * (i + 1));
    // swap the current element with the randomly selected element
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr;
}

console.log(shuffleArray([1,2,3,4,5,6,7,8,9]))
/*
This implementation uses the Fisher-Yates shuffle algorithm to shuffle the elements of the array in place. The function creates a copy of the original array to avoid modifying it directly, then loops through the array from the last element to the second, generating a random index between 0 and i and swapping the current element with the randomly selected element. This process ensures that each element in the array has an equal probability of being selected and swapped, resulting in a truly random shuffle.
*/

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial (num) {
    if(num < 0){
        throw new Error("Factroial is not defined for negative numbers")
    }
    let result = 1
    for(let i=1; i<=num; i++){
        result *= i
    }
    return result
}
console.log(factorial(0))

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty (para) {
    if(para === undefined || para === null || para === "" || para === " "){
        return "Parameter is empty"
    }else{
        return "Parameter is not empty"
    }
}
console.log(isEmpty(" "))
console.log(isEmpty(""))
console.log(isEmpty(null))
console.log(isEmpty(undefined))
console.log(isEmpty("Hello World"))

// Call your function sum, it takes any number of arguments and it returns the sum.
function sum (...para) {
    let sum = 0
    for(let i=0; i<para.length; i++){
        sum += para[i]
    }
    return sum
}
console.log(sum(1,2,3,4,5,6,7,8,9))

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems (arr) {
    let summedArr = 0
    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i]) === "number"){
            summedArr += arr[i]
        }else{
            return "Some of the array parameters are not number types, please provide an array that are number type throughout"
        }
    }
    return summedArr
}
console.log(sumOfArrayItems([1,2,3,4,5,6,7,8,9]))
console.log(sumOfArrayItems([1,2,"3",4,"5",6,7,'8',9]))

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
  let arrSum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return "Error: All items in the array must be numbers";
    }
    arrSum += arr[i];
    count++;
  }

  return arrSum / count;
}
console.log(average([1,2,3,4,5,6,7,8,9]))
console.log(average([1,2,"3",4,"5",6,7,'8',9]))

/*
Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'
*/
function modifyArray (arr) {
    if(arr.length < 5){
        return 'Not found'
    }else{
        arr[4] = arr[4].toUpperCase()
        return arr
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

// Write a function called isPrime, which checks if a number is prime number.
function isPrime (num) {
    if(num <= 1){
        return false
    }
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
console.log(isPrime(17))
console.log(isPrime(20))
console.log(isPrime(15))
console.log(isPrime(3))
/*
The function first checks if the given number is 1 or any negative number. If it is, the function returns false.
The function then checks for prime numbers from 2 to the square root of the given number. It does this by iterating over all numbers from 2 to the square root of the given number. If the given number is divisible by any of these numbers, then it is not a prime number and the function returns false.
If the given number is not divisible by any number from 2 to the square root of the given number, then it is a prime number. The function returns true.
*/

// Write a functions which checks if all items are unique in the array.
function allUnique (arr) {
    for(let i=0; i<arr.length; i++){
        for(let j = i + 1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                return false
            }
        }
    }
    return true
}
const arr1 = [1, 2, 3, 4, 5, 2];
console.log(allUnique(arr1)); // true

const arr2 = [1, 2, 3, 4, 5, 1];
console.log(allUnique(arr2)); // false

// Write a function which checks if all the items of the array are the same data type.
function sameDataType (arr) {
    for(let i=0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(typeof (arr[i]) !== (typeof arr[j])){
                return false
            }
        }
        return true
    }
    // return true
}
console.log(sameDataType([2,3,4,5,6,7,8,9]))
console.log(sameDataType(['a','b','c',1,2,3,4,5]))

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variableName) {
    // If the variable name is empty or starts with a number, it is invalid.
    if (!variableName || /^[0-9]/.test(variableName)) {
      return false;
    }
  
    // Otherwise, check that each character is valid.
    for (let i = 0; i < variableName.length; i++) {
      const char = variableName[i];
      if (!/^[a-zA-Z0-9_$]/.test(char)) {
        return false;
      }
    }
  
    // If we made it this far, the variable name is valid!
    return true;
  }
  console.log(isValidVariable("myArr"))
  console.log(isValidVariable("*arr"))
/*
This function first checks if the variable name is empty or starts with a number, since those are not allowed in JavaScript variable names. If either of those cases is true, it immediately returns false.

If the variable name passes that initial check, the function then loops through each character in the name and checks if it is valid. A valid character is either a letter, a number, $, or _.

If any character is found that is not valid, the function returns false. Otherwise, if it has checked every character and found them all to be valid, it returns true.
*/

/*
Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
*/
function sevenRandomNumber () {
    let newRandom = []
    while (newRandom.length <7){
        let random = Math.floor(Math.random() * 10)
        if(!newRandom.includes(random)){
            newRandom.push(random)
        }
    }
    return newRandom
}
console.log(sevenRandomNumber())

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const countries = [
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
    'Botswana']
function reverseCountries (arr) {
    let newCountries = arr
    newCountries.reverse()
    return newCountries
}
console.log(reverseCountries(countries))