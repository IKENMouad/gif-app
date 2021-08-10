const axios = require('axios');
const { isAuthenticated } = require('../helpers/auth.helper');

export const baseUrl = "http://localhost:5000";

let headers: any = {}; 

if(isAuthenticated()){
  headers.Authorization = localStorage.getItem("token");
}

export const axiosInstance = axios.create({
  baseUrl,
  headers,
});

; 