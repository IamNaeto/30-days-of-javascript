/********* 
Exercises
**********/

/***********
Exercise 1
***********/
/*
Store you first name, last name, age, country, city in your browser localStorage.
*/
localStorage.setItem('firstName', 'Charles')

localStorage.setItem('lastName', 'Egesionu')

localStorage.setItem('age', 26)

localStorage.setItem('country', 'Nigeria')

localStorage.setItem('city', 'Jalingo')

//To get the items;
let firstName = localStorage.getItem('firstName')

let lastName = localStorage.getItem('lastName')

let age = localStorage.getItem('age')

let country = localStorage.getItem('country')

let city = localStorage.getItem('city')

console.log(firstName, lastName, age, country, city) //Charles Egesionu 26 Nigeria Jalingo

/*****************
Exercises: Level 2
******************/
/*
Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
*/
const studentObj = {
    firstName: 'Chris',
    lastName: 'Adenugha',
    age: 22,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Python'],
    country: 'Nigeria',
    enrolled: true
}

let newStudent = JSON.stringify(studentObj, undefined, 4)

localStorage.setItem('student', newStudent)

//To get the item
let skillsGet = localStorage.getItem('student')
console.log(skillsGet)


/*****************
Exercises: Level 3
******************/
/*
Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = new Map();
    this.expenses = new Map();
    this.totalIncome = 0;
    this.totalExpense = 0;
  }

  accountInfo() {
    console.log(`Account Information for ${this.firstname} ${this.lastname}:`);
    console.log(`Total Income: ${this.totalIncome}`);
    console.log(`Total Expense: ${this.totalExpense}`);
    console.log(`Account Balance: ${this.accountBalance()}`);
  }

  addIncome(amount, description) {
    this.incomes.set(description, amount);
    this.totalIncome += amount;
  }

  addExpense(amount, description) {
    this.expenses.set(description, amount);
    this.totalExpense += amount;
  }

  accountBalance() {
    return this.totalIncome - this.totalExpense;
  }
}
// create a new person account for John Doe
const john = new PersonAccount("John", "Doe");

// add some incomes and expenses
john.addIncome(1000, "Salary");
john.addIncome(500, "Bonus");
john.addExpense(400, "Rent");
john.addExpense(200, "Food");

// print the account information and balance
john.accountInfo();
