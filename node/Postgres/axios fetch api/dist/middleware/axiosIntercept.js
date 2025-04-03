"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Request Interceptor
axios_1.default.interceptors.request.use((request) => {
    if (request.headers) {
        request.headers["startTime"] = new Date().toISOString();
        request.headers["secretKey"] = 'ddsfdfdf';
    }
    return request;
}, (error) => {
    return Promise.reject("Unable to make request");
});
// Response Interceptor
axios_1.default.interceptors.response.use((response) => {
    if (response.headers) {
        response.headers["organizationVerify"] = 'true';
    }
    return response;
}, (error) => {
    return Promise.reject("Unable to process request");
});
