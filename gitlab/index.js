"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
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
        options = {
            headers: this.headers,
            method: options.method || 'GET',
            body: JSON.stringify(req),
        };
        const response = await node_fetch_1.default(`${this.serverUrl}/api/v4/${action}`, options);
        return await response.json();
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
    deleteBranch(id) {
        return this.request(`/projects/${this.productId}/repository/branches/${id}`, null, {
            method: 'delete'
        });
    }
    deleteTag(id) {
        return this.request(`/projects/${this.productId}/protected_tags/${id}`, null, {
            method: 'delete'
        });
    }
}
module.exports = Client;
