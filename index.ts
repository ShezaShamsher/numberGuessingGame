#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellowBright.bold.underline(`\n \t "Welcome To CodeWithSheza - Number Guessing Game" \n`));
//  1) Computer Will Generate A Random Number
//  2) User  Input For Guesssing Number 
//  3) Compare User Input With Computer Generated Number And Show Result
let condition = true;
while (condition) {
    const randomNumber = Math.floor(Math.random() * 10) + 1; //Generates a random number between 1 and 10 (Inclusive).

    const answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: chalk.greenBright("Please Guess a Number between 1-10:")
        }
    ])

    if (answer.userGuessedNumber == randomNumber) {
        console.log(chalk.blueBright.bold("\n \t Congratulations!! You Are Winner \n"));

    } else {
        console.log(chalk.redBright.bold("\n \t You Guessed Wrong Number \n"));
        console.log(chalk.bgBlueBright.bold(`\t The correct number is : ${randomNumber} \n`));


    }
    let playAgain = await inquirer.prompt([
        {
            name: "playAgain",
            type: "confirm",
            message: chalk.magentaBright("Do You Want To Play Again?"),
            default: false
        }

    ])
    condition = playAgain.playAgain;
}
console.log(chalk.grey.bold('\n \t Thanks You \n'));