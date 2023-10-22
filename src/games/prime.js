import getRandomANumber from '../utils.js';

import game from '../index.js';

const isNumPrime = (value) => {
  const num = Number(value);
  if (num === 1 || num === 0) {
    return false;
  }
  for (let i = 2; i < value; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const question = String(getRandomANumber(0, 100));
  const answerCorrect = isNumPrime(question) ? 'yes' : 'no';
  return [question, answerCorrect];
};

const runPrimeGame = () => {
  const condition = ('Answer "yes" if given number is prime. Otherwise answer "no".');
  game(playPrime, condition);
};
export default runPrimeGame;
