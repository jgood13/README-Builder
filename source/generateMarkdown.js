function generateMarkdown(input) {
  return `
  # ${input.title}

  ![badge](https://img.shields.io/badge/license-${input.license}-red)<br/>

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
  <br/>

  ## Questions

  #### Github
  <a href = "https://github.com/${input.github}"
target="_blank"> ${input.github}</a>

  #### Email
  ${input.email}
`;
}

module.exports = generateMarkdown;
