import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "QUESTION1",
        message: "1) What is a result of the following typeScript expression: `5 + 3`?",
        type: "list",
        choices: ["a) 8", "b) 2", "c) 15", "d) 53"]
    },
    {
        name: "QUESTION2",
        message: "2) which operator is used to assign a value to a variable in typescript?",
        type: "list",
        choices: ["a) ==", "b) ===", "c) =", "d) +="]
    },
    {
        name: "QUESTION3",
        message: "3) what is a purpose of the logical AND operator(&&) in TyeScript?",
        type: "list",
        choices: ["a) Returns if either operand is ture", "b) Returns if both operand  are false", "c) Returns if both operand are ture", "d) None of the them"]
    },
    {
        name: "QUESTION4",
        message: "4) what does the following TypeScript expression evaluate to: `!(ture)`?",
        type: "list",
        choices: ["a) ture", "b) Error", "c) false", "d) undefined"]
    },
    {
        name: "QUESTION5",
        message: "5) what does the following TypeScript expression evaluate to: `5 * 0`?",
        type: "list",
        choices: ["a) 0", "b) infinity", "c) 5", "d) NaN"]
    },
    {
        name: "QUESTION6",
        message: "6) what is the result of the following TypeScript expression evaluate to: `10 > 5 && 20 < 30`?",
        type: "list",
        choices: ["a) ture", "b) Error", "c) false", "d) undefined"]
    },
    {
        name: "QUESTION7",
        message: "7) which operator is used to concatenate string in TypeScript?",
        type: "list",
        choices: ["a) *", "b) +", "c) /", "d) %"]
    },
    {
        name: "QUESTION8",
        message: "8) what does the following TypeScript expression evaluate to: 10 <= 5?",
        type: "list",
        choices: ["a) ture", "b) Error", "c) false", "d) undefined"]
    },
    {
        name: "QUESTION9",
        message: "9) what will be the result of the following TypeScript expression evaluate to: `10 > 5 && 20 < 30`?",
        type: "list",
        choices: ["a) HelloWorld", "b) Hello World ", "c) Hello ", "d) 'Hello' + 'World'"]
    },
    {
        name: "QUESTION10",
        message: "10) what is the result of the following TypeScript expression evaluate to: `2 ** 3`?",
        type: "list",
        choices: ["a) 6", "b) 8", "c) 12", "d) 5"]
    },
]);
if (answer.QUESTION1 === "a) 8") {
    console.log("1) correct");
}
else {
    console.log("1) wrong");
}
if (answer.QUESTION2 === "c) =") {
    console.log("2) correct");
}
else {
    console.log("2) wrong");
}
if (answer.QUESTION3 === "c) Returns if both operand are ture") {
    console.log("3) correct");
}
else {
    console.log("3) wrong");
}
if (answer.QUESTION4 === "c) false") {
    console.log("4) correct");
}
else {
    console.log("4) wrong");
}
if (answer.QUESTION5 === "a) 0") {
    console.log("5) correct");
}
else {
    console.log(") 5wrong");
}
if (answer.QUESTION6 === "a) ture") {
    console.log("6) correct");
}
else {
    console.log("6) wrong");
}
if (answer.QUESTION7 === "b) +") {
    console.log("7) correct");
}
else {
    console.log("7) wrong");
}
if (answer.QUESTION8 === "c) false") {
    console.log("8) correct");
}
else {
    console.log("8) wrong");
}
if (answer.QUESTION9 === "d) 'Hello' + 'World'") {
    console.log("9) correct");
}
else {
    console.log("9) wrong");
}
if (answer.QUESTION10 === "b) 8") {
    console.log("10) correct");
}
else {
    console.log("10) wrong");
}
