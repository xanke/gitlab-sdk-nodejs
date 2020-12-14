const Client = require('./common/client')

async function fetchCommits() {
  const response = await Client.fetchCommits()
  console.log(response)
}

async function fetchCommit() {
  const response = await Client.fetchCommit('0f3c763c')
  console.log(response)
}
