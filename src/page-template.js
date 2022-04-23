const Employee = require("../lib/Employee");

function generateTeam(teamData) {
    console.log(teamData)
    function generateManagerHtml(manager) {
        return `
        <div class="col-4">
            <div class="card m-2 shadow rounded">
                <div class="card-header bg-primary text-light">
                    <h2 class="card-title">${manager.name}</h2>
                    <h3 class="card-title">${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Empoylee Id: ${manager.id}</li>
                        <li class="list-group-item">Email:
                            <a href="mailto:${manager.email}">${manager.email}</a>
                        </li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }
    function generateEngineerHtml(engineer){
        return `
        <div class="col-4">
            <div class="card m-2 shadow rounded">
                <div class="card-header bg-primary text-light">
                    <h2 class="card-title">${engineer.name}</h2>
                    <h3 class="card-title">${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Empoylee Id: ${engineer.id}</li>
                        <li class="list-group-item">Email:
                            <a href="mailto:${engineer.email}">${engineer.email}</a>
                        </li>
                        <li class="list-group-item">GitHub: 
                            <a href="https://github.com/${engineer.github}">${engineer.github}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }
    function generateInternHtml(intern){
        return `
        <div class="col-4">
            <div class="card m-2 shadow rounded">
                <div class="card-header bg-primary text-light">
                    <h2 class="card-title">${intern.name}</h2>
                    <h3 class="card-title">${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Empoylee Id: ${intern.id}</li>
                        <li class="list-group-item">Email:
                            <a href="mailto:${intern.email}">${intern.email}</a>
                        </li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
        </div>`
    }

    const html = [];

    html.push(teamData.filter(employee => employee.getRole() === 'Manager')
    .map(manager => generateManagerHtml(manager)));

    html.push(teamData.filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineerHtml(engineer)).join(''));

    html.push(teamData.filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateInternHtml(intern)).join(''));

    return html.join('')
}

module.exports = teamData => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
        <title>My Team</title>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="bg-secondary jumbotron mb-3 col-12 text-dark">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            ${generateTeam(teamData)}
        </div>

    </body>

    </html>`
}