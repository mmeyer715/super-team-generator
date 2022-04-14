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
	createEmployeeCards();
}

// TODO: Interate through employee array, create HTML cards for each employee

//TODO: Take index.html as a file var, update with cards, save as a copy in root
const createEmployeeCards = () => {
	let indexVal = Constants.INDEX_BASE + Constants.INDEX_CARD + Constants.INDEX_END;
	fs.writeFile('./index.html', indexVal, err => {
		if (err) {
		  console.error(err)
		  return
		}
		//file written successfully
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
