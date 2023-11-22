// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  switch (data.license) {
    case "MIT":
      return `(https://img.shields.io/badge/License-MIT-yellow.svg)]`;
      break;
    case "GPL":
      return `(https://img.shields.io/badge/License-GPLv3-blue.svg)])`;
      break;
    case "WTFPL":
      return `(https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]`;
      break;
    case "ISC":
      return `(https://img.shields.io/badge/License-ISC-blue.svg)]`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  switch (data.license) {
    case "MIT":
      return `(https://opensource.org/licenses/MIT)`;
      break;
    case "GPL":
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "WTFPL":
      return `(http://www.wtfpl.net/about/)`;
      break;
    case "ISC":
      return `(https://opensource.org/licenses/ISC)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  switch (data.license) {
    case "MIT":
      return `[![License: MIT]`;
      break;
    case "GPL":
      return `[![License: GPL v3]`;
      break;
    case "WTFPL":
      return `[![License: WTFPL]`;
      break;
    case "ISC":
      return `[![License: ISC]`;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // renderLicenseBadge()
  // renderLicenseLink()
  // renderLicenseSection()
  return `# ${data.title}

## Table of Contents
-[Installation](#installation)<br>
-[Usage](#usage)<br>
-[Contributing](#contributing)<br>
-[Tests](#tests)<br>
-[Questions](#questions)<br>
-[License](#license)<br>

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.testing}

## Questions
What is my github repository?<br>
https://github.com/${data.username}

What is my email and how can you reach me?<br>
My email is ${data.email}, please feel free to send me an email with any questions regarding projects or colllaborations

## License
${data.license}
`;
}

module.exports = generateMarkdown;
