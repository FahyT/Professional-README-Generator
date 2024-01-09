const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'project',
      },
      {
        type: 'input',
        message: 'Enter a short description of your project: ',
        name: 'description',
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
        type: 'input', //find correct type from inquirer logic
        message: 'Choose a license for your project:',
        name: 'license',
      },
      {
        type: 'input',
        message: 'Please add a link to your github profile:',
        name: 'license',
      },
      {
        type: 'input', 
        message: 'Please add your email:',
        name: 'license',
      },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
