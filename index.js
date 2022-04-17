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
        },
        {
            type: 'list',
            name: 'employee',
            message: 'Would you like to add an Engineer or Intern? Or are you finished adding members to your team?',
            choices: ['Engineer', 'Intern' , 'Done']
        }
    ])
}

const promptEngineer = () => {
    return inquirer.prompt([
        {

        },
    ])
}

const promptIntern = () => {
    return inquirer.prompt([
        {

        },
    ])
}

promptManager()
    .then(results => {
        if (results.employee === 'Intern') {
            promptIntern();
        }
        if (results.employee === 'Engineer') {
            promptEngineer();
        }
        if (results.employee === 'Done') {
            const pageHTML = generateHtml(results);

            fs.writeFile('./dist/index.html', pageHTML, err =>{
                if(err) throw new Error(err)
                console.log('Page created!');
            })
        }
    });