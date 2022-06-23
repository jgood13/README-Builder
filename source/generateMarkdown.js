function generateMarkdown(data) {
  return `
  # ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-red)<br />
`;
}

module.exports = generateMarkdown;
