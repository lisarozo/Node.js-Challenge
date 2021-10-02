// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
 
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "How are you?",
    name: "feeling",
  },
  {
    type: "input",
    message: "What is a description of your project?",
    name: "description",
  },
  {
    type: "list",
    message: "Which juice is best?",
    choices: ["Orange Juice", "Apple Juice", "Grape Juice", "Lemon Juice"],
    name: "juiceChoice",
  },
  {
    type: "input",
    message: "What is the title to your project?",
    name: "title",

  },
];
    


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
      });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    console.log(answer);
    writeToFile("README.md", generateMarkdown({...answer}));
  });
}

// Function call to initialize app
init();
