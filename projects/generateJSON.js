let fs = require('fs');
fs.readFile('./spider_tool.csv', 'utf8', (err, data) => {
  if (err) return console.log(err)
  csvJSON(data)
})

function csvJSON(csv) {
  const lines = csv.split('\n');

  const result = lines.reduce((res, line) => {
    if (!line) return res;
    
    /**
    * Structure is:
    *   Repository name
    *   Package name
    *   Cobalt version
    *   Date of last commit to package.json
    *   Path to package.json
    *   Organization name
    *   Repository URL
    */
    const [repositoryName, packageName, cobaltVersion, date, pathToPackageJSON, organization, repositoryURL] = line.split(',');

    return {
      ...res,
      [packageName]: {
        "name": packageName,
        "cobaltVersion": cobaltVersion,
        "lastUpdate": date,
        "repository": {
          "name": repositoryName,
          "url": repositoryURL
        },
        "path": pathToPackageJSON,
        "organization": {
          "name": organization
        }
      }
    }
  }, {})

  fs.writeFile('./projects.json', JSON.stringify(result), err => err ? console.log(err) : null)
}
