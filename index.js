const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Enter a short description of your project: ',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Describe how to install your application:',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Describe how to use your application:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Describe how other developers should contribute to the project:',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Describe how to test your project:',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GNU', 'BSD'], 
        name: 'license',
      },
      {
        type: 'input',
        message: 'Please add a link to your github profile:',
        name: 'github',
      },
      {
        type: 'input', 
        message: 'Please add your email:',
        name: 'email',
      },
];

// function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(`./output/${fileName}`, markdown, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers)
      })
}

// function call to initialize program
init();
