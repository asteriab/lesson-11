// Task1

let number = prompt("Enter your number:");
number *= number;
alert(`The square number is ${number}`);

// Task2

let username = prompt("Введіть ім'я:");
let sum = prompt("Введіть суму депозиту:");
let term = prompt("Введіть термін депозиту (місяців):");
let percent = 0.2;
let profit = (percent / 12) * sum * term;
alert(
  `Шановний(а) ${username}, Ви внесли ${sum} грн, під 20% річних, на термін ${term} місяців. За цей період часу Ви заробите ${profit} грн.`
);

// Task3

let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));
let suma = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;

alert(`The sum is ${suma}.
The difference is ${difference}
The product is ${product}
The quotient is ${quotient}`);
