// Import packages needed
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

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
    console.log(employeeArray);
}

// TODO: Interate through employee array, create HTML cards for each employee

// Base example of card to append to #card-holder
{/* <div class="col l3 m6 s12">
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
		  <span id="office-number"></span>
		</div>
	  </div>
	</div>
</div> */}

// TODO: Append to HTML

// Exporting file
module.exports = getEmployeeData;