import readlineSync from 'readline-sync';

import greetGamer from '../src/cli.js';

import getRandomInt from '../function/getRandomInt.js';

const isNumPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  return (num % 2 === 0 || num % 3 === 0) ? 'no' : 'yes';
};

const isItPrime = () => {
  const userName = greetGamer();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Question: ', number);
    const answerCorrect = isNumPrime(number);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== answerCorrect) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`);
      console.log("Let's try again, ", userName);
      return;
    }
    console.log('Correct!');
  }
  console.log('Congratulations,', userName, '!');
};
export default isItPrime;
