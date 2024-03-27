#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answers: {
    numberOne: number;
    numberTwo: number;
    operator: string;
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter your first number",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number",
    },
    {
        type: "list",
        name: "operator",
        message: "Select an operator",
        choices: ["+", "-", "*", "/"],
    },
]);

const { numberOne, numberTwo, operator } = answers;
let result  // Initialize result with a default value

switch (operator) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
    default:
        console.log(chalk.red("Invalid operator"));
}

console.log(chalk.yellow(`${numberOne} ${operator} ${numberTwo} = ${result}`));