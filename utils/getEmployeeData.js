// Import packages needed
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

// Variables
const employeeArray = [];

// Function to get all employees
const getEmployeeData = (data) => {
    // pulling manager data
    const manager = new Manager(data.name, data.employeeId, data.email, data.officeNum);
    employeeArray.push(manager);
    console.log(employeeArray);
}

// TODO: Iterate through employees, pull employee data, pass data through class based on role, push to empty array

// TODO: Interate through employee array, create HTML cards for each employee

// TODO: Append to HTML

// Exporting file
module.exports = getEmployeeData;