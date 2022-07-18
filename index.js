const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = ({
    title, 
    description, 
    installationInstructions, 
    usageInformation, 
    contributionGuidelines, 
    testInstructions, 
    license, 
    githubUsername, 
    email,
}) =>`# ${title}

## Description

${description}

## Installation

${installationInstructions}

## Usage

${usageInformation}

## Contributing

${contributionGuidelines}

### Tests

${testInstructions}

### Questions

For any questions you can reach me at my email ${email}. 
And if you want to contact me through github do so at ${githubUsername}`;


inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What do you want the title of your ReadME to be?",
            validate: value =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project',
            validate: value =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Provide instructions in order to install this application',
            validate: value =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Provide information in which manner this application will be used',
            validate: value =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Set up guidelines for how to contribue to the application',
            validate: value =>{if (value){return true} else {return 'I need a value to continue'}}
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Provide instructions for how to test the application',
            validate: value => {if(value){return true} else{return 'I need a value to continue'}}
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Input your github username',
            validate: value => {if (value){return true} else{return 'I need a value to continue'}}
        },
        {
            type: 'input',
            name: 'email',
            message: 'Input your email address',
            validate: value => {if (value){return true} else{return 'I need a value to continue'}}
        }
    ])
    .then ((answers) => {
        const ReadMEContent = generateMD(answers);

        fs.writeFile('README.md', ReadMEContent, (err) => 
        err ? console.log(err) : console.log('Successfully created README file!')
        );
    });