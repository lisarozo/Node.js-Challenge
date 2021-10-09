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

  return `# ${data.title} ${chosenLicense}
  ## Description

  This is a short description of this application: ${data.description}
      
  [This is a link to Google](https://www.google.com)
  
  This is a link to my Github profile:  https://github.com/lisarozo/Node.js-Challenge

  `;
}

module.exports = generateMarkdown;
