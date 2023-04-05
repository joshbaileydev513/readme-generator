// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GPL v3') {
    license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }  else if (license === 'Apache 2.0') {
    license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }  else if (license === 'BSD 3-Clause') {
    license = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }  else {
    license = '';  
  }
  return license;
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    license = 'https://opensource.org/licenses/MIT';
  } else if (license === 'GPL v3') {
    license = 'https://www.gnu.org/licenses/gpl-3.0';
  }  else if (license === 'Apache 2.0') {
    license = 'https://opensource.org/licenses/Apache-2.0';
  }  else if (license === 'BSD 3-Clause') {
    license = 'https://opensource.org/licenses/BSD-3-Clause';
  }  else {
    license = '';  
  }
  return license;
}

// Created a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}
# ${data.title}

## Table of Contents
- [Project Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.github}
${data.email}
`;
}

module.exports = generateMarkdown;
