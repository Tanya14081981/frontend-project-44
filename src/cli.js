import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

const greetGamer = (name) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
};

export default greetGamer;
