const url = require('../endpoints.json')

console.log('hey', url)
export const createGameRequest = async () => {
  const requestOptions = {
    mode: 'cors',
    method: 'GET',
    headers: { 'Content-Type': 'none' },
  }
  const response = await fetch(
    `${url}hello`,
    requestOptions
  )
  //const data = await response.json()
}