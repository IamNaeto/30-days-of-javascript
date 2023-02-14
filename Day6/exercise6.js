// /*****
// Exercises:Day 6
// ******/
// /*
// Exercises: Level 1
// */

// /*
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// */

// // Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(let i=0; i<=10; i++){
//     console.log(i)
// }

// let x = 0
// while(x <= 10){
//     console.log(x)
//     x++
// }

// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i <= 10)

// // Iterate 10 to 0 using for loop, do the same using while and do while loop
// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

// let k = 10
// while(k >= 0){
//     console.log(k)
//     k--
// }

// let j = 10
// do{
//     console.log(j)
//     j--
// }while(j >= 0)

// // Iterate 0 to n using for loop
// let n = 10
// for(let i=0; i<=n; i++){
//     console.log(i)
// }

// /*
// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
// */

// for(let i=0; i<=7; i++){
//     console.log("#".repeat(i))
// }

// /*
// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// */

// for(let i=0; i<=10; i++){
//     console.log(`${i} * ${i} = ${i * i}`)
// }

// /*
// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// */
// for(let i=0; i<=10; i++){
//     console.log(`${i}\t ${i**2}\t ${(i**3)}`)
// }

// // Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i=0; i<=100; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// // Use for loop to iterate from 0 to 100 and print only odd numbers
// for(let i=0; i<=100; i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }

// // Use for loop to iterate from 0 to 100 and print only prime numbers
// for(let i=0; i<=100; i++){
//     let notPrime = false
//     for(let j=2; j<=i; j++){
//         if(i%j===0 && i!=j){
//             notPrime = true
//         }
//     }if(notPrime===false){
//             console.log(i)
//     }
// }


// /*
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.
// */
// let sum = 0
// for(let i=0; i<=100; i++){
//     sum += i
// }
// console.log(sum)

// /*
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// */
// let sumOfEven = 0
// let sumOfOdd = 0
// for(let i=0; i<=100; i++){
//     if(i%2==0){
//         sumOfEven += i
//     }else{
//         sumOfOdd += i
//     }
// }
// console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdd}`)

// /*
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//   [2550, 2500]
// */
// let sumOfEvenNum = 0
// let sumOfOddNum = 0
// for(let i=0; i<=100; i++){
//     if(i%2==0){
//         sumOfEvenNum += i
//     }else{
//         sumOfOddNum += i
//     }
// }
// console.log([sumOfEvenNum, sumOfOddNum])

// // Develop a small script which generate array of 5 random numbers
// let randNum = []
// for(let i=0, j=5; i<j; i++){
//     let rand = Math.floor(Math.random()*20)
//     randNum.push(rand)
// }
// console.log(randNum)
// // alternatively
// let rand = [];
// while(rand.length < 5){
//     let randomArr = Math.floor(Math.random() * 20);
//     rand.push(randomArr);
// }
// console.log(rand);

// // Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let arr = [];
// while(arr.length < 5){
//     let randArr = Math.floor(Math.random() * 100);
//     if(arr.indexOf(randArr) === -1) arr.push(randArr);
// }
// console.log(arr);

/*
Develop a small script which generate a six characters random id:

5j2khz
*/
const result = Math.random().toString(36).substring(2,8);
console.log(result);
