// Declare variables to hold dependencies

const inquirer = require("inquirer");
const fs = require("fs");

// Use inquirer to build questions to obtain data for professional readme

inquirer
.prompt([
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
    type: 'confirm',
    name: 'confirm',
    message: 'Would you like to add a section to display the programming languages used in your project?',
    },
    {
    type: 'checkbox',
    name: 'languages',
    message: 'Select the languages used in your project:',
    choices: ["HTML","CSS","JavaScript","NodeJS","SQL","React","Heroku"],
    when: (answer) => answer.confirm,
    },
    {
    type: 'editor',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
    },
    {
    type: 'editor',
    name: 'Usage',
    message: 'Provide instructions and examples on how to use your project.',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Select the license the project will have',
    choices: ["MIT", "GLP3.0", "BSD2", "BSD3", "None"],
    },
    {
    type: 'editor',
    name: 'contribution',
    message: 'List collaborators, third-parties assets or tutorials used to achieve your project',
    },
    {
    type: 'editor',
    name: 'tests',
    message: 'Write tests for your application. Then provide examples on how to run them here.',
    },
    {
    type: 'input',
    name: 'github',
    message: 'Type your GitHub user name.',
    },
    {
    type: 'input',
    name: 'email',
    message: 'Type your email address.',
    },
])

.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
    );
});
