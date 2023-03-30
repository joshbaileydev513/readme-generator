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
        name: 'usage',
        message: "Project Usage?"
    }, 
    { 
        type: 'list',
        name: 'license',
        message: "Please choose a License for your Repo",
        choices: ['MIT', 'GPL', 'Apache', 'BSD', 'None']
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
        name: 'github',
        message: 'Please enter your GitHub username for Questions'
    },
    { 
        type: 'input',
        name: 'email',
        message: 'Please enter your Email for Questions'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
