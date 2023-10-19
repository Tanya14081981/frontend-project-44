import game from '../index.js';

import getRandomInt, { getRandomArbitrary } from '../utils.js';

const getArray = () => {
  const a = 5;
  const b = 10;
  const lengthArray = getRandomArbitrary(a, b);
  const array = [];
  const startNum = getRandomInt(100);
  const step = Math.ceil(Math.random() * 10);
  for (let i = 0; i < lengthArray; i += 1) {
    const current = startNum + step * i;
    array.push(current);
  }
  const indexMissing = getRandomInt(lengthArray);
  const missingElement = array[indexMissing];
  array.splice(indexMissing, 1, '..');
  return [array, missingElement];
};

const progression = () => {
  const [expression, answerCorrect] = getArray();
  const question = expression.join(' ');
  return [question, answerCorrect];
};
const runGameProgression = () => {
  const condition = ('What number is missing in the progression?');
  game(progression, condition);
};
export default runGameProgression;
