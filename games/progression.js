import readlineSync from 'readline-sync';

import greetGamer from '../src/cli.js';

import getRandomInt, { getRandomArbitrary } from '../function/getRandomInt.js';

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
  const userName = greetGamer();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const [expression, answer] = getArray();
    console.log('Question: ', expression.join(' '));
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== answer.toString()) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log("Let's try again, ", userName);
      return;
    }
    console.log('Correct!');
  }
  console.log('Congratulations,', userName, '!');
};
export default progression;
