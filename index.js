// linking packages required
const fs = require('fs')
const generateMarkdown = require('./source/generateMarkdown');
const inquirer = require('inquirer');

// Created a array of objects to use as questions
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
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github account?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },
  
];

// Function to Write File
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      console.error(error)
    }
  })
}

// Init function to initialize all functions
function init() {
  inquirer.prompt(questions)
  .then(function (input) {
      writeToFile(`${input.title}-README.md`, generateMarkdown(input));
  });
};


init();
