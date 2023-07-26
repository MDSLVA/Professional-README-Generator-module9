const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate the README content based on user input
function generateREADME(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

![License](https://img.shields.io/badge/license-${encodeURIComponent(data.license)}-blue.svg)

${data.licenseInfo}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For additional questions, you can reach me via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'licenseInfo',
    message: 'Enter information about the chosen license:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  // Write the data to the specified file
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
}

// Function to initialize app
function init() {
  // Ask the user questions and generate the README
  inquirer.prompt(questions).then((answers) => {
    // Generate the README content based on user's answers
    const readmeContent = generateREADME(answers);
    const folderPath = './generated-readme';
    const filePath = `${folderPath}/README.md`;

    // Write the generated README to the file
    writeToFile(filePath, readmeContent);
  });
}

// Function call to initialize app
init();