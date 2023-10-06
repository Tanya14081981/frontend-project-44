import readlineSync from 'readline-sync';
import greetGamer from '../src/cli.js';

// eslint-disable-next-line consistent-return
const isEvenNum = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer:');
    const name = greetGamer();
    if (number % 2 === 0) {
      const answerYes = 'Correct!';
      const answerNo = `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet\'s try again, ${name}!`;
      switch (answer) {
        case 'yes':
          console.log(answerYes);
          return true;
        case 'no':
          console.log(answerNo);
          return false;
        default:
          console.log(answerNo);
          return false;
      }
    } else if (number % 2 !== 0) {
      const answerYes = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet\'s try again, ${name}!`;
      const answerNo = 'Correct!';
      switch (answer) {
        case 'yes':
          console.log(answerYes);
          return false;
        case 'no':
          console.log(answerNo);
          return true;
        default:
          console.log(answerNo);
          return false;
      }
    }
  }
};
export default isEvenNum;
