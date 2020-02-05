/******************
 * YOUR CODE HERE *
 ******************/

function calculate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);

  switch(operator) {
    case '+':
    case 'plus':
    case 'added to':
      return num1 + num2;
    case '-':
    case 'minus':
    case 'subtracted from':
      return num1 - num2;
    case '*':
    case 'x':
    case 'X':
    case 'multiply':
    case 'times':
    case 'multiplied by':
      return num1 * num2;
    case '/':
    case 'divide':
    case 'divided by':
      return num1 / num2;
    case '%':
    case 'mod':
    case 'modulus':
      return num1 % num2;
    default:
      return "Sorry, that's not a mathematical operation!"
  }
}


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;