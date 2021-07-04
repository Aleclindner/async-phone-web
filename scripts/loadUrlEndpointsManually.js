const execSync = require('child_process').execSync

const args = process.argv
const url = args[2]
execSync(`echo '"${url}"' > src/endpoints.json`)
