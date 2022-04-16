const inquirer = require('inquirer');
const fs = require('fs');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is the name of the team manager?',
            validate: managerInput => {
                if(managerInput){
                    return true
                } else {
                    console.log('Please input the managers name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers employee ID?',
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please input the managers email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log('Please input the managers office number!')
                    return false;
                }
            }
        }
    ])
}