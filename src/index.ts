import inquirer from "inquirer";
import chalk from "chalk";

const questions = [
  {
    type: "input",
    name: "first_name",
    message: "What's your name?",
  },
  {
    type: "checkbox",
    name: "programmer",
    message: "Are you a programmer?",
    choices: ["Yes", "No"],
  },
  {
    type: "confirm",
    name: "confirm_programmer",
    message: "Are you sure?",
  },
  {
    type: "checkbox",
    name: "isLoser",
    message: "Are you a loser?",
    choices: ["Yes", "No"],
  },
  {
    type: "confirm",
    name: "confirm_isLoser",
    message: "Are you sure?",
  },
  {
    type: "answers",
    name: "wait_a_minute",
    message: "...",
  },
  {
    type: "answers",
    name: "wait",
    message: "wait a minute...",
  },
  {
    type: "answers",
    name: "smell",
    message: "it actually smells like a loser",
  },
];

interface Answers {
  first_name: string;
  isLoser: boolean;
}

const rudeQuestionnaire = async () => {
  await inquirer.prompt(questions).then((answers: Answers) => {
    answers.isLoser = true;

    const user = {
      name: answers.first_name,
      isLoser: answers.isLoser,
    };

    console.log(chalk.green(JSON.stringify(user)));
  });
};

await rudeQuestionnaire();
