import fetch from "node-fetch";

class Client {
  serverUrl: string
  productId: string
  headers: any

  constructor(options: any) {
    this.serverUrl = options.serverUrl
    this.productId = options.productId
    this.headers = {
      'Content-Type': 'application/json',
      'PRIVATE-TOKEN': options.token
    }
  }

  async request(action: string, req?: any, options: any = {}) {
    options = {
      headers: this.headers,
      method: options.method || 'GET',
      body: JSON.stringify(req),
    }
    const response = await fetch(`${this.serverUrl}/api/v4/${action}`, options)
    return await response.json();
  }

  fetchProject() {
    return this.request(`/projects/${this.productId}`)
  }

    
  fetchProjectVariables(){
    return this.request(`/projects/${this.productId}/variables`)
  }

  fetchRepositoryCommits(id: string){
    return this.request(`/projects/${this.productId}/repository/commits${id ? `/${id}` : ''}`)
  }

  createMergeRequests(req: any) {
    return this.request(`/projects/${this.productId}/merge_requests`, req, {
      method: 'post'
    })
  }

  mergeMergeRequests(merge_request_iid: string) {
    return this.request(`/projects/${this.productId}/merge_requests/${merge_request_iid}/merge`, null, {
      method: 'put'
    })
  }

  updateMergeRequests(merge_request_iid: string, req: any) {
    return this.request(`/projects/${this.productId}/merge_requests/${merge_request_iid}`, req, {
      method: 'put'
    })
  }

  deleteMergeRequests(merge_request_iid: string) {
    return this.request(`/projects/${this.productId}/merge_requests/${merge_request_iid}`, null, {
      method: 'delete'
    })
  }

  deleteBranch(id: string) {
    return this.request(`/projects/${this.productId}/repository/branches/${id}`, null, {
      method: 'delete'
    })
  }

  deleteTag(id: String) {
    return this.request(`/projects/${this.productId}/protected_tags/${id}`, null, {
      method: 'delete'
    })
  }
}

module.exports = Client