// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license!=="None") {
    return`<img src="https://img.shields.io/badge/License-${license}-blue.svg"/>`
  }else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license!=="None") {
    return `* [License](#license)`
  }else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!=="None") {
    return `## License
    
    This project is licensed under ${license}`
  }else{
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicenseBadge(data.License)}


  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.License)}
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ${renderLicenseSection(data.License)}

  ## Contributions
  ${data.Contributions}
  [How to Contribute](https://www.contributor-covenant.org/)
  
  ## Tests
  ${data.Tests}
  
  ## Questions
  If you have any questions please contact me at [${data.Email}](mailto:${data.Email}).
  For more of my projects check out my github [${data.Github}](https://github.com/${data.Github}).
`;
}

module.exports = generateMarkdown;