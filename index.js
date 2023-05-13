// Declare variables to hold dependencies

const inquirer = require("inquirer");
const fs = require("fs");


// Declare variable to hold svg icons for programming languages

const languageIcons = {
    HTML: '<img src="../assets/html5.svg" alt="HTML">',
    CSS: '<img src="../assets/css3.svg" alt="CSS">',
    JavaScript: '<img src="../assets/javascript.svg" alt="JavaScript">',
    NodeJS: '<img src="../assets/nodejs.svg" alt="NodeJS">',
    React: '<img src="../assets/react.svg" alt="React">',
    Heroku: '<img src="../assets/heroku.svg" alt="Heroku">',
}

// Use inquirer to build questions to obtain data for professional readme
EDITOR='code --wait'
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
    choices: ["HTML","CSS","JavaScript","NodeJS","React","Heroku"],
    when: (answers) => answers.confirm,
    },
    {
    type: 'editor',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
    default: "Fork and clone repository to local machine and then Run npm i to install dependencies in local project directory"
    },
    {
    type: 'editor',
    name: 'usage',
    message: 'Provide instructions and examples on how to use your project.',
    default: "Open integrated terminal, Run node index.js, Answer the prompts that follow, A proREADME.md will be generated and stored in the 'readme' folder."
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
    default: "None"
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
    default: "user@domain.com"
    },
])

.then((answers) => {

    // function to generate license badge

    const renderLicenseBadge = (license) => {
        return license !== "None" ? `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)` : '';
    };

    // function to generate license data

    const renderLicenseData = (license) => {
        return license !== "None" ? ` This project is licensed under the terms of the \`${license}\` license. ` : "None"
    }

    // function to generate selected programming lenguages icons

    let renderLanguageIcons = "";
    if (answers.confirm) {
        renderLanguageIcons = answers.languages
            .filter(language => languageIcons[language])
            .map(language => languageIcons[language])
            .join("\n");

            
    }
    console.log(renderLanguageIcons);
    // Generate Programming Languages section

    const renderLanguageSection = (confirm) => {
        return confirm !== false ? 
`
##   ⌨️ Programming Languages
---

</br>

<div style="display: inline_block">

${renderLanguageIcons}

</div>

</br>


`                               : ""
    }

    // Variable that will store all markdown file data

    const readmeContent = 
`
# ${answers.title}

</br>

${renderLicenseBadge(answers.license)}

</br>

---

##   📝 Description


---

</br>

${answers.description}

</br>

---

${renderLanguageSection(answers.confirm)}

---

## 📑 Table of Contents

---

</br>

- [Installation](#💿-installation)
- [Usage](#💻-usage)
- [License](#🔏-license)
- [Contribution](#🛠️-contribution)
- [Tests](#🧪-tests)
- [Questions](#💬-questions)

</br>


---

##  💿 [Installation](#📑-table-of-contents)

---

</br>

\`\`\`
${answers.installation}
\`\`\`

</br>


---

##   💻 [Usage](#📑-table-of-contents)

---

</br>

${answers.usage}

</br>


---

##  🔏 [License](#📑-table-of-contents)

---

</br>


${renderLicenseData(answers.license)}


</br>


---

## 🛠️ [Contribution](#📑-table-of-contents)

---

</br>


${answers.contribution}

</br>


---

##   🧪 [Tests](#📑-table-of-contents)

---

</br>


\`\`\`
${answers.tests}
\`\`\`

</br>


---

##  💬 [Questions](#📑-table-of-contents)

---

</br>

Please contact me at ${answers.email} with any questions.

</br>

To view more of my work, please visit my [GitHub](https://github.com/${answers.github}/) page.

</br>

---

[Back to Top](#📝-description)

`;

    fs.writeFile("./readme/proReadME.md", readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created readme file!')
    );
});

