// // JavaScript Fundamentals - Hour 1
// // // // We'll write our code here!

// // // let js = "amazing";
// // // console.log(40 + 8 + 23 - 10);
// // // console.log("GUMANA KA!");

// // // console.log("=== VARIABLES ===");
// // // let firstName = "Jonas";
// // // console.log(firstName)

// // // let age = 30;
// // // console.log(age);
// // // age = 50;
// // // console.log(age);

// // // const birthYear = 1991;
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI);

// // // var job = "programmer";
// // // job = "teacher";
// // // console.log(job);

// // // let lastName = "Doe";
// // // console.log(lastName)

// // // //do not do this
// // // // let 3years = 3;
// // // // let jonas&matilda = "JM";
// // // // let new

// // // console.log("=== DATA TYPES ===");

// // // // number
// // // age = 24;
// // // console.log(age);
// // // console.log(typeof age);

// // // // string
// // // let username = "mark";
// // // console.log(username);
// // // console.log(typeof username);

// // // // boolean
// // // let JavaScriptIsFun = true;
// // // console.log(JavaScriptIsFun);
// // // console.log(typeof JavaScriptIsFun);

// // // // undefined
// // // let year;
// // // console.log(year)
// // // console.log(typeof year);

// // // // dynamic variable
// // // let dynamicVariable = 23;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // change to a string
// // // dynamicVariable = "Now I'm a string!";
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // change to boolean
// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // JavaScript Fundamentals - Hour 2

// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // console.log("Math operations:");
// // console.log("Addition:", 10 + 5);
// // console.log("Subtraciton:", 20 - 8);
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division:", 15 / 3);
// // console.log("Exponentiation:", 2 ** 3);

// // // Math with strings
// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console.log(firstName + " " + lastName);

// // console.log("Hello " + "World!");
// // console.log("I am " + 25 + " years old!");

// // ///
// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 15;
// // console.log("x starts as:", x);

// // x += 10;
// // console.log("x starts as:", x);

// // x *= 4;
// // console.log("x starts as:", x);

// // x /= 2;
// // console.log("x starts as:", x);

// // x++;
// // console.log("x starts as:", x);

// // x--;
// // console.log("x starts as:", x);

// // ////////////
// // console.log("=== COMPARISON OPERATORS ===");
// // console.log("Age comparison");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);

// // console.log("Number comparisons:");
// // console.log(25 > 20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // // storing comparison results
// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult:", isFullAge);

// // console.log("Complex comparison:");
// // console.log(now - 1991 > now - 2018);

// // let z, y;
// // z = y = 25 + 10 - 5;
// // console.log(z, y);

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);

// // ////////////////////////////////////
// // // Coding Challenge #1 - BMI Calculator

// // // Test Data 1
// // let massMark = 78;
// // let heightMark = 1.69;
// // let massJohn = 92;
// // let heightJohn = 1.95;

// // // Your code here:
// // // 1. Calculate BMIs
// // let BMIMark = massMark / heightMark ** 2;
// // let BMIJohn = massJohn / (heightJohn * heightJohn);

// // // 2. Create markHigherBMI variable
// // let markHigherBMI = BMIMark > BMIJohn; 

// // // 3. Log results to console
// // console.log("=== TEST 1 ===");
// // console.log("Mark's mass:", massMark, "Mark's height:", heightMark);
// // console.log("Mark's BMI for test 1:", BMIMark);
// // console.log("John's mass:", massJohn, "John's height:", heightJohn);
// // console.log("John's BMI for test 1:", BMIJohn);
// // console.log("Is Mark's BMI higher than John's in test 1?:", markHigherBMI);

// // // Test Data 2
// // massMark = 95;
// // heightMark = 1.88;
// // massJohn = 85;
// // heightJohn = 1.76;

// // // Your code here:
// // // 1. Calculate BMIs
// // BMIMark = massMark / heightMark ** 2;
// // BMIJohn = massJohn / (heightJohn * heightJohn);

// // // 2. Create markHigherBMI variable
// // markHigherBMI = BMIMark > BMIJohn; 

// // // 3. Log results to console
// // console.log("=== TEST 2 ===");
// // console.log("Mark's mass:", massMark, "Mark's height:", heightMark);
// // console.log("Mark's BMI for test 2:", BMIMark);
// // console.log("John's mass:", massJohn, "John's height:", heightJohn);
// // console.log("John's BMI for test 2:", BMIJohn);
// // console.log("Is Mark's BMI higher than John's in test 2?:", markHigherBMI);

// // JavaScript Fundamentals - Hour 3

// ////////////////////////////////////
// // Strings and Template Literals
// // const firstName = "Jonas";
// // const job = "teacher";
// // const birthYear = 1991;
// // const year = 2037;

// // const jonas =
// //   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// // console.log(jonas);

// // const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// // console.log(jonasNew)

// // console.log(`I'm ${2037 - 1991} years old`);
// // console.log(`Math works: ${2 + 3} equals five`);
// // console.log(`Comparisons too: ${5 > 3}`);

// // console.log(`Just a regular string...`);
// // console.log(`String
// //   multiple
// //   lines
// //   `)

//   // Practice Template Literals

// console.log("=== TEMPLATE LITERALS EXERCISES ===")

// console.log("Exercise 1: Personal Introduction")

// const myName = "Rj";
// const myAge = 20;
// const myJob = "cloud engineer";
// const currentYear = 2024;

// console.log(`Hi, I am ${myName}, a ${myAge} year old ${myJob}`);

// console.log("Exercise 2: Math in Templates");

// const myBirthYear = currentYear - myAge;
// const calculation = 10 * 5;
// const isAdult = myAge >= 18;

