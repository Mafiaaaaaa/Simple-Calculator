#! /usr/bin/env node
console.log("Welcome to Shaheer's Simple Calculator");
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    { message: "operator", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"] },
]);
if (answer.operator == "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator == "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator == "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("invalid");
}
