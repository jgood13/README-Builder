// function using literal string to create markdown page
function generateMarkdown(input) {
  return `
  # ${input.title}

  ![badge](https://img.shields.io/badge/license-${input.license}-red)


  ## Table of contents
  [Description](#Description) <br>
  [Installation](#Installation) <br>
  [Usage](#Usage)<br>
  [Tests](#Tests)<br>
  [License](#License)<br>
  [Questions](#Questions)<br>
  <br>
  ## Description
  ${input.description}
  
  ## Installation
  ${input.installation}
  
  ## Usage
  ${input.usage}

  ## Contribution Guidelines
  ${input.contributing}

  ## Tests
  ${input.tests}

  ## License

  This is covered by the ${input.license} license.

  ## Questions

  #### Github
  <a href = "https://github.com/${input.github}"
target="_blank"> ${input.github}</a>

  #### Email
  ${input.email}
`;
}

module.exports = generateMarkdown;
