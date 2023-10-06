import readlineSync from 'readline-sync';

export const getName = () => {
  const name = readlineSync.question('May I have your name?');
  return name;
};

const greetGamer = () => {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
};

export default greetGamer;
