const inquirer = require('inquirer');
const fs = require('fs');

const teamData = {};

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is the name of the team manager?',
            validate: managerInput => {
                if(managerInput){
                    teamData.managerName = managerInput;
                    return true
                } else {
                    console.log('Please input the managers name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the managers employee ID?',
            validate: idInput => {
                if(idInput) {
                    teamData.managerId = idInput;
                    return true;
                } else {
                    console.log('Please enter the employee ID!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the managers email?',
            validate: emailInput => {
                if(emailInput) {
                    teamData.managerEmail = emailInput;
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
                    teamData.managerOffice = officeInput;
                    return true;
                } else {
                    console.log('Please input the managers office number!')
                    return false;
                }
            }
        }
    ])

};

const promptNewMember = managerPromptData => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Would you like to add an Engineer or Intern? Or are you finished adding members to your team?',
            choices: ['Engineer', 'Intern' , 'Done']
        }
    ])
}

const promptEngineer = (data) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineer',
            message: 'What is the name of the engineer?',
            validate: engineerInput => {
                if(engineerInput){
                    teamData.engineerName = engineerInput;
                    return true;
                } else{
                    console.log('Please input the name of the engineer!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the engineers empoyee ID?',
            validate: engineerIdInput => {
                if(engineerIdInput) {
                    teamData.engineerId = engineerIdInput;
                    return true;
                } else {
                    console.log('Please input the engineers employee ID!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email?',
            validate: emailInput => {
                if(emailInput) {
                    teamData.engineerEmail = emailInput;
                    return true;
                } else {
                    console.log('Please input the engineers email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the engineers GitHub profile name?',
            validate: githubInput => {
                if(githubInput) {
                    teamData.engineerGitHub = githubInput;
                    return true;
                } else {
                    console.log('Please input the engineers GitHub profile name!')
                    return false;
                }
            }
        }
    ])
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'intern',
            message: 'What is the name of the intern?',
            validate: internInput => {
                if(internInput){
                    return true;
                } else{
                    console.log('Please input the name of the intern!')
                    return false;
                }
            }
        },
    ])
}

promptManager()
    .then(promptNewMember)
    .then(results => {
        console.log('teamData: ', teamData);
        if (results.employee === 'Intern') {
            promptIntern(results);
        }
        if (results.employee === 'Engineer') {
            promptEngineer(results)
        }
        if (results.employee === 'Done') {
            const pageHTML = generateHtml(results);

            fs.writeFile('./dist/index.html', pageHTML, err =>{
                if(err) throw new Error(err)
                console.log('Page created!');
        })
    }
})