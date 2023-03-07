/**************
 Exercises: Level 1
 **************/
// Create an empty object called dog
const dog = {}


// Print the the dog object on the console
console.log(dog) //{}


// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "sparky"
dog.legs = 4
dog.color = "brown"
dog.age = 10
dog.bark = function() {
  return "woof woof";
  };
console.log(dog)


// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())


// Set new properties the dog object: breed, getDogInfo
dog.breed = "german shephard"
dog.getDogInfo = function (){
    return `My dog name is ${this.name}, it has ${this.legs} legs, it is ${this.color} in color and is ${this.age} years old. His barking pattern is ${this.bark()} while it's breed is ${this.breed}`
}
console.log(dog)
console.log(dog.getDogInfo())



/***************
Exercises: Level 2
****************/
/*** Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}``` 
***/
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let maxSkills = 0;
let skillfulUser = '';

for (let i = 0; i < Object.keys(users).length; i++) {
  const user = Object.keys(users)[i];
  const numSkills = users[user].skills.length;
  if (numSkills > maxSkills) {
    maxSkills = numSkills;
    skillfulUser = user;
  }
}

console.log(skillfulUser); // "Asab"



// Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0;
let highPointUsers = 0;

const userKeys = Object.keys(users);

for (let i = 0; i < userKeys.length; i++) {
  const user = userKeys[i];

  if (users[user].isLoggedIn === true) {
    loggedInUsers++;
  }
  
  if (users[user].points >= 50) {
    highPointUsers++;
  }
}

console.log(loggedInUsers); // 2
console.log(highPointUsers); // 3

// alternatively using for in loop
let loggeddInUsers = 0;
let highestPointUsers = 0;

for (const user in users) {
  if (users[user].isLoggedIn === true) {
    loggeddInUsers++;
  }
  
  if (users[user].points >= 50) {
    highestPointUsers++;
  }
}

console.log(loggeddInUsers); // 2
console.log(highestPointUsers); // 3



// Find people who are MERN stack developer from the users object
const mernStack = []
for(const user in users){
    let skills = users[user].skills
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')){
        mernStack.push(user)
    }
}
console.log(mernStack)

// Set your name in the users object without modifying the original users object
const newUsers = {...users}; // create a copy of the users object
newUsers['Charles'] = {
  email: 'egesionucharlesobimnaeto@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 25,
  isLoggedIn: true,
  points: 100
};

console.log(newUsers);

// Get all keys or properties of users object
const user = Object.keys(users)
console.log(user)

// Get all the values of users object
const userValues = Object.values(users)
console.log(userValues)

// Use the countries object to print a country name, capital, populations and languages.
const countries ={
  countryName: "Nigeria",
  capital: "Abuja",
  population: 350000000,
  languages: ["Igbo", "Hausa", "Yoruba", "Fulani"]
}
console.log(countries)
console.log(countries.countryName)
console.log(countries.capital)
console.log(countries.population)
console.log(countries.languages)


/**************
Exercises: Level 3
**************/
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "John",
  lastName: "Doe",
  incomes: [],
  expenses: [],

  addIncome: function(description, amount) {
    if (typeof amount === "number" && amount > 0) {
      this.incomes.push({ description, amount });
    } else {
      console.log("Amount must be a positive number");
    }
  },

  addExpense: function(description, amount) {
    if (typeof amount === "number" && amount > 0) {
      this.expenses.push({ description, amount });
    } else {
      console.log("Amount must be a positive number");
    }
  },

  totalIncome: function() {
    let total = 0;
    for (let income of this.incomes) {
      total += income.amount;
    }
    return total;
  },

  totalExpense: function() {
    let total = 0;
    for (let expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  },

  accountInfo: function() {
    return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
  },

  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};
personAccount.addIncome("Salary", 2000);
personAccount.addIncome("Bonus", 500);
personAccount.addExpense("Rent", 800);
personAccount.addExpense("Food", 200);

