import game from '../index.js';

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
      console.log('error');
  }
  return result;
};

const playCalc = () => {
  const numberOne = getRandomInt(100);
  const numberTwo = getRandomInt(100);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(3)];
  const question = `${numberOne} ${operator} ${numberTwo}`;
  const answerCorrect = isRightAnswer(numberOne, numberTwo, operator);
  return [question, answerCorrect];
};
const calcGame = () => {
  const condition = ('What is the result of the expression?');
  game(playCalc, condition);
};
export default calcGame;
