// /********
//  *  Exercises: Level 1 
// *********/

// /* Declare a function fullName and it print out your full name. */
// function fullName() {
//     console.log("Charles Obimnaeto Egesionu ")
// }
// fullName()

// /* Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name. */
// function fullName(firstName, lastName){
//     let space = " "
//     return firstName + space + lastName
// }
// console.log(fullName("Charles", "Egesionu" ))

// /* Declare a function addNumbers and it takes two two parameters and it returns sum. */
// function addNumbers(num1, num2){
//     let sum = num1 + num2
//     return sum
// }
// console.log(addNumbers(35, 88))

// /* An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle. */
// function areaOfRectangle(length, width){
//     let area = length*width
//     return area
// }
// console.log(areaOfRectangle(15, 78))

// /* A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
//  */
// function perimeterOfRectangle(length, width){
//      let perimeter = 2 * (length + width)
//      return perimeter 
//  }
//  console.log(perimeterOfRectangle(24, 82))
 
// /* A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism. */
// function volumeOfRectPrism (length, width, height){
//     let volume = length * width * height
//     return volume 
// }
// console.log(volumeOfRectPrism(4, 56, 18))

// /* Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
//  */
// function areaOfCircle (r) {
//      let area = Math.PI * r * r
//      return area
//  }
//  console.log(areaOfCircle(24))
 
// /* Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle */
// function circumOfCircle (r) {
//     let π = Math.PI
//     let circumference = 2 * π * r
//     return circumference
// }
// console.log(circumOfCircle(12))

// /* Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density. */
// function densityOfSubstance (mass, volume ) {
//     let density = mass / volume
//     return density
// }
// console.log(densityOfSubstance(80, 14))

// /* Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
//  */
// function speedOfMovingObject (totalDistance, totalTime){
//      let speed =  totalDistance / totalTime
//      return speed
//  }
//  console.log(speedOfMovingObject(100, 84))
 
//  /* Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight. */
// function weightOfSubstance (mass, gravity){
//      let weight = mass * gravity
//      return weight 
//  }
//  console.log(weightOfSubstance(84, 102))

// /* Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
//  */ 
// function convertCelsiusToFahrenheit (degreeCelsius){
//      let degreeFahrenheit = (degreeCelsius * 9/5) + 32
//      return degreeFahrenheit 
//  }
//  console.log(convertCelsiusToFahrenheit(48))
  
// /* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.

// Underweight: BMI is less than 18.5

// Normal weight: BMI is 18.5 to 24.9

// Overweight: BMI is 25 to 29.9

// Obese: BMI is 30 or more */

// function bodyMassIndex (weight, height){
//     let bmi = weight / (height * height)
//     if(bmi < 18.5){
//         return "Underweight"
//     }else if (bmi >= 18.5 && bmi <= 24.9){
//         return "Normal weight"
//     }else if(bmi >=25 && bmi <=29.9){
//         return "Overweight"
//     }else{
//         return "Obese"
//     }
// }
// console.log(bodyMassIndex(70, 1.8));
// console.log(bodyMassIndex(55, 5.68));
// console.log(bodyMassIndex(90, 1.75));
// console.log(bodyMassIndex(100, 1.8));

// /* Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer. */
// function checkSeason (month){
//     let season = ""
//     switch(month){
//         case "September":
//         case "October":
//         case "November":
//         season = "Autumn";
//         break;
//         case "December":
//         case "January":
//         case "February":
//         season = "Winter";
//         break;
//         case "June":
//         case "July":
//         case "August":
//         season = "Summer";
//         break;
//         case "March":
//         case "April":
//         case "May":
//         season = "Spring";
//         break;
//         default:
//         season = "Not a valid month, please provid a valid month"
//     }
//     return season
// }
// console.log(checkSeason("May"))
// console.log(checkSeason("August"))
// console.log(checkSeason("December"))
// console.log(checkSeason("October"))
// console.log(checkSeason("Mayay"))

// /*
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
// */

// function findMax (num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         return num1
//     }else if(num2 > num1 && num2 > num3){
//         return num2
//     }else{
//         return num3
//     }
// }
// console.log(findMax(0, 10, 5))
// console.log(findMax(0, -10, -2))


/*********
 * Exercises: Level 2
 ********/
// // Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// function solveLinEquation (a,b,c,x,y){
//     let linearEquation = a*x + b*y + c
//     return linearEquation
// }
// console.log(solveLinEquation(2, 3, 4, 5, 6))

// /**
// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// **/
// function solveQuadratic(a, b, c) {
//     if (a === 0) {
//       return {0}; // not a quadratic equation
//     }
//     const delta = b * b - 4 * a * c;
//     if (delta < 0) {
//       return {}; // no real solutions
//     } else if (delta === 0) {
//       const x = -b / (2 * a);
//       return {x};
//     } else {
//       const x1 = (-b + Math.sqrt(delta)) / (2 * a);
//       const x2 = (-b - Math.sqrt(delta)) / (2 * a);
//       return {x1, x2};
//     }
//   }
//   console.log(solveQuadratic()) // {0}
//   console.log(solveQuadratic(1, 4, 4)) // {-2}
//   console.log(solveQuadratic(1, -1, -2)) // {2, -1}
//   console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
//   console.log(solveQuadratic(1, 0, -4)) //{2, -2}
//   console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    
// // Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// let arrToPrint = [1, 9, 7, 2, 3, "Mine", 5, 4, "Love", 8]
// function printArray(arr){
//     for(let i=0; i<arr.length; i++)
//     return arr[i]
// }
// console.log(arrToPrint)

// /*
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08
// */
// function showDateTime() {
//     // Create a new Date object
//     const now = new Date();
  
