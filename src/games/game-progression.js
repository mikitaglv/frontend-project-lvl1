import readlineSync from 'readline-sync';
import { getRandomNumber, userName } from '../index.js';

const gameProgression = (rounds = 3) => {
  console.log('What number is missing in the progression?');

  let answers = 0;
  while (answers < rounds) {
    const hiddenPosition = Math.floor(Math.random() * 10);
    const progression = [];
    const step = getRandomNumber(10);
    let currentNumber = getRandomNumber(100);
    for (let i = 0; i < 10; i += 1) {
      if (i === hiddenPosition) {
        progression.push('..');
      } else {
        progression.push(currentNumber);
      }
      currentNumber += step;
    }

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
};

export default gameProgression;
