// // JavaScript Fundamentals - Part 1
// // We'll write our code here!

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log("GUMANA KA!");

// console.log("=== VARIABLES ===");
// let firstName = "Jonas";
// console.log(firstName)

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// let lastName = "Doe";
// console.log(lastName)

// //do not do this
// // let 3years = 3;
// // let jonas&matilda = "JM";
// // let new

// console.log("=== DATA TYPES ===");

// // number
// age = 24;
// console.log(age);
// console.log(typeof age);

// // string
// let username = "mark";
// console.log(username);
// console.log(typeof username);

// // boolean
// let JavaScriptIsFun = true;
// console.log(JavaScriptIsFun);
// console.log(typeof JavaScriptIsFun);

// // undefined
// let year;
// console.log(year)
// console.log(typeof year);

// // dynamic variable
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// // change to a string
// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable);

// // change to boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

console.log("=== MATH OPERATORS ===");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraciton:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

// Math with strings
const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName);

console.log("Hello " + "World!");
console.log("I am " + 25 + " years old!");

///
console.log("=== ASSIGNMENT OPERATORS ===");

let x = 10 + 15;
console.log("x starts as:", x);

x += 10;
console.log("x starts as:", x);

x *= 4;
console.log("x starts as:", x);

x /= 2;
console.log("x starts as:", x);

x++;
console.log("x starts as:", x);

x--;
console.log("x starts as:", x);

////////////
console.log("=== COMPARISON OPERATORS ===");
console.log("Age comparison");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);

// storing comparison results
const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);

console.log("Complex comparison:");
console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 + 10 - 5;
console.log(z, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// Your code here:
// 1. Calculate BMIs
let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);

// 2. Create markHigherBMI variable
let markHigherBMI = BMIMark > BMIJohn; 

// 3. Log results to console
console.log("=== TEST 1 ===");
console.log("Mark's mass:", massMark, "Mark's height:", heightMark);
console.log("Mark's BMI for test 1:", BMIMark);
console.log("John's mass:", massJohn, "John's height:", heightJohn);
console.log("John's BMI for test 1:", BMIJohn);
console.log("Is Mark's BMI higher than John's in test 1?:", markHigherBMI);

// Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

// Your code here:
// 1. Calculate BMIs
BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / (heightJohn * heightJohn);

// 2. Create markHigherBMI variable
markHigherBMI = BMIMark > BMIJohn; 

// 3. Log results to console
console.log("=== TEST 2 ===");
console.log("Mark's mass:", massMark, "Mark's height:", heightMark);
console.log("Mark's BMI for test 2:", BMIMark);
console.log("John's mass:", massJohn, "John's height:", heightJohn);
console.log("John's BMI for test 2:", BMIJohn);
console.log("Is Mark's BMI higher than John's in test 2?:", markHigherBMI);