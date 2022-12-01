#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

let answers = 0;
while (answers < 3) {
  const randomNumber1 = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  let correctAnswer =
    randomNumber1 < randomNumber2 ? randomNumber1 : randomNumber2;
  while (
    randomNumber1 % correctAnswer != 0 ||
    randomNumber2 % correctAnswer != 0
  ) {
    correctAnswer -= 1;
  }

  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
    answers += 1;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer :(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
    );
    break;
  }

  if (answers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
