import readlineSync from 'readline-sync';
import { getRandomNumber, userName } from '../index.js';

const isEvenNumber = (number) => number % 2 === 0;

const gameEven = (rounds = 3) => {
  const evenRule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(evenRule);

  let answers = 0;
  while (answers < rounds) {
    const gameNumber = getRandomNumber(100);
    console.log(`Question: ${gameNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEvenNumber(gameNumber) ? 'yes' : 'no';

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

export default gameEven;
