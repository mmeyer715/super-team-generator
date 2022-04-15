// Import packages needed
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Constants = require('./constants');
const fs = require = require('fs');

// Function to get all employees
const getEmployeeData = (data) => {

	const employeeArray = [];
    
	// Pulling manager data
    const manager = new Manager(data.name, data.employeeId, data.email, data.officeNum);
    employeeArray.push(manager);

    // Pulling employee data
    for(let i = 0; i < data.employees.length; i++) {
        if(data.employees[i].role === "Engineer"){
            const engineer = new Engineer(data.employees[i].name, data.employees[i].employeeId, data.employees[i].email, data.employees[i].github);
            employeeArray.push(engineer);
        }
        else{
            const intern = new Intern(data.employees[i].name, data.employees[i].employeeId, data.employees[i].email, data.employees[i].school);
            employeeArray.push(intern);
        }
    }
	
	createHtml(employeeArray);
}

// Function that takes employees data with literal templates and creates an html file
const createHtml = (teamMemebers) => {
	const cardList = [];

	// Create cards based on employee role
	for (let i = 0; i < teamMemebers.length; i++) {
		if (teamMemebers[i].getRole() === 'Manager') {
			cardList.push(`<div class="col l3 m6 s12">
			<div class="card z-depth-5">
			  <div class="card-content blue white-text">
			  <span class="row employee-header">${teamMemebers[i].getName()}</span>
			  <i class="material-icons">free_breakfast</i>
			  <span class="row employee-header"> ${teamMemebers[i].getRole()}</span>
				</div>
			<div class="card-action blue lighten-4">
			  <div class="row detail-rows">
			  <span id="employee-id">ID: ${teamMemebers[i].getId()}</span>
			</div>
			<div class="row detail-rows">
			  <span>Email: </span>
			  <a href="mailto:${teamMemebers[i].getEmail()}" id="employee-email">${teamMemebers[i].getEmail()}</a>
			</div>
			<div class="row detail-rows">
			  <span id="unique-role-value">Office Number: ${teamMemebers[i].getOfficeNumber()}</span>
			</div>
			</div>
			</div>
		  </div>`)
		} else if (teamMemebers[i].getRole() === 'Engineer') {
			cardList.push(`<div class="col l3 m6 s12">
			<div class="card z-depth-5">
			  <div class="card-content blue white-text">
			  <span class="row employee-header">${teamMemebers[i].getName()}</span>
			  <i class="material-icons">build</i>
			  <span class="row employee-header"> ${teamMemebers[i].getRole()}</span>
			</div>
			<div class="card-action blue lighten-4">
			  <div class="row detail-rows">
			  <span id="employee-id">ID: ${teamMemebers[i].getId()}</span>
			</div>
			<div class="row detail-rows">
			  <span>Email: </span>
			  <a href="mailto:${teamMemebers[i].getEmail()}" id="employee-email">${teamMemebers[i].getEmail()}</a>
			</div>
			<div class="row detail-rows">
			  <span id="unique-role-value">GitHub: ${teamMemebers[i].getGithub()}</span>
			</div>
			</div>
			</div>
		  </div>`)
		} else {
			cardList.push(
				`<div class="col l3 m6 s12">
			<div class="card z-depth-5">
			  <div class="card-content blue white-text">
			  <span class="row employee-header">${teamMemebers[i].getName()}</span>
			  <i class="material-icons">school</i>
			  <span class="row employee-header"> ${teamMemebers[i].getRole()}</span>
			</div>
			<div class="card-action blue lighten-4">
			  <div class="row detail-rows">
			  <span id="employee-id">ID: ${teamMemebers[i].getId()}</span>
			</div>
			<div class="row detail-rows">
			  <span>Email: </span>
			  <a href="mailto:${teamMemebers[i].getEmail()}" id="employee-email">${teamMemebers[i].getEmail()}</a>
			</div>
			<div class="row detail-rows">
			  <span id="unique-role-value">School: ${teamMemebers[i].getSchool()}</span>
			</div>
			</div>
			</div>
		  </div>`)
		}
	};

	// Combine html constant templates with cards created
	let indexVal = Constants.INDEX_BASE + cardList.join('') + Constants.INDEX_END;
	indexVal = format(indexVal);
	
	// Write results to file
	fs.writeFile('./dist/index.html', indexVal, err => {
		if (err) {
		  console.error(err)
		  return
		}
		console.log('file written successfully');
	  })
};

// Funtion to format html
function format(html) {
    var space = '  ';
    var result = '';
    var indent= '';

    html.split(/>\s*</).forEach(function(element) {
        if (element.match( /^\/\w/ )) {
            indent = indent.substring(space.length);
        }

        result += indent + '<' + element + '>\r\n';

        if (element.match( /^<?\w[^>]*[^\/]$/ )) { 
            indent += space;              
        }
    });

    return result.substring(1, result.length-3);
}

// Exporting file
module.exports = getEmployeeData;
