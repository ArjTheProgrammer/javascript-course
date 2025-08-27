console.log("Part 2: Functions ready!");

console.log("=== FUNCTIONS ===");
function logger(){
    console.log("My name is Jonas");
}

logger()
logger()
logger()

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5,3));

// function expressions
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

console.log(calcAge(2005));

function introduction(firstName, lastName, age){
    const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
    return introduction; 
}

console.log(introduction("Rj", "Silagan", 20));

function yearsUntilRetirement(birthYear, firstName){
    const age = calcAge(2005);
    const retirement = 65 - age;

    if (retirement > 0){
        return `${firstName} retires in ${retirement} years`
    }
    else {
        return `${firstName} has already retired!`
    }
}

console.log(yearsUntilRetirement(2005, "Rj"))

// global scope
const globalVar = "I am global";

function testScope() {
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}


////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)){
        return `Dolphins win (${avgDolphins} vs ${avgKoalas})`
    }
    else if (avgKoalas >= (avgDolphins * 2)){
        return `Koalas win (${avgKoalas} vs ${avgDolphins})`
    }
    else {
        return `No team wins! Dolphin: ${avgDolphins}, Koalas: ${avgKoalas}`;
    }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));


// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// my test
scoreDolphins = calcAverage(10, 10, 10);
scoreKoalas = calcAverage(20, 20, 20);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// JavaScript Fundamentals Part 2 - Hour 1