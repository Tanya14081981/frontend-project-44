const getRandomInt = (max) => Math.floor(Math.random() * max);
export default getRandomInt;
export const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min)) + min;
