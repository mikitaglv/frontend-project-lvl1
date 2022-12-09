import readlineSync from 'readline-sync';
import { getRandomNumber, userName } from '../index.js';

const gameCalc = (rounds = 3) => {
  const operations = ['+', '-', '*'];
  console.log('What is the result of the expression?');

  let answers = 0;
  while (answers < rounds) {
    const randomNumber1 = getRandomNumber(100);
    const randomNumber2 = getRandomNumber(100);
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

export default gameCalc;
