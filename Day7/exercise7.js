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