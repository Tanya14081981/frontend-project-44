import game from '../index.js';

import getRandomANumber from '../utils.js';

const rightAnswer = (numberOne, numberTwo, operator) => {
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
      throw new Error('Unknown state!');
  }
  return result;
};

const playCalc = () => {
  const numberOne = getRandomANumber(0, 100);
  const numberTwo = getRandomANumber(0, 100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomANumber(0, 3)];
  const question = `${numberOne} ${operator} ${numberTwo}`;
  const answerCorrect = rightAnswer(numberOne, numberTwo, operator);
  return [question, answerCorrect];
};
const runCalcGame = () => {
  const condition = ('What is the result of the expression?');
  game(playCalc, condition);
};
export default runCalcGame;
