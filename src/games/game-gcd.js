import readlineSync from 'readline-sync';
import { getRandomNumber, userName } from '../index.js';

export const gameGcd = (rounds = 3) => {
  console.log('Find the greatest common divisor of given numbers.');

  let answers = 0;
  while (answers < rounds) {
    const randomNumber1 = getRandomNumber(100);
    const randomNumber2 = getRandomNumber(100);
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    let correctAnswer = randomNumber1 < randomNumber2 ? randomNumber1 : randomNumber2;
    while (randomNumber1 % correctAnswer !== 0 || randomNumber2 % correctAnswer !== 0) {
      correctAnswer -= 1;
    }
    correctAnswer = String(correctAnswer);
    const userAnswer = readlineSync.question('Your answer: ');
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
};