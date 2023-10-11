import getName from './getName.js';

const greetGamer = (userName) => {
  console.log('Welcome to the Brain Games!');
  getName();
  console.log(`Hello, ${userName}!`);
};

export default greetGamer;
