import game from '../index.js';

import getRandomInt from '../utils.js';

const isEvenNum = (number) => number % 2 === 0;

const playEven = () => {
  const question = String(getRandomInt(100));
  const answerCorrect = isEvenNum(question) ? 'yes' : 'no';
  return [question, answerCorrect];
};
const runGameIsItEven = () => {
  const condition = ('Answer "yes" if the number is even, otherwise answer "no".');
  game(playEven, condition);
};
export default runGameIsItEven;
