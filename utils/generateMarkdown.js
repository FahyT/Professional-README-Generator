// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 

  ## Installation

  ## Usage 

  ## Credits

  ## License

`;
}

//helper function to detemine license

function licenseText(license) {
  
}

module.exports = generateMarkdown;
