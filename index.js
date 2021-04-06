// Dependencies Section
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');


// Constructors needed
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Function Section 
function init() {

    // function to add team
    function addTeam() {
        console.log("Let's meet the team!");
        inquirer.prompt([
            {
                // Ask which section to start
                type: 'list',
                name: 'meetTeam',
                message: "Who's on the team?",
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        // Start section depending on choice
        .then(userInput => {
            switch (userInput.meetTeam) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
            }
        });
    } 

    // Manager Section
    function addManager() {
        inquirer.prompt([
            {
                // Manager name
                type: 'input',
                name: 'manager',
                message: "Please enter manager's name",
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        console.log('Enter manager name!');
                        return false;
                    }
                }
            },
            {
                // Manager ID 
                type: 'input',
                name: 'idManager',
                message: 'Enter Manager ID',
                validate: idManager => {
                    if (idManager) {
                        return true;
                    } else {
                        console.log('Enter manager ID');
                        return false;
                    }
                }
            },
            {
                // Manager Email
                type: 'input',
                name: 'emailManager',
                message: "Enter manager's email",
                validate: emailManager => {
                    if (emailManager) {
                        return true;
                    } else {
                        console.log('Enter Email!');
                        return false;
                    }
                }
            },
            {
                // Manager Phone Number
                type: 'input',
                name: 'numberManager',
                message: "Enter manager's phone number",
                validate: numberManager => {
                    if (numberManager) {
                        return true;
                    } else {
                        console.log('Enter phone number!');
                        return false;
                    }
                }
            }
        ])
        // event after questions
        .then(info => {
            const manager = new Manager(info.manager, info.idManager, info.emailManager, info.numberManager);
        })
    }

    // Engineer Section
    function addEngineer() {
        inquirer.prompt([
            {
                // Engineer Name
                type: 'input',
                name: 'engineer',
                message: "Enter engineer's name",
                validate: engineerName => {
                    if (engineerName) {
                        return true;
                    } else {
                        console.log('Enter engineer name!');
                        return false;
                    }
                }
            },
            {
                // Engineer ID
                type: 'input',
                name: 'EngineerId',
                message: 'What is the engineer ID?',
                validate: engineerID => {
                    if (engineerID) {
                        return true;
                    } else {
                        console.log('Enter engineer ID');
                        return false;
                    }
                }
            },
            {
                // Engineer email
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter engineer email',
                validate: engineerEmail => {
                    if (engineerEmail) {
                        return true;
                    } else {
                        console.log('Enter engineer email');
                        return false;
                    }
                }
            },
            {
                // GitHub section
                type: 'input',
                name: 'engineerGit',
                message: "Enter engineer's GitHub username",
                validate: engineerGit => {
                    if (engineerGit) {
                        return true;
                    } else {
                        console.log('Enter Engineer GitHub');
                        return false;
                    }
                }
            }
        ])
        // event after answering questions
        .then(info => {
            const engineer = new Engineer(info.engineer, info.engineerId, info.engineerEmail, info.engineerGit);
        })
    }

    // Intern Section
    function addIntern() {
        inquirer.prompt([
            {
                // Intern Name
                type: 'input',
                name: 'intern',
                message: "Enter intern's name",
                validate: internName => {
                    if (internName) {
                        return true;
                    } else {
                        console.log('Enter inter name!');
                        return false;
                    }
                }
            },
            {
                // Intern ID
                type: 'input',
                name: 'internId',
                message: 'Enter Intern ID',
                validate: internID => {
                    if (internID) {
                        return true;
                    } else {
                        console.log('Enter Intern ID');
                        return false;
                    }
                }
            },
            {
                // Intern Email section
                type: 'input',
                name: 'internEmail',
                message: 'Enter Intern email',
                validate: internEmail => {
                    if (internEmail) {
                        return true;
                    } else {
                        console.log('Enter Intern Email');
                        return false;
                    }
                }
            },
            {
                // intern school section
                type: 'input',
                name: 'internSchool',
                message: 'What school did the intern attend?',
                validate: schoolIntern => {
                    if (schoolIntern) {
                        return true;
                    } else {
                        console.log('Enter school for intern');
                        return false;
                    }
                }
            }
        ])
        // event after answering questions
        .then(info => {
            const intern = new Intern(info.intern, info.internId, info.internEmail, info.internSchool);
        })
    }

    addTeam();
}
init();

