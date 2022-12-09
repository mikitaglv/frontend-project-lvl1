import readlineSync from 'readline-sync';
import { getRandomNumber, userName } from '../index.js';

const isPrimeNumber = (number) => {
  if (number < 2) return false;
  if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) return false;
    }
  }
  return true;
};

const gamePrime = (rounds = 3) => {
  const primeRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(primeRule);

  let answers = 0;
  while (answers < rounds) {
    const gameNumber = getRandomNumber(100);
    console.log(`Question: ${gameNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrimeNumber(gameNumber) ? 'yes' : 'no';

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

export default gamePrime;
