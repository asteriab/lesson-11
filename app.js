// // Task1

// let number = prompt("Enter your number:");
// number *= number;
// alert(`The square number is ${number}`);

// // Task2

// let username = prompt("Введіть ім'я:");
// let sum = prompt("Введіть суму депозиту:");
// let term = prompt("Введіть термін депозиту (місяців):");
// let percent = 0.2;
// let profit = (percent / 12) * sum * term;
// alert(
//   `Шановний(а) ${username}, Ви внесли ${sum} грн, під 20% річних, на термін ${term} місяців. За цей період часу Ви заробите ${profit} грн.`
// );

// // Task3

// let number1 = Number(prompt("Enter the first number:"));
// let number2 = Number(prompt("Enter the second number:"));
// let suma = number1 + number2;
// let difference = number1 - number2;
// let product = number1 * number2;
// let quotient = number1 / number2;

// alert(`The sum is ${suma}.
// The difference is ${difference}
// The product is ${product}
// The quotient is ${quotient}`);

// Task4

let age = Number(prompt("Enter your age:"));
if ((age >= 18) & (age <= 45)) {
  alert("You can join!");
} else {
  alert("You cannot join :(");
}

// Task5

let a = Number(prompt("Enter number A:"));
let b = Number(prompt("Enter number B:"));
if ((a > 3) & (a < 12) & (b >= 5) & (b < 13)) {
  alert("Correct!");
} else {
  alert("Not correct.");
}

// Task 6

let userName = prompt("Введіть ім'я:");
let sum = prompt("Введіть суму депозиту:");
let term = prompt("Введіть термін депозиту (місяців):");
let percent = null;

if (term < 6) {
  percent = 15;
} else if ((term >= 6) & (term < 9)) {
  percent = 16;
} else {
  percent = 17;
}

console.log(percent);

let profit = (percent / 100 / 12) * sum * term;
alert(
  `Шановний(а) ${userName}, Ви внесли ${sum} грн, під ${percent}% річних, на термін ${term} місяців. За цей період часу Ви заробите ${Math.trunc(
    profit
  )} грн.`
);
