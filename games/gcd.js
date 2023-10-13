import readlineSync from 'readline-sync';

import greetGamer from '../src/cli.js';

import getRandomInt from '../function/getRandomInt.js';

const getMaxDevidor = (numberOne, numberTwo) => {
  const maxNum = Math.max(numberOne, numberTwo);
  let maxDevidor = 1;
  let value1 = numberOne;
  let value2 = numberTwo;
  for (let i = 1; i <= maxNum; i += 1) {
    if (value1 === value2) {
      maxDevidor = value1;
    } else if (value1 > value2) {
      value1 -= value2;
    } else if (value2 > value1) {
      value2 -= value1;
    }
  } return maxDevidor;
};
const maxGeneralDivider = () => {
  const userName = greetGamer();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const numberOne = getRandomInt(100);
    const numberTwo = getRandomInt(100);
    const expression = `${numberOne} ${numberTwo}`;
    console.log('Question: ', expression);
    const answerCorrect = getMaxDevidor(numberOne, numberTwo);
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
export default maxGeneralDivider;
