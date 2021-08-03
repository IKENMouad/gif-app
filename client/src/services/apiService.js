import axios from 'axios';
const apiUrl = 'http://localhost:5000'
// Auth Service 

export const register = (data) => {
    return axios.post(`${apiUrl}/auth/register`, data)
}

export const login = (data) => {
    return axios.post(`${apiUrl}/auth/login`, data)
}
