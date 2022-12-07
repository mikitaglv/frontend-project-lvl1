#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const isPrimeNumber = (number) => {
    if (number < 2) return false;
    if (number > 1) {
        for (let i = 2; i < number; i += 1) {
            if (number % i === 0) return false;
        };
    };
    return true;
};

const userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let answers = 0;
while (answers < 3) {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';

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