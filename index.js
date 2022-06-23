// TODO: Include packages needed for this application
const inuqirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./source/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
  type: 'input',
  name: 'title',
  message: 'What is the title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is a description of the project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install the project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use the project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are guidelines for contributing to the project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you test the project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to use?',
    choices: [
      'apache_2.0',
      'gplv3',
      'isc',
      'mit',
      'Mpl_2.0'
    ]
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
