// console.log("Part 2: Functions ready!");

// console.log("=== FUNCTIONS ===");
// function logger(){
//     console.log("My name is Jonas");
// }

// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5,3));

// // function expressions
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// console.log(calcAge(2005));

// function introduction(firstName, lastName, age){
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//     return introduction; 
// }

// console.log(introduction("Rj", "Silagan", 20));

// function yearsUntilRetirement(birthYear, firstName){
//     const age = calcAge(2005);
//     const retirement = 65 - age;

//     if (retirement > 0){
//         return `${firstName} retires in ${retirement} years`
//     }
//     else {
//         return `${firstName} has already retired!`
//     }
// }

// console.log(yearsUntilRetirement(2005, "Rj"))

// // global scope
// const globalVar = "I am global";

// function testScope() {
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }


// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= (avgKoalas * 2)){
//         return `Dolphins win (${avgDolphins} vs ${avgKoalas})`
//     }
//     else if (avgKoalas >= (avgDolphins * 2)){
//         return `Koalas win (${avgKoalas} vs ${avgDolphins})`
//     }
//     else {
//         return `No team wins! Dolphin: ${avgDolphins}, Koalas: ${avgKoalas}`;
//     }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // my test
// scoreDolphins = calcAverage(10, 10, 10);
// scoreKoalas = calcAverage(20, 20, 20);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // JavaScript Fundamentals Part 2 - Hour 1

// lesson 2 array data manipulations
// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// // const grades = [85, 92, 78, 96, 88];
// // console.log(grades);

// let friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends[friends.length - 1])

// friends[1] = 'jay';
// console.log(friends);

// const firstName = "RJ"
// const rj = [firstName, "Silagan", 2025 - 2005]
// console.log(rj);

// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// console.log(ages);

// // Array Methods - Adding elements

// // Push - add to end
// const newLength = friends.push("Steven");
// console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
// console.log(newLength);

// friends.unshift('Maria')
// console.log(friends)

// const popped = friends.pop()
// const popped2 = friends.pop()
// console.log(popped)
// console.log(popped2)
// console.log(friends)

// const shifted = friends.shift()
// console.log(shifted)
// console.log(friends)

// console.log(friends.indexOf('jay'))

// console.log(friends.includes('jay'))

// ////////////////////////////////////
// // Array Iteration - Loops

// friends =  ["Michael", "Steven", "Peter"];

// for (let index = 0; index < friends.length; index++) {
//     console.log(friends[index])
// }

// friends.forEach((friend, index) => {
//     console.log(`${index}: ${friend}`)
// })

// const grades2 = [85, 92, 78, 96, 88, 74]

// let total = 0;
// for (let index = 0; index < grades2.length; index++) {
//     total += grades2[index]
// }

// const ave = total / grades2.length
// console.log(`Average: ${ave.toFixed(2)}`)

// let passedCount = 0;
// grades2.forEach(
//     grade => {
//         if (grade >= 70){
//             passedCount++;
//         }
//     }
// )

// console.log(`${passedCount} out of ${grades2.length} have passed`)


// ////////////////////////////////////
// // Coding Challenge #2 - Student Grade Manager

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
// function calculateAverage(grades) {
//   let sum = 0;
//   for (const grade of grades) {
//     sum += grade;
//   }

//   return sum / grades.length;
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   let highest = 0;

//   for (let index = 0; index < grades.length; index++) {
//     if (grades[index] > highest){
//         highest = grades[index]
//     }
//   }

//   return highest
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//     let lowest = grades[0];

//     grades.forEach((grade, index) => {
//         if (grade < lowest){
//             lowest = grade;
//         }
//     })

//     return lowest
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   let passed = 0;
//   grades.forEach(grade => {
//     if (grade >= passingGrade){
//         passed++
//     }
//   })

//   return passed
// }

// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

// JavaScript Fundamentals Part 2 - Hour 2

////////////////////////////////////
// Objects - Creation with Object Literal Syntax
console.log("=== OBJECTS ===");

// const rj = {
//   firstName: "Rj",
//   lastName: "Silagan",
//   age: 2025 - 2005,
//   job: "Cloud Engineer",
//   friends: ['Lebron James', 'Victor Wembanyama', 'Kurt Cobain']
// }

// console.log(rj)

// // Exercise 1: Personal Object
// const book = {
//   title: "The Obstacle is the Way",
//   author: "Ryan Holiday",
//   pages: 240,
//   isRead: true
// }

// const playlist = {
//   name: "To pimp a butterfly",
//   creator: "Kendrick Lamar",
//   songs: ["The Blacker The Berry", "Alright", "Up"],
//   genre: "rap",
// }

// console.log(book.title)
// console.log(book["pages"])
// console.log(playlist.name)
// console.log(playlist["creator"])
// playlist.genre = "hiphop"
// console.log(playlist.genre)

// // Exercise 2: Calculator Object
// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

//   add: function () {
//     return this.num1 + this.num2
//   },

//   subtract: function () {
//     return this.num1 - this.num2
//   },

//   multiply: function () {
//     return this.num1 * this.num2
//   },

//   divide: function () {
//     return this.num1 / this.num2
//   },

//   calculate: function () {
//     if (this.operator === '+'){
//       return this.add()
//     }
//     if (this.operator === '-') {
//       return this.subtract()
//     }
//     if (this.operator === '*') {
//       return this.multiply()
//     }
//     if (this.operator === '/') {
//       return this.divide()
//     }
//   },

//   getResult: function () {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`
//   },
// };

// calculator.operator = "*"

// console.log(calculator.calculate());
// console.log(calculator.getResult());

////////////////////////////////////
// Coding Challenge #3 - User Profile System

const user = {
  firstName: "Jose Neil",
  lastName: "Silagan Jr.",
  birthYear: 2005,
  location: "Pasig",
  interests: ["basketball", "books", "coding"],
  friends: [
    { name: "Lebron", status: "active" },
    { name: "kyrie", status: "inactive" },
    { name: "kevin", status: "active" },
  ],
  isActive: true,

  // Calculate age method
  calcAge: function () {
    // Calculate age and store as this.age
    // Hint: Use new Date().getFullYear() for current year
    return new Date().getFullYear() - this.birthYear
  },

  // Add friend method
  addFriend: function (name, status = "active") {
    // Add new friend object to this.friends array
    // Return the new length of friends array
    this.friends.push({
      name: name,
      status: status,
    })

    return this.friends
  },

  // Get active friends count
  getActiveFriends: function () {
    // Filter friends array to count only active friends
    // Hint: use this.friends.filter()
    return this.friends.filter((friend) => {
      return friend.status === "active"
    })
  },

  // Toggle active status
  toggleStatus: function () {
    // Switch this.isActive between true and false
    // Return the new status
    // Your code here
    this.isActive = !this.isActive
  },

  // Generate profile summary
  getSummary: function () {
    // Create a social media style profile summary
    // Include: name, age, location, status, friend counts, interests
    // Use template literals for nice formatting
    // Your code here
return `
  Name: ${this.firstName} ${this.lastName}
  Age: ${this.calcAge()}
  Location: ${this.location}
  Active: ${this.isActive ? 'Yes' : 'No'}
  Number of Friends: ${this.friends.length}
  Interests:
    ${this.interests.map(interest => `- ${interest}`).join('\n    ')}
`;
  },
};

// Test your user profile system
console.log(user.getSummary());
user.addFriend("Alex", "active");
user.toggleStatus();
console.log(`\nAfter updates:`);
console.log(user.getSummary());

// JavaScript Fundamentals Part 2 - Hour 3