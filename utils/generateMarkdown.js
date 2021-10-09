// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  let chosenLicense = ""

  if(data.license == "MIT") {
    chosenLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if(data.license == "Mozilla"){
    chosenLicense = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  if(data.license == "GNU") {
    chosenLicense = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }else if(data.license == ""){
    chosenLicense = ""
     }

  return `# ${data.title} ${chosenLicense}
  Developers current mood; ${data.mood}
  ## Description

  This is a short description of this application: ${data.description}


  This is the license we are using  ${data.license}
  
  This is the command to installing the project ${data.installation}
  
  This is the command to test your project ${data.test} 

  In order to contribute please follow this ${data.contribute}

  This is a link to my Github profile: ${data.github}

  This is my email address  ${data.email}
  `;
}

module.exports = generateMarkdown;
