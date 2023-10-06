import readlineSync from 'readline-sync';
import getName from './cli.js';

const isEvenNum = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result;
  const name = getName();
  do {
    result = false;
    for (let i = 0; i <= 2; i += 1) {
      const number = Math.floor(Math.random() * 100);
      console.log(`Question: ${number}`);
      const answer = readlineSync.question('Your answer:');
      if (number % 2 === 0) {
        const answerYes = 'Correct!';
        const answerNo = `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`;
        switch (answer) {
          case 'yes':
            console.log(answerYes);
            result = true;
            break;
          case 'no':
            console.log(answerNo);
            result = false;
            break;
          default:
            console.log(answerNo);
            result = false;
        }
      } else if (number % 2 !== 0) {
        const answerYes = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;
        const answerNo = 'Correct!';
        switch (answer) {
          case 'yes':
            console.log(answerYes);
            result = false;
            break;
          case 'no':
            console.log(answerNo);
            result = true;
            break;
          default:
            console.log(answerYes);
            result = false;
        }
      }
    }
  } while (result);
  return result;
};

export default isEvenNum;
