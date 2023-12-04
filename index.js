// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

var inquirer = require("inquirer");
// TODO: Create an array of questions for user input
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
const promptQuestions = () => {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
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
      let responseMD = generateMarkdown(response);
      // TODO: Create a function to write README file
      fs.writeFile("README.md", responseMD, (err) => {
        if (err) throw err;
      });
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
};

// TODO: Create a function to initialize app
function init() {
  promptQuestions();
}

// Function call to initialize app
init();