console.log(personAccount.totalIncome()); // Output: 2500
console.log(personAccount.totalExpense()); // Output: 1000
console.log(personAccount.accountInfo()); // Output: First Name: John\nLast Name: Doe\nTotal Income: 2500\nTotal Expense: 1000
console.log(personAccount.accountBalance()); // Output: 1500


/*
**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
*/
const userrs = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]


/* Imagine you are getting the above users collection from a MongoDB database. 
a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.*/
function signUp(newUser) {
  // Check if user already exists
  let userExists = false;
  for (let i = 0; i < userrs.length; i++) {
    if (userrs[i].email === newUser.email) {
      userExists = true;
      break;
    }
  }

  if (userExists) {
    console.log('User already exists');
  } else {
    // Add new user to users array
    userrs.push(newUser);
    console.log('User added successfully');
  }
}
/*
In this implementation, the for loop iterates through the users array and checks if the email property of each user is equal to the email property of the new user object. If there is a match, the function sets the userExists variable to true and breaks out of the loop.

If userExists is true, it means that a user with the same email already exists in the users array, so the function prints "User already exists" to the console.

If userExists is false, it means that the new user does not exist in the users array yet, so the function pushes the new user object to the users array with users.push(newUser), and prints "User added successfully" to the console.

Note that this implementation does not use the some method or a callback function, but it is a bit more verbose than the previous implementation.
*/
// Call signUp function with a new user object
const newUser = {
  _id: 'ij34kl',
  username: 'John',
  email: 'john@john.com',
  password: '123456',
  createdAt:'08/02/2020 10:00 AM',
  isLoggedIn: false
};
signUp(newUser);
// Check if the new user was added to the users array
console.log(userrs);
/*
In this example, we create a new user object called newUser with a unique email address. We then call the signUp function with this new user object, which should add the user to the users array since no user with the same email exists.

After calling the signUp function, we print the users array to the console to check if the new user was added. If the user was added successfully, we should see the new user object at the end of the users array.
*/


//b. Create a function called signIn which allows user to sign in to the application
function signIn(email, password) {
  // Check if user with email exists
  let userExists = false;
  let userIndex = -1;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      userExists = true;
      userIndex = i;
      break;
    }
  }

  // If user exists, check password
  if (userExists) {
    if (users[userIndex].password === password) {
      users[userIndex].isLoggedIn = true;
      console.log('Sign in successful');
    } else {
      console.log('Incorrect password');
    }
  } else {
    console.log('User not found');
  }
}
/*
The signIn function takes two arguments, email and password, which are used to identify and authenticate the user.

First, the function checks if a user with the given email exists in the users array. If a user is found, the function checks if the provided password matches the user's password. If the password is correct, the isLoggedIn property of the user object is set to true, indicating that the user is now signed in. If the password is incorrect, the function prints an error message indicating that the password is incorrect.

If no user with the given email is found, the function prints an error message indicating that the user was not found.

Here's an example of how to use the signIn function:
*/
// Call signIn function with valid email and password
signIn('alex@alex.com', '123123');
// Check if Alex is now logged in
console.log(users);

// Call signIn function with invalid email and password
signIn('jane@jane.com', 'password');


// Call signIn function with valid email and incorrect password
signIn('brook@brook.com', 'incorrect');
/*
In this example, we call the signIn function with a valid email and password for Alex, which should log him in and update the isLoggedIn property of his user object to true. We then print the users array to the console to check if Alex is now logged in.

Next, we call the signIn function with an invalid email and password, which should print an error message indicating that the user was not found.

Finally, we call the signIn function with a valid email and an incorrect password, which should print an error message indicating that the password is incorrect.
*/



