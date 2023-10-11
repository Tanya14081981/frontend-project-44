import readlineSync from 'readline-sync';

const getName = (name) => {
  readlineSync.question('May I have your name? ');
  return name;
};

export default getName;
