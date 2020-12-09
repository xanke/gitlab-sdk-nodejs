# Gitlab SDK NodeJS

## 示例

```js
const Gitlab = require('gitlab-sdk-nodejs')

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
```