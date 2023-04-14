/****************
Exercises Level 1
*****************/
/*
Create an Animal class. The class will have name, age, color, legs properties and create different methods
*/
class animal{
    constructor(name = "Hen", age = 21, color = "White", legsProp = 2){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legsProp = legsProp;
        this.eye = 0;
        this.children = []
    }
    info(){
        const info = this.name + " " + `is` + " " + this.age + " " + `years old`
        return info
    }
    get getEye(){
        return this.eye
    }
    get getChildren(){
        return this.children
    }
    set setEye(eye){
        this.eye += eye
    }
    set setChildren(children){
        this.children.push(children)
    }
    fullInfo(){
        let fullInfomat = this.info()
        let infoDetails = `${fullInfomat}. It has ${this.color} color and ${this.legsProp} legs.`
        return infoDetails
    }
    static favouriteChildren(){
        const theChildren = ("firstChild", "secondChild", "thirdChild", "fourthChild", "fifthChild")
        const index = Math.floor(Math.random() * theChildren.length)
        return theChildren[index]
    }
    static showTimeDate(){
        let now = new Date()
        let year = now.getFullYear
        
    }
}
const firstAnimal = new animal()
console.log(firstAnimal)
const secondAnimal = new animal("Goat", 52, "Grey", 4)
console.log(secondAnimal)
console.log(firstAnimal.info())
console.log(firstAnimal.eye)
console.log(firstAnimal.children)
console.log(secondAnimal.eye)
console.log(secondAnimal.children)
console.log(firstAnimal.getEye)
console.log(firstAnimal.getEye)
console.log(secondAnimal.getChildren)
console.log(secondAnimal.getChildrens)

firstAnimal.setEye = 2
firstAnimal.setChildren = "firstBorn"
firstAnimal.setChildren = "secondBorn"
firstAnimal.setChildren = "thirdBorn"

secondAnimal.setEye = 2
secondAnimal.setChildren = "firstBorn"
secondAnimal.setChildren = "secondBorn"
secondAnimal.setChildren = "thirdBorn"

console.log(firstAnimal.eye)
console.log(firstAnimal.children)
console.log(secondAnimal.eye)
console.log(secondAnimal.children)

console.log(firstAnimal.fullInfo())
console.log(secondAnimal.fullInfo())

/*
Create a Dog and Cat child class from the Animal Class.
*/
class dog extends animal{
    saySomthing(){
        console.log("I am a bull-dog")
    }
}
const theDog = new dog("Bull", 21, "White", 4)
console.log(theDog)
console.log(theDog.saySomthing())
console.log(theDog.info())

class cat extends animal{
    soundsMade(){
        console.log("Meow, Meow")
    }
}
const wildCat = new cat("WildCat", 58, "Camoflag", 4)
console.log(wildCat)
console.log(wildCat.soundsMade())
console.log(wildCat.info())


/**********
Exercise 2
**********/
/*
Override the method you create in Animal class
*/
class sheep extends animal{
    constructor(name, age, color, legsProp, gender){
        super(name, age, color, legsProp, gender)
        this.gender = gender
    }
    sheepLang(){
        console.log("Sleep blaaa")
    }
    fullInfo(){
        let fullInfomat = this.info()
        let infoDetails = `${fullInfomat}. It has ${this.color} color and ${this.legsProp} legs.`
        return infoDetails
    }   
}

let sheepy = new sheep("Sheep", 35, "Gray", 4, "Female" )

let sheepySheep = new sheep("Lamb-Sheep", 41, "White and Black", 8, "Male")

sheepy.setEye = 4
sheepy.setChildren = "firstSheep"
sheepy.setChildren = "secondSheep"
sheepy.setChildren = "thirdSheep"

sheepySheep.setEye = 4
sheepySheep.setChildren = "firstLamb"
sheepySheep.setChildren = "secondLamb"
sheepySheep.setChildren = "thirdLamb"

console.log(sheepy)
console.log(sheepySheep)
console.log(sheepy.info())
console.log(sheepySheep.info())
console.log(sheepy.fullInfo())
console.log(sheepySheep.fullInfo())
console.log(sheepy.children)
console.log(sheepy.eye)
console.log(sheepySheep.children)
console.log(sheepySheep.eye)

