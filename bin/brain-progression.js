#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();
console.log('What number is missing in the progression?');

let answers = 0;
while (answers < 3) {
  const hiddenPosition = Math.floor(Math.random() * 10);
  const progression = [];
  const step = Math.floor(Math.random() * 10);
  let currentNumber = Math.floor(Math.random() * 100);
  for (let i = 0; i < 10; i += 1) {
    if (i === hiddenPosition) {
        progression.push('..');
    } else {
        progression.push(currentNumber);
    }
    currentNumber += step;
  };

  console.log(`Question: ${progression.join(' ')}`);
  const correctAnswer = progression[hiddenPosition + 1] - step;
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    answers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    break;
  }

  if (answers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
