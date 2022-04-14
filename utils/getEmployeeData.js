// Import packages needed
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Constants = require('./constants');
const fs = require = require('fs');


// Variables
const employeeArray = [];

// Function to get all employees
const getEmployeeData = (data) => {
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
	// console.log(employeeArray);
	createEmployeeCards(employeeArray);
}

// TODO: Interate through employee array, create HTML cards for each employee

//TODO: Take index.html as a file var, update with cards, save as a copy in root
const createEmployeeCards = (teamMemebers) => {
	const cardList = [];
	for (let i = 0; i < teamMemebers.length; i++) {
		if (teamMemebers[i].getRole() === 'Manager') {
			cardList.push(`<div class="col l3 m6 s12">
			<div class="card">
			  <div class="card-content blue white-text">
			  <span class="row employee-name">${teamMemebers[i].getName()}</span>
			  <span class="row employee-role">${teamMemebers[i].getRole()}</span>
				</div>
			<div class="card-action blue lighten-4">
			  <div class="row detail-rows">
			  <span id="employee-id">${teamMemebers[i].getId()}</span>
			</div>
			<div class="row detail-rows">
			  <span>Email:</span>
			  <a href="mailto:${teamMemebers[i].getEmail()}" id="employee-email">${teamMemebers[i].getEmail()}</a>
			</div>
			<div class="row detail-rows">
			  <span id="unique-role-value">${teamMemebers[i].getOfficeNumber()}</span>
			</div>
			</div>
			</div>
		  </div>`)
		} else if (teamMemebers[i].getRole() === 'Engineer') {
			cardList.push(`<div class="col l3 m6 s12">
			<div class="card">
			  <div class="card-content blue white-text">
			  <span class="row employee-name">${teamMemebers[i].getName()}</span>
			  <span class="row employee-role">${teamMemebers[i].getRole()}</span>
			</div>
			<div class="card-action blue lighten-4">
			  <div class="row detail-rows">
			  <span id="employee-id">${teamMemebers[i].getId()}</span>
			</div>
			<div class="row detail-rows">
			  <span></span>
			  <a href="mailto:${teamMemebers[i].getEmail()}" id="employee-email">${teamMemebers[i].getEmail()}</a>
			</div>
			<div class="row detail-rows">
			  <span id="unique-role-value">${teamMemebers[i].getGithub()}</span>
			</div>
			</div>
			</div>
		  </div>`)
		} else {
			cardList.push(
				`<div class="col l3 m6 s12">
			<div class="card">
			  <div class="card-content blue white-text">
			  <span class="row employee-name">${teamMemebers[i].getName()}</span>
			  <span class="row employee-role">${teamMemebers[i].getRole()}</span>
			</div>
			<div class="card-action blue lighten-4">
			  <div class="row detail-rows">
			  <span id="employee-id">${teamMemebers[i].getId()}</span>
			</div>
			<div class="row detail-rows">
			  <span></span>
			  <a href="mailto:${teamMemebers[i].getEmail()}" id="employee-email">${teamMemebers[i].getEmail()}</a>
			</div>
			<div class="row detail-rows">
			  <span id="unique-role-value">${teamMemebers[i].getSchool()}</span>
			</div>
			</div>
			</div>
		  </div>`)
		}
		// console.log(cardList);
	};
	let indexVal = Constants.INDEX_BASE + cardList.join('') + Constants.INDEX_END;
	console.log(indexVal);
	fs.writeFile('./dist/index.html', indexVal, err => {
		if (err) {
		  console.error(err)
		  return
		}
		console.log('file written successfully');
	  })	  
};

`<div class="col l3 m6 s12">
    <div class="card">
      <div class="card-content blue white-text">
      <span class="row employee-name"></span>
      <span class="row employee-role"></span>
    </div>
    <div class="card-action blue lighten-4">
      <div class="row detail-rows">
      <span id="employee-id"></span>
    </div>
    <div class="row detail-rows">
      <span></span>
      <a href="mailto: insertemailhere@xyz.com?subject=Mail from xyz.com" id="employee-email"></a>
    </div>
    <div class="row detail-rows">
      <span id="unique-role-value"></span>
    </div>
  </div>`

// TODO: write to HTML

// Exporting file
module.exports = getEmployeeData;
