#!/usr/bin/env node
import readlineSync from "readline-sync";
import greeting from "../src/cli.js";

const isEvenNumber = (number) => number % 2 === 0;

const userName = greeting();

let answers = 0;
while (answers < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === "yes" && isEvenNumber(randomNumber)) {
        console.log("Correct!");
        answers += 1;
    } else if (userAnswer === "no" && !isEvenNumber(randomNumber)) {
        console.log("Correct!");
        answers += 1;
    } else {
        console.log(
            `'${userAnswer}' is wrong answer :(. Correct answer was 'no'.\nLet's try again, ${userName}!`
        );
        break;
    }

    if (answers === 3) {
        console.log(`Congratulations, ${userName}!`);
    }
}
