import readlineSync from 'readline-sync';

import greetGamer from './cli.js';

import getRandomInt from '../function/getRandomInt.js';

const isRightAnswer = (numberOne, numberTwo, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    default:
      break;
  }
  return result;
};

const calcGame = () => {
  const userName = greetGamer();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const numberOne = getRandomInt(100);
    const numberTwo = getRandomInt(100);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(3)];
    const expression = `${numberOne} ${operator} ${numberTwo}`;
    console.log('Question: ', expression);
    const answerCorrect = isRightAnswer(numberOne, numberTwo, operator);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== answerCorrect.toString()) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`);
      console.log("Let's try again, ", userName);
      return;
    }
    console.log('Correct!');
  }
  console.log('Congratulations,', userName, '!');
};
export default calcGame;
