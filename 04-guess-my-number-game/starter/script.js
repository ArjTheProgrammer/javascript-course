// Game Development Hour 1 - Game Foundation & DOM Basics
'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

/*
What We're Building Today:
- A complete "Guess My Number" game
- Player guesses a number between 1-20
- Game provides feedback: "Too high!" or "Too low!"
- Score tracking and high score system
- Visual feedback and professional polish

// This teaches us DOM manipulation - how JavaScript talks to HTML!
// */

// console.log('Goal: Build a complete interactive game from scratch');
// console.log('Focus: DOM manipulation, game state, and user interaction');

// // ////////////////////////////////////
// // // DOM Element Selection - The Foundation
// // console.log('=== DOM ELEMENT SELECTION ===');

// // Select elements by class name
// const messageEl = document.querySelector('.message');
// console.log(messageEl); // Shows the HTML element

// // Select elements by class name
// const scoreEl = document.querySelector('.score');
// console.log(scoreEl);

// // Select input elements
// const guessEl = document.querySelector('.guess');
// console.log(guessEl);

// // // Reading element content
// // console.log('Current message:', messageEl.textContent);
// // console.log('Current score:', scoreEl.textContent);

// // // Modifying element content
// // messageEl.textContent = 'Hello from JavaScript!';
// // scoreEl.textContent = '15';

// // console.log('Elements updated!');

// // // Input elements use .value property
// // const guessInput = document.querySelector('.guess');

// // // Reading input value
// // console.log('Current guess:', guessInput.value);

// // // Setting input value
// // guessInput.value = '20';
// // console.log('Guess set to:', guessInput.value);

// // Practice selecting and modifying elements:
// // 1. Select the number display and change it to 15
// // 2. Select the highscore and set it to 100
// // 3. Select the guess input and set a value
// // 4. Log all the elements to the console

// // Your code here...
// // const numberEl = document.querySelector('.number');
// // // numberEl.textContent = 15;

// // const highscoreEl = document.querySelector('.highscore');
// // // highscoreEl.textContent = 100;

// // const guessInput = document.querySelector('.guess');
// // guessInput.value = 7;

// ////////////////////////////////////
// // Game State Variables - The Game's Memory

// // let secretNumber = Math.trunc(Math.random() * 20) + 1;
// // console.log('Secret number:', secretNumber);

// // let score = 20;

// // let highscore = 0;

// // document.querySelector('.score').textContent = score;
// // document.querySelector('.highscore').textContent = highscore;

// console.log('Game state initialized!');

// // Create your own game state variables:
// // 1. Create a player name variable
// // 2. Create an attempts counter
// // 3. Create a game active boolean
// // 4. Create a random number between 1-10 (easier for testing)
// // 5. Display all variables in the console

// // Your code here...
// let playerName = 'Player';
// let attempts = 0;
// let gameActive = true;
// let easySecret = Math.trunc(Math.random() * 10) + 1;

// console.log('Player:', playerName);
// console.log('Attempts:', attempts);
// console.log('Game active:', gameActive);
// console.log('Easy secret number:', easySecret);

// ////////////////////////////////////
// // Event Listeners - Making Buttons Interactive

// // document.querySelector('.check').disabled = true;

// // Always convert input to number for comparison
// const guess = Number(document.querySelector('.guess').value);

// console.log('Input as string:', document.querySelector('.guess').value); // "15"
// console.log('Input as number:', Number(document.querySelector('.guess').value)); // 15
// console.log('String comparison:', '15' === 15); // false
// console.log('Number comparison:', 15 === 15); // true

// ////////////////////////////////////
// // Game Foundation Verification

// console.log('🎮 Game Foundation Complete!');
// console.log('✅ DOM element selection working');
// console.log('✅ Game state variables initialized');
// console.log('✅ Event listeners responding');
// console.log('✅ Basic game logic implemented');
// console.log('Ready for advanced features in Hour 2!');

// // Test your game one more time
// console.log('Secret number for testing:', secretNumber);
// console.log('Try to guess it!');

// ////////////////////////////////////
// // Game restart - reset everything for new game
// document.querySelector('.again').addEventListener('click', () => {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.guess').value = '';

//   document.querySelector('.guess').disabled = false;
//   document.querySelector('.check').disabled = false;
//   document.body.style.backgroundColor = '';
// });

// ////////////////////////////////////
// // Enhanced Game Verification

// console.log('🎮 Enhanced Game Complete!');
// console.log('✅ Score tracking working');
// console.log('✅ Win/lose conditions implemented');
// console.log('✅ Game restart functionality working');
// console.log('✅ Complete game experience ready');
// console.log('Ready for visual polish in Hour 3!');

// // Test your complete game
// console.log('Test: Try to win, try to lose, then restart!');

////////////////////////////////////
// Constants & Selectors

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

const body = document.body;
const messageText = document.querySelector('.message');
const numberText = document.querySelector('.number');
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

////////////////////////////////////
// UI Helpers

const setMessage = text => {
  messageText.textContent = text;
};

const setNumber = value => {
  numberText.textContent = value;
};

const setScore = value => {
  scoreText.textContent = value;
};

const setHighScore = value => {
  highscoreText.textContent = value;
};

const setBackgroundColor = color => {
  body.style.backgroundColor = color;
};

const disablePlay = disabled => {
  guessInput.disabled = disabled;
  checkButton.disabled = disabled;
};

const clearInput = () => {
  guessInput.value = '';
};

////////////////////////////////////
// Game State & Reset

let secretNumber = Math.trunc(Math.random() + MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

const resetGame = () => {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
};

const renderInitialUI = () => {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackgroundColor('');
};

////////////////////////////////////
// Game State & Reset

secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
score = START_SCORE;
highscore = 0;

const resetGameState = () => {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
};

renderInitialUI();

////////////////////////////////////
// Handlers

checkButton.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (!guess) {
    setMessage('No number!');
    setTimeout(renderInitialUI, 3000);
  }

  if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    setNumber('😡');
    setMessage(`
        Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!
        `);
    setTimeout(renderInitialUI, 3000);
    return;
  }

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackgroundColor('green');
    if (score > highscore) {
      highscore = score;
      setHighScore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;
  }

  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackgroundColor('maroon');
    disablePlay(true);
    clearInput();
    return;
  }
});

againButton.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});

window.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !checkButton.disabled) {
    checkButton.click();
  }
});

againButton.addEventListener('click', () => {
  guessInput.focus();
});
