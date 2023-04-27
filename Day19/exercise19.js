/*********
Exercises
*********/

/*****************
Exercises: Level 1
*****************/
/*
Create a closure which has one inner function
*/
function firstFxn(num1, num2){
    let fxnMultiple = num1 * num2;
    function secFxn (num3){
        num3 = Math.floor(Math.random() * 9) + 1
    if(fxnMultiple % num3 === 0){
        return "Nice one, it's an even number"
    }else{
        return "Oooops, it's an odd number"
    }
}
    return secFxn()
}
let firstNum = firstFxn(14, 26)
let secNum = firstFxn(13, 7)
let thirdNum = firstFxn(3, 18)
console.log(firstNum)
console.log(secNum)
console.log(thirdNum)


/*****************
Exercises: Level 2
******************/
/*
Create a closure which has three inner functions
*/
function outsideFxn (num1, num2){
    let total = num1 + num2;
    function insideFxn(num3 = 2){
        total += Math.floor(Math.random() * 9) + 1
        return total
    }
    function moreInsideFxn(num4){
        num4 = Math.floor(Math.random() * 9) + 1
        total *= num4
        return total
    }
    function lastInsideFxn(num5){
        num5 = Math.floor(Math.random() * 9) + 1
        total /= num5
        return Math.floor(total)
    }
    return{
        insideFxn : insideFxn(),
        moreInsideFxn : moreInsideFxn(),
        lastInsideFxn : lastInsideFxn()
    }
}
let arthFxn = outsideFxn(4, 6)
console.log(arthFxn.insideFxn)
console.log(arthFxn.moreInsideFxn)
console.log(arthFxn.lastInsideFxn)


/*****************
Exercises: Level 3
*****************/
/*
Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/