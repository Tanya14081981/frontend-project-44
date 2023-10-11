import readlineSync from 'readline-sync';

import greetGamer from './cli.js';

import getName from './getName.js';

const isEvenNum = (number) => number % 2 === 0;

const startGame = () => {
  const userName = getName();
  greetGamer(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log('Question: ', number);
    const answerCorrect = isEvenNum(number) ? 'yes' : 'no';
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
export default startGame;
