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
    when: (answers) => answers.confirm,
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
    default: "npm test"
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

    // function to generate license badge

    const renderLicenseBadge = (license) => {
        return license !== "None" ? `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)` : '';
    };

    // function to generate license data

    const renderLicenseData = (license) => {
        return license !== "None" ? `Copyright @ ${license}. All rights reserved. Licensed under the ${license} license.` : "None"
    }






    const readmeContent = `
        # ${answers.title}

        </br>
        license badges go here

        </br>
        ---

        ##   📝 Description
        ---
        Readme file description goes here

        </br>
        </br>

        ---

        ##   ⌨️ Programming Languages
        ---
        Used languages go here

        </br>
        </br>

        ---
        ## 📑 Table of Contents
        ---
        - [Installation](#instalation)
        - [Usage](#usage)
        - [License](#license)
        - [Contribution](#contribution)
        - [Tests](#tests)
        - [Questions](#questions)
        </br>
        </br>

        ---

        ##  💿 Installation
        ---
        Installation guidelines go here
        </br>
        </br>

        ---

        ##   💻 Usage
        ---
        Usage guidelines go here
        </br>
        </br>

        ---

        ##  🔏 License
        ---
        Licenses go here
        </br>
        </br>

        ---

        ## 🛠️ Contribution
        ---
        List of contributors goes here
        </br>
        </br>

        ---

        ##   🧪 Tests
        ---
        Tests go here
        </br>
        </br>

        ---

        ##  💬 Questions
        ---
        Contact info goes here
        </br>
        </br>
        ---
    `;

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
    );
});
