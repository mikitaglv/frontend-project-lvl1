#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const operations = ['+', '-', '*'];
const userName = greeting();
console.log('What is the result of the expression?');

let answers = 0;
while (answers < 3) {
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  console.log(`Question: ${randomNumber1} ${randomOperation} ${randomNumber2}`);
  let correctAnswer = 0;

  if (randomOperation === '+') {
    correctAnswer = randomNumber1 + randomNumber2;
  } else if (randomOperation === '-') {
    correctAnswer = randomNumber1 - randomNumber2;
  } else {
    correctAnswer = randomNumber1 * randomNumber2;
  }

  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === Number(correctAnswer)) {
    console.log('Correct!');
    answers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
    break;
  }

  if (answers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
