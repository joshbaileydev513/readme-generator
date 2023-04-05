// Included packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
const fs = require('fs')

// Created an array of questions for user input
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
        choices: ['MIT', 'GPL v3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    }, 
    { 
        type: 'input',
        name: 'contributing',
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

// Created a function to initialize app 
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const readmeInfo = generateMarkdown(data);
    // Tthen to write README file with an error message for not saving the file
        fs.writeFile('README.md', readmeInfo, function (err) {
            if (err) {
                console.log("Could not save your file", err)
            } else { 
                console.log('Congrats: Save was a Success and a new README file has been generated for you!!')
            }
        })
    })
}

// Function called to initialize app
init();
