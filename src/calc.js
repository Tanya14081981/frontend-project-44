import readlineSync from 'readline-sync';

import greetGamer from './cli.js';

const isRightAnswer = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      break;
  }
};

const calcGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const userName = greetGamer();
    console.log('What is the result of the expression?');
    const numberOne = Math.floor(Math.random() * 100);
    const numberTwo = Math.floor(Math.random() * 100);
    const operator = '+' || '-' || '*';
    const expression = `${numberOne} ${operator} ${numberTwo}`;
    console.log('Question: ', expression);
    const answerCorrect = isRightAnswer(numberOne, numberTwo, operator);
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
export default calcGame;