/*
The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product
*/
function rateProduct(productId, userId, rating) {
  let productIndex = -1;
  // Find the index of the product in the products array
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      productIndex = i;
      break;
    }
  }
  // If the product is not found, log an error message and return
  if (productIndex === -1) {
    console.log('Product not found');
    return;
  }
  let ratingUpdated = false;
  // Update the user's rating if they've already rated the product
  for (let i = 0; i < products[productIndex].ratings.length; i++) {
    if (products[productIndex].ratings[i].userId === userId) {
      products[productIndex].ratings[i].rate = rating;
      ratingUpdated = true;
      console.log('Rating updated');
      break;
    }
  }
  // Add a new rating if the user hasn't already rated the product
  if (!ratingUpdated) {
    products[productIndex].ratings.push({ userId: userId, rate: rating });
    console.log('Rating added');
  }
}
/*
This version of the function uses simple for loops to iterate over the products array and ratings array, respectively, to find the product and user ratings. We use a variable called productIndex to keep track of the index of the product in the array, and we use a variable called ratingUpdated to keep track of whether the user has already rated the product. If ratingUpdated is true, we update the existing rating with the new rating value. If ratingUpdated is false, we add a new rating object to the ratings array with the given userId and rating values.

Again, it's worth noting that in a real-world application, we might want to include additional validation and error handling to ensure that the productId, userId, and rating values are valid and to handle any errors that may occur during the rating process.
*/
console.log('Initial products:', products);

rateProduct('eedfcf', 'fg12cy', 4.5);
console.log('After rating eedfcf by fg12cy to 4.5:', products);

rateProduct('aegfal', 'zwf8md', 3);
console.log('After rating aegfal by zwf8md to 3:', products);

rateProduct('invalidId', 'testUser', 5);
console.log('After attempting to rate invalidId:', products);



/*
 Create a function called averageRating which calculate the average rating of a product
*/
function averageRating(productId, products) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId && products[i].ratings.length > 0) {
      for (let j = 0; j < products[i].ratings.length; j++) {
        sum += products[i].ratings[j].rate;
      }
      count = products[i].ratings.length;
      break;
    }
  }
  if (count === 0) {
    return 0;
  }
  return sum / count;
}
/*
This function iterates over the products array using a for loop and checks if the current product matches the productId and has any ratings. If a matching product with ratings is found, it iterates over the ratings array and calculates the sum of the ratings using a for loop. It also sets the count variable to the length of the ratings array.

After the loop, the function checks if the count variable is 0, in which case it returns 0. Otherwise, it calculates and returns the average rating.

You can call the function as follows:
*/
console.log(averageRating('eedfcf', products)); // Output: 4.75
console.log(averageRating('aegfal', products)); // Output: 0
console.log(averageRating('nonexistent', products)); // Output: 0
// The first call calculates the average rating of the product with _id 'eedfcf', which is (5 + 4.5) / 2 = 4.75. The second call checks the product with _id 'aegfal', which has no ratings and returns 0. The third call checks a nonexistent product and returns 0.


/*
Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
*/
function likeProduct(productId, userId, products) {
  for (var i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      if (products[i].likes.includes(userId)) {
        products[i].likes.splice(products[i].likes.indexOf(userId), 1);
        return 'Like removed';
      } else {
        products[i].likes.push(userId);
        return 'Product liked';
      }
    }
  }
  return 'Product not found';
}
//This function takes three parameters: productId (string), userId (string), and products (array of objects). It loops through the products array and checks if the productId matches the _id property of any product in the array. If it finds a match, it checks if the userId is already in the likes array of that product. If it is, it removes the userId from the likes array and returns 'Like removed'. If it isn't, it adds the userId to the likes array and returns 'Product liked'. If it doesn't find a product with the given productId, it returns 'Product not found'.

console.log(likeProduct('aegfal', 'fg12cy', products)); // Product liked
console.log(likeProduct('aegfal', 'fg12cy', products)); // Like removed
console.log(likeProduct('nonexistent', 'fg12cy', products)); // Product not found

/*
The first call to likeProduct will like the product with _id 'aegfal' for the user with userId 'fg12cy'. It should return 'Product liked'.

The second call to likeProduct will remove the like for the same product and user. It should return 'Like removed'.

The third call to likeProduct is trying to like a product that doesn't exist in the products array. It should return 'Product not found'.
*/