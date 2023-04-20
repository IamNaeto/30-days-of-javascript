/**********
Exercises
**********/

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

/*****************
Exercises Level 1
*****************/
/*
Change skills array to JSON using JSON.stringify()
*/
let skillsJSON = JSON.stringify(skills, undefined, 4)
console.log(skillsJSON)

/*
Stringify the age variable
*/
let ageJSON = JSON.stringify(age, undefined, 4)
console.log(ageJSON)

/*
Stringify the isMarried variable
*/
let isMarriedJSON = JSON.stringify(isMarried, undefined, 4)
console.log(isMarried)

/*
Stringify the student object
*/
let studentJSON = JSON.stringify(student, undefined, 4)
console.log(studentJSON)


/****************
Exercises Level 2
****************/
/*
Stringify the students object with only firstName, lastName and skills properties
*/
let studentsSpec = JSON.stringify(student, ["firstName", "lastName", "skills"], 4)
console.log(studentsSpec)


/****************
Exercises Level 3
*****************/
/*
Parse the txt JSON to object.
*/
let textObj = JSON.parse(txt, undefined, 4)
console.log(textObj)


/*
Find the user who has many skills from the variable stored in txt.
*/
const users = JSON.parse(txt);

let userWithMaxSkills = '';
let maxSkillsCount = 0;

for (const user in users) {
    const userInfo = users[user];
    const skillsCount = userInfo.skills.length;
    if (skillsCount > maxSkillsCount) {
        userWithMaxSkills = user;
        maxSkillsCount = skillsCount;
    }
}
console.log(`The user with the most skills is: ${userWithMaxSkills}`);
// In this example, the txt variable contains a JSON object with user information. We iterate through each user using a for...in loop, and for each user, we count the number of skills they have by accessing the skills array and getting its length. We compare this count with the current maximum skills count, and if it's higher, we update the maxSkills variable and store the current user in the userWithMaxSkills variable. Finally, we print out the user with the most skills.






