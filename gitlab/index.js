"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import fetch from "node-fetch";
const axios_1 = require("axios");
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
        let response = await axios_1.default(`${this.serverUrl}/api/v4/${action}`, options);
        return response.data;
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
            method: 'post'
        });
    }
    mergeMergeRequests(merge_request_iid) {
        return this.request(`/projects/${this.productId}/merge_requests/${merge_request_iid}/merge`, null, {
            method: 'put'
        });
    }
    updateMergeRequests(merge_request_iid, req) {
        return this.request(`/projects/${this.productId}/merge_requests/${merge_request_iid}`, req, {
            method: 'put'
        });
    }
    deleteMergeRequests(merge_request_iid) {
        return this.request(`/projects/${this.productId}/merge_requests/${merge_request_iid}`, null, {
            method: 'delete'
        });
    }
    createBranch(req) {
        return this.request(`/projects/${this.productId}/repository/branches`, req, {
            method: 'post'
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
            method: 'delete'
        });
    }
    deleteMergedBranches() {
        return this.request(`/projects/${this.productId}/repository/merged_branches`, null, {
            method: 'delete'
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
            method: 'post'
        });
    }
    deleteTag(tag_name) {
        return this.request(`/projects/${this.productId}/repository/tags/${tag_name}`, null, {
            method: 'delete'
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
