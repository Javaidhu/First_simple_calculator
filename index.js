#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter first number:", type: "number", name: "firstNumber" },
    { message: "Enter second number:", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multifilication", "Division"]
    },
]);
// conditinal statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multifilication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber + answer.secondNumber);
}
{
    console.log("Please select your operator");
}
