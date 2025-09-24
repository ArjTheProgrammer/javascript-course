'use strict';

// console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// const outerFunction = () => {
//   console.log('Outer function start');
//   innerFunction();
//   console.log('Outer function end');
// };

// const innerFunction = () => {
//   console.log('innerfunction');
//   console.trace();
// };

// outerFunction();

// const name = 'GlobalName';

// const a = () => {
//   //   const name = 'FunctionName';

//   const b = () => {
//     console.log(name);
//   };

//   b();
// };

// a();

// // console.log(title);

// let title = 'Behind the Scenes';

// function outer() {
//   const label = 'outer';

//   function inner() {
//     console.log('scope:', label);
//   }

//   inner();
// }

// outer();

// function one() {
//   two();
// }

// function two() {
//   console.log('stack: two');
// }

// one();

// // The this Keyword & Arrow Functions – Student Guide

// const person = {
//   name: 'Rj',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// const anotherPerson = { name: 'Arjay' };
// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// // const greetFunction = person.greet;
// // greetFunction();

// const button = document.querySelector('button');
// // button.addEventListener('click', person.greet);

// // button.addEventListener('click', () => person.greet());

// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod();
// quiz.arrowMethod();

// const timer = {
//   name: 'Timer',

//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 2000);
//   },

//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     }, 5000);
//   },
// };

// // timer.start();
// // timer.startModern();

// const user = {
//   name: 'Rj',
//   hobbies: ['basketball', 'study', 'reading'],

//   printHobbiesBad: () => {
//     this.hobbies.array.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`);
//     });
//   },

//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`);
//     });
//   },
// };

// // user.printHobbiesBad();
// user.printHobbiesGood();

// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFunction: () => {
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };

// functionTypes.regularFunction('hello', 'world');
// functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// const myTimer = {
//   name: 'My Timer',

//   startCountdown() {
//     console.log(`${this.name} starting countdown...`);

//     setTimeout(() => {
//       console.log(`${this.name} countdown finished!`);
//     }, 5000);
//   },
// };

// myTimer.startCountdown();

let age = 30;
let oldAge = age;
age = 31;

console.log('age:', age);
console.log('oldAge:', oldAge);

const me = { name: 'Arjeh', age: 30 };
const friend = me;

friend.age = 27;

console.log('me:', me);
console.log('friend', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Rj', age: 20 };
const updatedPerson = changeAge(originalPerson, 21);

console.log('original:', originalPerson);
console.log('updated:', updatedPerson);
console.log('same object?:', originalPerson === updatedPerson);

const original = {
  name: 'Rj',
  age: 28,
  hobbies: ['reading', 'coding'],
};

const shallowCopy = { ...original };

shallowCopy.name = 'Junjun';
console.log('original name:', original.name);
console.log('copy name:', shallowCopy.name);

shallowCopy.hobbies.push('balling');
console.log('original hobbies', original.hobbies);
console.log('copy hobbies:', shallowCopy.hobbies);

// deep copying

const deepOriginal = {
  name: 'Jonel',
  age: 55,
  address: { city: 'Pasig', country: 'Philippines' },
  hobbies: ['Akyat puno', 'Debate'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'Cainta';
deepCopy.hobbies.push('Mangaway');

console.log('original address:', deepOriginal.address);
console.log('copy address:', deepCopy.address);
console.log('original hobbies:', deepOriginal.hobbies);
console.log('copy hobbies', deepCopy.hobbies);

const userManager = {
  users: [],

  addUser: function (userData) {
    const userCopy = structuredClone(userData);
    this.users.push(userCopy);
  },

  getUsers: function () {
    return [...this.users];
  },
};

// Test your implementation
const originalUser = { name: 'John', preferences: { theme: 'dark' } };
userManager.addUser(originalUser);

originalUser.name = 'Modified';
console.log('Original changed:', originalUser);
console.log('Stored user:', userManager.getUsers()[0]);
