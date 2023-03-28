// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: "Project Title?"
    }, 
    { 
        type: 'input',
        name: 'description',
        message: "Project Description?"
    }, 
    { 
        type: 'input',
        name: 'installation',
        message: "Installation Instructions?"
    }, 
    { 
        type: 'input',
        name: 'title',
        message: "Project Title?"
    }, 
    { 
        type: 'input',
        name: 'usage',
        message: "Project Usage?"
    }, 
    { 
        type: 'input',
        name: 'contributions',
        message: "Project Contributors?"
    }, 
    { 
        type: 'input',
        name: 'tests',
        message: "Tests Used?"
    }, 
    { 
        type: 'input',
        name: 'questions',
        message: 'For Questions (GitHub)?',
        message: 'For Questions (Email)?'
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
