const inquirer = require("inquirer");
const fs = require('fs')

function askQuestions () {
    inquirer.prompt([
        {
            type: "input",
            message: "How are you?",
            name: "feeling"
        },
        {
            type: "input",
            message: "What is a description of your project?",
            name: "description"
        },
        {
            type: 'list',
            message: "Which juice is best?",
            choices: ["Orange Juice", "Apple Juice", "Grape Juice", "Lemon Juice"],
            name: "juiceChoice"
        }
    ]).then(answer => {
        console.log(answer)
        createREADME(answer)
    })
}

function createREADME(obj) {
    const syntax =`# This is a README GENERATOR

## Description

This is a short description of this application: ${obj.description}
    
[This is a link to Google](https://www.google.com)
`

    fs.writeFile('README.md', syntax, err => {
        if(err) throw err;
    })
}

askQuestions()