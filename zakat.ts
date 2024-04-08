#! /ussr/bin/env node

import inquirer from "inquirer";

let zakat: number = 2.5;
let goldvalueInTola = 234800; // Approx
let goldweightInTola = 7.5;

const answer = await inquirer.prompt([
    {
        name: "Gold",
        message: "Enter Gold Weight:",
        type: "number",
    }
]);

let goldweight = answer.Gold;
let goldweightInTolaEntered = goldweight / 11.6638038; // Conversion from grams to tola

if (goldweightInTolaEntered >= goldweightInTola) {
    let calculate_zakat = (goldweightInTolaEntered * goldvalueInTola) * (zakat / 100);
    console.log(`The total calculated value of gold weighing ${goldweight} grams is ${calculate_zakat}`);
} else {
    console.log("Zakat is not applicable");
}
