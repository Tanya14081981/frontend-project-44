import readlineSync from 'readline-sync';


const isEvenNum = () => {
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
    }
    else if (number % 2 !== 0) {
        const answerYes = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet\'s try again, ${name}!`;
        const answerNo =  'Correct!';
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
  };
  isEvenNum();
  export default isEvenNum;