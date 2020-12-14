const Client = require('./common/client')

async function fetchPipelines() {
  const response = await Client.fetchPipelines({
    status: 'failed'
  })
  console.log(response)
}

async function fetchPipeline() {
  const response = await Client.fetchPipeline(1919)
  console.log(response)
}

async function fetchProjectJobs() {
  const response = await Client.fetchProjectJobs()
  console.log(response)
}

async function fetchPipelineJobs() {
  const response = await Client.fetchPipelineJobs(1919)
  console.log(response)
}