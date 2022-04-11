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
      message: 'Hello Manager, what is your name:',
      default: 'Mr. Manager'
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'What is your employee id:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email:'
    },
    {
      type: 'input',
      name: 'officeNum',
      message: 'What is your office number:'
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
          }
        ]
    },
//     {
//       type: 'loop',
//       name: 'usage',
//       message: 'Would you like to add a step for usage?',
//       questions: [
//           {
//               type: 'input',
//               name: 'value',
//               message: 'Describe the usage step.'
//           }
//         ]
//     },
//     {
//       type: 'loop',
//       name: 'contributing',
//       message: 'Would you like to give credit to any contributors?',
//       questions: [
//           {
//               type: 'input',
//               name: 'value',
//               message: 'Enter contributors name.'
//           }
//         ]
//     },
//     {
//       type: 'loop',
//       name: 'tests',
//       message: 'Would you like to add any testing instructions for your project?',
//       questions: [
//         {
//           type: 'input',
//           name: 'value',
//           message: 'Please explain and provide examples of the test performed.'
//         }
//       ]
//     },
//     {
//       type: 'loop',
//       name: 'questions',
//       message: 'Add additioinal contact information for potential questions.',
//       questions: [
//         {
//           type: 'input',
//           name: 'name',
//           message: 'Enter contact name.'
//         },
//         {
//           type:'input',
//           name: 'gitHub',
//           message: 'Please enter your gitHub link to your profile.'
//         },
//         {
//           type: 'input',
//           name: 'email',
//           message: 'Please enter contributors email address'
//         },
//       ]
//     },
//     {
//       type: 'loop',
//       name: 'license',
//       message: 'Would you like to add a license?',
//       questions: [
//         {
//           type: 'input',
//           name: 'value',
//           message: 'Enter license name.'
//         }
//       ]
//     }
  ])
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