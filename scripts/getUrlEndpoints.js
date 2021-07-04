const execSync = require('child_process').execSync
const readline = require('readline-sync')

const email = readline.question('AWS profile email? ')
const command = `aws ${email? `--profile ${email}` : ''} --region us-east-1 apigateway get-rest-apis`
const res = execSync(command)
const json = JSON.parse(res)
const id = json.items[0].id
const url = `https://${id}.execute-api.us-east-1.amazonaws.com/dev/`
execSync(`echo '"${url}"' > src/endpoints.json`)
