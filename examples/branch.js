const Client = require('./common/client')

async function createBranch() {
  const response = await Client.createBranch({
    branch: 'newbranch',
    ref: 'master'
  })
  console.log(response)
}

async function fetchBranches() {
  const response = await Client.fetchBranches()
  console.log(response)
}

async function fetchBranch() {
  const response = await Client.fetchBranch('master')
  console.log(response)
}

async function deleteBranch() {
  const response = await Client.deleteBranch('test')
  console.log(response)
}

async function deleteMergedBranches() {
  const response = await Client.deleteMergedBranches()
  console.log(response)
}
