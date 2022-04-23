const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/page-template');

const teamData = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
                if(emailInput) {;
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

};

const promptNewMember = () => {

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
            name: 'name',
            message: 'What is the name of the engineer?',
            validate: engineerInput => {
                if(engineerInput){
                    return true;
                } else{
                    console.log('Please input the name of the engineer!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineers empoyee ID?',
            validate: engineerIdInput => {
                if(engineerIdInput) {
                    return true;
                } else {
                    console.log('Please input the engineers employee ID!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email?',
            validate: emailInput => {
                if(emailInput) {
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
            name: 'name',
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
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns employee Id?',
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please input the interns employee Id!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log('Please input the interns email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern go to?',
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('Please input the interns school!')
                    return false;
                }
            }
        }
    ])
}

function createTeam() {
    promptManager()
    .then((managerInput) => {
        const { name, id, email, officeNumber } = managerInput;

        const manager = new Manager(name, id, email, officeNumber);
        teamData.push(manager);
        console.log(teamData);
        addTeamMemeber();
    })
}

function addTeamMemeber() {
    promptNewMember()
    .then(newMemberInput => {
        if (newMemberInput.employee === 'Intern') {
            promptIntern(newMemberInput)
            .then((internInput) => {
                const { name, id, email, school} = internInput;

                const intern = new Intern(name, id, email, school);
                teamData.push(intern);
                console.log(teamData);
                addTeamMemeber()
            })
        }
        if (newMemberInput.employee === 'Engineer') {
            promptEngineer(newMemberInput)
            .then((engineerInput) => {
                const { name, id, email, gitHub } = engineerInput;

                const engineer = new Engineer(name, id, email, gitHub);
                teamData.push(engineer);
                console.log(teamData);
                addTeamMemeber()
            })
        }
        if (newMemberInput.employee === 'Done') {
            const pageHTML = generateHtml(teamData);

            fs.writeFile('./dist/index.html', pageHTML, err =>{
                if(err) throw new Error(err)
                console.log('Page created!');
        })
    }
})
}

createTeam();