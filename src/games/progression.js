import game from '../index.js';

import getRandomANumber from '../utils.js';

const getArray = (step, firstEl, countEl) => {
  const array = [];
  for (let i = 0; i < countEl; i += 1) {
    const current = firstEl + step * i;
    array.push(current);
  }
  return array;
};

const progression = () => {
  const step = Math.ceil(Math.random() * 10);
  const countEl = getRandomANumber(5, 10);
  const firstEl = getRandomANumber(0, 100);
  const array = getArray(step, firstEl, countEl);

  const indexMissing = getRandomANumber(0, countEl);
  const missingElement = array[indexMissing];
  array.splice(indexMissing, 1, '..');
  const answerCorrect = String(missingElement);
  const question = array.join(' ');
  return [question, answerCorrect];
};
const runProgressionGame = () => {
  const condition = ('What number is missing in the progression?');
  game(progression, condition);
};
export default runProgressionGame;
