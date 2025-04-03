import axios, { AxiosResponse,InternalAxiosRequestConfig } from 'axios';

// Request Interceptor
axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  if (request.headers) {
    request.headers["startTime"] = new Date().toISOString();
    request.headers["secretKey"] = 'ddsfdfdf';
  }
  return request;
}, (error: any) => {
  return Promise.reject("Unable to make request");
});

// Response Interceptor
axios.interceptors.response.use((response: AxiosResponse) => {
  if (response.headers) {
    response.headers["organizationVerify"] = 'true';
  }
  return response;
}, (error: any) => {
  return Promise.reject("Unable to process request");
});