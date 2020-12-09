const Gitlab = require('../gitlab')

const Client = new Gitlab({
  serverUrl: 'https://gitlab.com',
  productId: 'frontend%2Fhome',
  token: ''
})

async function main() {
  const response = await Client.fetchProject()
  console.log(response);
}

main()
