// Packages needed for this application
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs');
//const getEmployeeData = require('./utils/getEmployeeData');

// Collect data for Manager and their employee(s) 
function getEmployeeData() {
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
              type: 'list',
              name: 'role',
              message: 'What is this employee\'s role?',
              choices: ['Engineer', 'Intern']
          },
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
          }
        ]
    }
  ])
  .then((responses) => {
      if(responses.employees.length === 0){
          return responses;
    }
      else{
          //TODO: Given employee's role, Then prompt correct question and add to responses
          return responses;
    }
  })
}

// // writes user information to new file
// function writeToFile(fileName, data) {

//   fileName = `${fileName
//     .toLowerCase()
//     .split(' ')
//     .join('')}.md`;
    
//   fs.writeFile(fileName, data, err =>
//   err ? console.log(err) : console.log('Success!')
//   );
// }

// initializes app
async function init() {
  const data = await getEmployeeData();
  console.log(data);
//   const setReadme = generateMarkdown(data);
//   writeToFile(data.title, setReadme);
}

// Function call to initialize app
init();