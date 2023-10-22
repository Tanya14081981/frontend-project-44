import game from '../index.js';

import getRandomANumber from '../utils.js';

const getArray = () => {
  const a = 5;
  const b = 10;
  const lengthArray = getRandomANumber(a, b);
  const array = [];
  const startNum = getRandomANumber(0, 100);
  const step = Math.ceil(Math.random() * 10);
  for (let i = 0; i < lengthArray; i += 1) {
    const current = startNum + step * i;
    array.push(current);
  }
  const indexMissing = getRandomANumber(0, lengthArray);
  const missingElement = array[indexMissing];
  array.splice(indexMissing, 1, '..');
  return [array, missingElement];
};

const progression = () => {
  const [expression, answerCorrect] = getArray();
  const question = expression.join(' ');
  return [question, answerCorrect];
};
const runProgressionGame = () => {
  const condition = ('What number is missing in the progression?');
  game(progression, condition);
};
export default runProgressionGame;