// console.log(`Born in ${myBirthYear}, 10*5 = ${calculation}, Adult: ${isAdult}`);

// // if/else statements
// console.log("=== IF/ELSE EXERCISES ===")

// console.log("Exercise 1: Grade Calculator")
// // Create a grade calculator:
// const testScore = 78; // Change this to test different scores

// // Use if/else to determine:
// // 90+: "Excellent! Grade A"
// // 80-89: "Good job! Grade B"
// // 70-79: "Not bad! Grade C"
// // 60-69: "You passed! Grade D"
// // Below 60: "You failed! Study harder"

// // Your code here...
// if (testScore < 60) {
//   console.log("You failed! Study harder")
// }
// else if (testScore < 70){
//   console.log("You passed! Grade D")
// }
// else if (testScore < 80){
//   console.log("Not bad! Grade C")
// }
// else if (testScore < 90){
//   console.log("Good job! Grade B")
// }
// else {
//   console.log("Excellent! Grade A")
// }

// // Create an age verification system:
// console.log("Exercise 2: Age Verification")
// const userAge = 20; // Change this to test

// // Rules:
// // - 18+: "Welcome! You can access all content"
// // - 13-17: "Welcome! Restricted content only"
// // - Under 13: "Sorry, you're too young"

// // Your code here...
// if (userAge < 13) {
//   console.log("Sorry, you're too young")
// }
// else if (userAge < 17) {
//   console.log("Welcome! Restricted content only")
// }
// else {
//   console.log("Welcome! You can access all content")
// }

// console.log("=== Practice Truthy/Falsy ===")
// // Test these values with Boolean() and if statements:
// const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// // For each value, log:
// // 1. The value itself
// // 2. Boolean(value)
// // 3. Whether it passes an if statement

// for (let value of values){
//   console.log("Value:", value);
// console.log("Boolean:", Boolean(value));
// if (value) {
//   console.log("Truthy!");
// } else {
//   console.log("Falsy!");
// }
// }

// console.log("=== CODING CHALLENGE 2: BMI COMPRAISON ===")
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(`
//     Mark's BMI: ${BMIMark}
//     John's BMI: ${BMIJohn}
//   `)

// if (BMIMark > BMIJohn) {
//   console.log(`
//     Mark's BMI(${Math.round(BMIMark * 10) / 10}) is higher than John's (${Math.round(BMIJohn * 10) / 10})!
//     `)
// } else {
//     console.log(`
//     John's BMI(${Math.round(BMIJohn * 10) / 10}) is higher than Mark's (${Math.round(BMIMark * 10) / 10})!
//     `)
// }

// JavaScript Fundamentals - Hour 4
console.log("=== Practice Type Conversion ===")
console.log("Exercise 1: Conversion Detective")
console.log("5" + 2); // Your guess: ?
console.log("5" - 2); // Your guess: ?
console.log("5" * 2); // Your guess: ?
console.log("5" / 2); // Your guess: ?

// Convert these explicitly:
const userAge = "25";
console.log(Number(userAge)) // Convert to number
const userScore = 95; // Convert to string
console.log(String(userScore))

  console.log("Exercise 2: Fix the Bug")
// This calculator has a bug - fix it!
// const num1 = prompt("First number:"); // Returns string!
// const num2 = prompt("Second number:"); // Returns string!
// const sum = Number(num1) + Number(num2); // Bug: adds as strings!
// console.log(`Sum: ${sum}`);

console.log("=== Practice Equality ===")
console.log("Exercise 1: Equality Detective")
// Test these comparisons - predict first, then run:
console.log(5 === "5"); // Your guess: ?
console.log(5 == "5"); // Your guess: ?
console.log(true === 1); // Your guess: ?
console.log(true == 1); // Your guess: ?
console.log(false === 0); // Your guess: ?
console.log(false == 0); // Your guess: ?

console.log("Exercise 2: Fix the Login System")
// This login system has bugs - fix them!
// const username = prompt("Username:");
// const password = prompt("Password:");

// Bugs: using == instead of ===
// if (username == "admin" && password == "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

// // Fix using strict equality
// if (username === "admin" && password === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

console.log("=== Practice Logical Operators ===")
// Create a club entry system with these rules:
// Entry allowed if: (age >= 21 AND hasID) OR isVIP
console.log("Exercise 1: CLub Entry System")
const age = 19; 
const hasID = true; 
const isVIP = false; 

// Your logic here:
if ((age >= 21 && hasID) || isVIP){
  console.log('Welcome to the club!');
} else {
  console.log('Sorry, you cannot enter');
}

console.log("Exercise 2: Weather Advisor")
const temperature = 20; // Celsius
const isRaining = false;
const isWindy = false;

if ((temperature <= 30 && temperature >= 20) && !isRaining && !isWindy){
  console.log("Perfect day!")
} else if ((temperature >= 15 && temperature <= 35) && !isRaining) {
  console.log("Good day!")
}
else {
  console.log("Stay inside!")
}

console.log("=== Practice Ternary ===")
console.log("Exercise 1: Status Messages")

// 1. Login Status
const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please sign in");

// 2. Price with discount
const isPremium = true;
console.log(isPremium ? 100 * 0.8 : 100);

console.log("Exercise 2: Smart Responses")
const score = 85;
const weather = "sunny";
const battery = 15;
console.log(`
  Your score: ${score} (${score >= 75 ? "passed" : "failed"})
  `)

console.log(`
  Weather is ${weather} (${weather == 'sunny' ? "Great for outdoor activities" : "Stay inside"})
  `)

console.log(`
  Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})
  `)

////////////////////////////////////
// Coding Challenge #4

const bill = 430; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300


const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Step 2: Create beautiful output with template literal
console.log(`
  Bill ${bill}: "The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}
  `);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"