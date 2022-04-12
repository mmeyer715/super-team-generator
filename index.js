// Packages needed for this application
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const getEmployeeData = require('./utils/getEmployeeData');

// Collect data for Manager and their employee(s) 
function promptEmployeeData() {
 return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Hello Manager, enter your name:',
      default: 'Mr. Manager'
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter your employee id:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email:'
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'Enter your office number:'
    },
    {
      type: 'loop',
      name: 'employees',
      message: 'Would you like to add an employee today?',
      questions: [
          {
            type: 'input',
            name: 'name',
            message: 'Enter your employee\'s name:'
          },
          {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee\'s id:'
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your employee\'s email:'
          },
          {
            type: 'list',
            name: 'role',
            message: 'What is this employee\'s role?',
            choices: ['Engineer', 'Intern']
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your employee\'s github name:',
            when: (answers) => answers.role === 'Engineer'
          },
          {
            type: 'input',
            name: 'school',
            message: 'Enter your employee\'s school:',
            when: (answers) => answers.role === 'Intern'
          }
        ]
    }
  ])
}

// initializes app
async function init() {
  const data = await promptEmployeeData();
  getEmployeeData(data);
}

// Function call to initialize app
init();