const Client = require('./common/client')

async function fetchProject() {
  const response = await Client.fetchProject()
  console.log(response)
}

async function fetchProjectVariables() {
  const response = await Client.fetchProjectVariables()
  console.log(response)
}

fetchProject()
fetchProjectVariables()