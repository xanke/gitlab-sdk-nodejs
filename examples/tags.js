const Client = require('./common/client')

async function fetchTags() {
  const response = await Client.fetchTags()
  console.log(response)
}

async function fetchTag() {
  const response = await Client.fetchTag('v1.0.0')
  console.log(response)
}

async function createTag() {
  const response = await Client.createTag({
    tag_name: 'v1.0.1',
    ref: 'master'
  })
  console.log(response)
}

async function deleteTag() {
  const response = await Client.deleteTag('v1.0.1')
  console.log(response)
}
