
  # Super Team Generator

  ![badge](https://img.shields.io/badge/license-ILL-blue)
  ![badge](https://img.shields.io/badge/license-MIT-blueviolet)
  ![badge](https://img.shields.io/badge/license-GNU-yellow)
  
  
  ## Description
  This application takes the input from the manager. They will input there own information. As well as the information of their team members. Given the employee role, Then there is a unique question to be asked to the manager. Finally, The input is used and written to an html file that can be displayed via browser.

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  1. Clone the repository from Git.
  2. Install node.js on your local
  3. Run: 'node index.js' from root directory.
  

  ## Usage
  1. Follow all prompts
  2. Once finished, you will have a professional html file saved in the dist directory.
  3. Open html file in your favorite browser.
  4. Marvel in the luxury of being able to view your team in an elegant card schema.
  5. Feel free to email any of your team members and brag. Those rmails are linkable.

  
  ## Functional Workflow
  * index.js is the primer for the application
    * init() simply initializes the app.
    * promptEmployeeData() will prompt the managers with question to collect the data
  * getEmployeeData.js is used to manager's inputs and generate an html file.
    * getEmployeeData() takes employee data and runs it through the correct class based on role
    * createHtml() takes employee object(s):
      * Uses correct card templates per employees role.
      * Creates html variable using:
        * Base html template(see ./utils/constants.js)
        * Cards generated by employee amount
        * End html template(see ./utils/constants.js)
      * Uses format() to clean the html variable before writing to file.
      * Writes index.html and places it into the ./dist directory


  ## License
  1. ILL
  2. MIT
  3. GNU
  

  ## Contributing
  1. Maria Bean
  2. Lucas Zimmerman
  

  ## Tests
  1. Change directory to the test dir.
  2. Install jest
  3. Run command: npm run test
  
  
  ## Questions
  1. Maria Bean: [GITHUB](github.com/mmeyer715)	[EMAIL](mailto:mbean1216@icloud.com)
  2. Lucas Zimmerman: [GITHUB](github.com/dolomiteson)	[EMAIL](mailto:zimmerman.lucas@hotmail.com)
