// Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
    default: "",
  },
  {
    type: "input",
    message: "Describe your project?",
    name: "description",
    default: "",
  },
  {
    type: "input",
    message: "What are the installation steps?",
    name: "install",
    default: "",
  },
  {
    type: "input",
    message: "What is your project for?",
    name: "usage",
    default: "",
  },
  {
    type: "input",
    message: "Were there any contributions to your project?",
    name: "contribution",
    default: "",
  },
  {
    type: "input",
    message: "What are the instructions for testing?",
    name: "testing",
    default: "",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
    default: "",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    default: "",
  },
  {
    type: "list",
    message: "Choose a license for your project?",
    name: "license",
    choices: ["MIT", "GPL", "WTFPL", "ISC", ""],
    default: "",
  },
];
// wraps inquirer in a function for initialization and return value
const promptQuestions = () => {
  return (
    inquirer
      // inquirer prompts the array of questions to the user
      .prompt(questions)
      .then((answers) => {
        // then stores their answers in a object called "response"
        let response = {
          title: answers.title,
          description: answers.description,
          install: answers.install,
          usage: answers.usage,
          contribution: answers.contribution,
          testing: answers.testing,
          username: answers.username,
          email: answers.email,
          license: answers.license,
        };
        // user response is passed into the generateMarkdown function and its return value is stored in "responseMD"
        let responseMD = generateMarkdown(response);
        // Create a function to write README file // responseMD is then passed into a writeFile function as the value and written to a "README.md" in the root.
        fs.writeFile("README.md", responseMD, (err) => {
          if (err) throw err;
        });
      })
      .catch((error) => {
        if (error.isTtyError) {
          console.log("Prompt couldn't be rendered in the current environment");
        } else {
          console.log("Something else went wrong");
        }
      })
  );
};

// Create a function to initialize app
function init() {
  promptQuestions();
}

// Function call to initialize app
init();
