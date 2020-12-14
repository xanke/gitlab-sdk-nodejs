const Gitlab = require('../../gitlab')

const Client = new Gitlab({
  serverUrl: 'https://git.nodevops.cn',
  productId: 'frontend-team%2Fgit-studio',
  token: ''
})

module.exports = Client;