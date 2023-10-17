import readlineSync from 'readline-sync';

import greetGamer from './src/cli.js';

const game = (partGame, condition) => {
  const userName = greetGamer();
  console.log(condition);
  for (let i = 0; i < 3; i += 1) {
    const [question, answerCorrect] = partGame();
    console.log('Question: ', question);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === String(answerCorrect)) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`);
      console.log("Let's try again, ", userName);
      return;
    }
  }
  console.log('Congratulations,', userName, '!');
};

export default game;