//     // Extract the date components (day, month, year)
//     const day = now.getDate().toString().padStart(2, '0');
//     const month = (now.getMonth() + 1).toString().padStart(2, '0');
//     const year = now.getFullYear();
  
//     // Extract the time components (hours, minutes)
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
  
//     // Return the formatted date and time string
//     return `${day}/${month}/${year} ${hours}:${minutes}`;
//   }
//   console.log(showDateTime())

// /*
// Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
// */
// function swapValues(x,y){
//     z = x
//     x = y
//     y = z
//     let swap = `x => ${x}, y => ${y}`
//     return swap
// }
// console.log(swapValues(3, 4))
// console.log(swapValues(4, 5))

// /*
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
// */
// function reverseArray(arr){
//     let newReverseArr = []
//     for(let i=arr.length-1; i>=0; i--){
//         newReverseArr.push(arr[i])
//     }
//     return newReverseArr
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))
// console.log(reverseArray(['A', 'B', 'C']))

// // Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// function capitalizeArray (arr){
//     let newCapitalizeArr = []
//     for(let i=0; i<arr.length; i++){
//         newCapitalizeArr.push(arr[i].toUpperCase())
//     }
//     return newCapitalizeArr
// }
// console.log(capitalizeArray(["Umuokpara", "Umuorji", "Umuehi", "Uzinaumu", "Umuabiahu", "Ihite"]))

// // Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// function addItem (item){
//     let newItem = []
//     newItem.push(item)
//     return newItem
// }
// console.log(addItem("Orange"))

// // Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// function removeItem(index){
// let itemArr = ["orange", "mango", "banana", "pear", "watermelon"]
// let itemRemoved = itemArr.splice(index, 1)
// return itemArr
// }
// console.log(removeItem(3))

// // Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// function sumOfNumbers (num) {
//     let sum = 0
//     for(let i=1; i<=num; i++){
//         sum += i
//     }
//     return sum
// }
// console.log(sumOfNumbers(100))

// // Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// function sumOfOdds (num) {
//     let sumOdd = 0
//     for(let i=1; i<=num; i++){
//         if(i % 2 == 1){
//             sumOdd += i
//         }
//     }
//     return sumOdd
// }
// console.log(sumOfOdds(100))

// // Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
// function sumOfEven (num) {
//     let sumEven = 0
//     for(let i=1; i<=num; i++){
//         if(i % 2 == 0){
//             sumEven += i
//         }
//     }
//     return sumEven
// }
// console.log(sumOfEven(100))

// /*
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// */
// function evensAndOdds (int) {
//     let countEven = 0
//     let countOdd = 0
//     for(let i=0; i<=int; i++){
//         if(i % 2 == 0){
//             countEven++
//         }else{
//             countOdd++
//         }
//     }
//     return `The number of odds are ${countOdd}\nThe number of evens are ${countEven}`
// }
// console.log(evensAndOdds(100))

// /*
// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// */
// function sumOfArg (...arg) {
//     let sumArg = 0
//     for(let i=0; i<arg.length; i++){
//         sumArg += arg[i]
//     }
//     return sumArg
// }
// console.log(sumOfArg(1,2,3))
// console.log(sumOfArg(1, 2, 3, 4))

// // Writ a function which generates a randomUserIp.
// function randomUserIp () {
//     let ip = []
//     for(let i=0; i<=4; i++){
//         ip.push(Math.floor(Math.random()*256))
//     }
//     return ip.join(".")
//     /*
//     This function uses a for loop to generate four random numbers between 0 and 255, which represent the four octets of an IP address. The numbers are stored in an array and then joined with periods to form a string representation of the IP address.
//     */
// }
// console.log(randomUserIp())

// // Write a function which generates a randomMacAddress
// function generateRandomMacAddress() {
//     let macAddress = "";
  
//     for (let i = 0; i < 6; i++) {
//       let octet = "";
//       for (let j = 0; j < 2; j++) {
//         octet += Math.floor(Math.random() * 16).toString(16).toUpperCase();
//       }
//       macAddress += octet + (i < 5 ? ":" : "");
//     }
  
//     return macAddress;

//     /*
//     This function uses two nested for loops to generate 6 octets, each of which is composed of two hexadecimal digits. The Math.random() function is used to generate a random number between 0 and 1, which is then multiplied by 16 to generate a random integer between 0 and 15. The toString(16) method is used to convert this integer to a hexadecimal string, and the toUpperCase() method is used to ensure that the string is in uppercase. Finally, the + operator is used to concatenate the two hexadecimal digits, and the : character is added between each octet except for the last one. The resulting string is a random MAC address.
//     */
//   }
//   console.log(generateRandomMacAddress())

// /*
// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
// */
// function randomHexaNumberGenerator() {
//     let hexaDecimalNumber = '';
//     for (let i = 0; i < 6; i++) {
//       // Generate a random number between 0 and 15 (inclusive)
//       const randomNumber = Math.floor(Math.random() * 16);
//       // Convert the random number to a hexadecimal digit
//       const hexDigit = randomNumber.toString(16);
//       // Append the hexadecimal digit to the string
//       hexaDecimalNumber += hexDigit;
//     }
//     // Return the hexadecimal number with a "#" symbol in front
//     return '#' + hexaDecimalNumber;

//     /*
//     This implementation generates a random hexadecimal number by generating 6 random hexadecimal digits one at a time and concatenating them to form the final string. The resulting string is then returned with a "#" symbol in front.

//     This function should produce the same output as the previous implementation, such as "#ee33df".
//     */
//   }
//   console.log(randomHexaNumberGenerator())

// /*
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE
// */
// function userIdGenerator() {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     for (let i = 0; i < 7; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//   }
// console.log(userIdGenerator())  

/**************
 Exercises: Level 3
 **************/