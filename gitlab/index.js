"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const service = axios_1.default.create({
    timeout: 15000
});
service.interceptors.response.use(response => {
    return response.data;
}, error => {
    return error.response.data;
});
class Client {
    constructor(options) {
        this.serverUrl = options.serverUrl;
        this.productId = options.productId;
        this.headers = {
            'Content-Type': 'application/json',
            'PRIVATE-TOKEN': options.token
        };
    }
    async request(action, req, options = {}) {
        const method = options.method || 'GET';
        options = {
            headers: this.headers,
            method,
            data: req,
            params: method === 'GET' ? req : null
        };
        return service({
            url: `${this.serverUrl}/api/v4/${action}`,
            ...options
        });
    }
    fetchProject() {
        return this.request(`/projects/${this.productId}`);
    }
    fetchProjectVariables() {
        return this.request(`/projects/${this.productId}/variables`);
    }
    fetchRepositoryCommits(id) {
        return this.request(`/projects/${this.productId}/repository/commits${id ? `/${id}` : ''}`);
    }
    createMergeRequests(req) {
        return this.request(`/projects/${this.productId}/merge_requests`, req, {
            method: 'POST'
        });
    }
    mergeMergeRequests(merge_request_iid) {
        return this.request(`/projects/${this.productId}/merge_requests/${merge_request_iid}/merge`, null, {
            method: 'PUT'
        });
    }
    updateMergeRequests(merge_request_iid, req) {
        return this.request(`/projects/${this.productId}/merge_requests/${merge_request_iid}`, req, {
            method: 'PUT'
        });
    }
    deleteMergeRequests(merge_request_iid) {
        return this.request(`/projects/${this.productId}/merge_requests/${merge_request_iid}`, null, {
            method: 'DELETE'
        });
    }
    createBranch(req) {
        return this.request(`/projects/${this.productId}/repository/branches`, req, {
            method: 'POST'
        });
    }
    fetchBranches() {
        return this.request(`/projects/${this.productId}/repository/branches`);
    }
    fetchBranch(branch) {
        return this.request(`/projects/${this.productId}/repository/branches/${branch}`);
    }
    deleteBranch(branch) {
        return this.request(`/projects/${this.productId}/repository/branches/${branch}`, null, {
            method: 'DELETE'
        });
    }
    deleteMergedBranches() {
        return this.request(`/projects/${this.productId}/repository/merged_branches`, null, {
            method: 'DELETE'
        });
    }
    fetchPipelines(req) {
        return this.request(`/projects/${this.productId}/pipelines`, req);
    }
    fetchPipeline(pipeline_id) {
        return this.request(`/projects/${this.productId}/pipelines/${pipeline_id}`);
    }
    fetchPipelineJobs(pipeline_id) {
        return this.request(`/projects/${this.productId}/pipelines/${pipeline_id}/jobs`);
    }
    fetchProjectJobs() {
        return this.request(`/projects/${this.productId}/jobs`);
    }
    fetchTags() {
        return this.request(`/projects/${this.productId}/repository/tags`);
    }
    fetchTag(tag_name) {
        return this.request(`/projects/${this.productId}/repository/tags/${tag_name}`);
    }
    createTag(req) {
        return this.request(`/projects/${this.productId}/repository/tags`, req, {
            method: 'POST'
        });
    }
    deleteTag(tag_name) {
        return this.request(`/projects/${this.productId}/repository/tags/${tag_name}`, null, {
            method: 'DELETE'
        });
    }
    fetchCommits(req) {
        return this.request(`/projects/${this.productId}/repository/commits`, req);
    }
    fetchCommit(sha) {
        return this.request(`/projects/${this.productId}/repository/commits/${sha}`);
    }
}
module.exports = Client;
