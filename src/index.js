import greeting from './cli.js';

export const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber + 1);

export const userName = greeting();