/**********
Exercise 3
**********/
/*
Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// you output should look like this
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/
class Statistics {
  constructor(sample) {
    this.sample = sample;
  }

  // Method to calculate the count of sample
  count() {
    return this.sample.length;
  }

  // Method to calculate the sum of sample
  sum() {
    let sum = 0;
    for (let i = 0; i < this.sample.length; i++) {
      sum += this.sample[i];
    }
    return sum;
  }

  // Method to calculate the minimum value of sample
  min() {
    let min = this.sample[0];
    for (let i = 1; i < this.sample.length; i++) {
      if (this.sample[i] < min) {
        min = this.sample[i];
      }
    }
    return min;
  }

  // Method to calculate the maximum value of sample
  max() {
    let max = this.sample[0];
    for (let i = 1; i < this.sample.length; i++) {
      if (this.sample[i] > max) {
        max = this.sample[i];
      }
    }
    return max;
  }

  // Method to calculate the mean of sample
  mean() {
    return this.sum() / this.count();
  }

  // Method to calculate the median of sample
  median() {
    const sortedSample = this.sample.sort();
    const middle = Math.floor(this.count() / 2);
    return this.count() % 2 === 0
      ? (sortedSample[middle - 1] + sortedSample[middle]) / 2
      : sortedSample[middle];
  }

  // Method to calculate the mode of sample
  mode() {
    const frequency = {};
    let mode = [];
    let maxFrequency = 0;

    for (let i = 0; i < this.sample.length; i++) {
      const val = this.sample[i];
      if (frequency[val]) {
        frequency[val]++;
      } else {
        frequency[val] = 1;
      }

      if (frequency[val] > maxFrequency) {
        mode = [val];
        maxFrequency = frequency[val];
      } else if (frequency[val] === maxFrequency) {
        mode.push(val);
      }
    }

    return mode;
  }

  // Method to calculate the range of sample
  range() {
    return this.max() - this.min();
  }

  // Method to calculate the variance of sample
  variance() {
    const mean = this.mean();
    let squaredDifferences = 0;
    for (let i = 0; i < this.sample.length; i++) {
      squaredDifferences += (this.sample[i] - mean) ** 2;
    }
    return squaredDifferences / this.count();
  }

  // Method to calculate the standard deviation of sample
  standardDeviation() {
    return Math.sqrt(this.variance());
  }

  // Method to calculate the percentile of sample
  percentile(percent) {
    const sortedSample = this.sample.sort();
    const index = (percent / 100) * (this.count() - 1);
    const lowerIndex = Math.floor(index);
    const upperIndex = Math.ceil(index);

    if (lowerIndex === upperIndex) {
      return sortedSample[lowerIndex];
    } else {
      return (
        sortedSample[lowerIndex] +
        (sortedSample[upperIndex] - sortedSample[lowerIndex]) *
          (index - lowerIndex)
      );
    }
  }

  // Method to calculate the frequency distribution of sample
  frequencyDistribution() {
    const frequency = {};
   for (let i = 0; i < this.sample.length; i++) {
      let num = this.sample[i];
      if (frequency[num] === undefined) {
        frequency[num] = 1;
      } else {
        frequency[num]++;
      }
    }
    return frequency;
  }
}


// Sample data
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

// Create an instance of Statistics class
const statistics = new Statistics(ages);

console.log('Count:', statistics.count())
console.log('Sum: ', statistics.sum())
console.log('Min: ', statistics.min())
console.log('Max: ', statistics.max())
console.log('Range: ', statistics.range())
console.log('Mean: ', statistics.mean())
console.log('Median: ',statistics.median())
console.log('Mode: ', statistics.mode())
console.log('Range:', statistics.range());
console.log('Variance: ',statistics.variance())
console.log('Standard Deviation: ', statistics.standardDeviation())
console.log('Percentile (50%):', statistics.percentile(50));
console.log('Frequency Distribution: ',statistics.frequencyDistribution())

/*
Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/
class PersonAccount {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.incomes = {};
      this.expenses = {};
    }
  
    totalIncome() {
      let total = 0;
      for (let description in this.incomes) {
        if (this.incomes.hasOwnProperty(description)) {
          total += this.incomes[description];
        }
      }
      return total;
    }
  
    totalExpense() {
      let total = 0;
      for (let description in this.expenses) {
        if (this.expenses.hasOwnProperty(description)) {
          total += this.expenses[description];
        }
      }
      return total;
    }
  
    accountInfo() {
      console.log("Account Information");
      console.log(`First Name: ${this.firstname}`);
      console.log(`Last Name: ${this.lastname}`);
      console.log(`Total Income: ${this.totalIncome()}`);
      console.log(`Total Expense: ${this.totalExpense()}`);
      console.log(`Account Balance: ${this.accountBalance()}`);
    }
  
    addIncome(description, amount) {
      this.incomes[description] = amount;
    }
  
    addExpense(description, amount) {
      this.expenses[description] = amount;
    }
  
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  }

  
  // Create a new instance of PersonAccount
const person = new PersonAccount("John", "Doe");

// Add incomes
person.addIncome("Salary", 5000);
person.addIncome("Bonus", 1000);

// Add expenses
person.addExpense("Rent", 1500);
person.addExpense("Groceries", 200);
person.addExpense("Utilities", 100);

// Display account information
person.accountInfo();