import { axiosInstance as axios } from "./axios.instance";
const apiUrl = 'http://localhost:5000'


// Auth Service 

export const register = (data) => {
    return axios.post(`${apiUrl}/auth/register`, data)
}

export const login = (data) => {
    return axios.post(`${apiUrl}/auth/login`, data)
}

// Category Service

export const createCategory = (data) => {
    return axios.post(`${apiUrl}/categories`, data)
}

export const fetchCategories = () => {
    return axios.get(`${apiUrl}/categories`)
}

export const fetchCategory = (categoryId) => {
    return axios.get(`${apiUrl}/categories/${categoryId}/`)
}

export const updateCategory = (category) => {
    return axios.put(`${apiUrl}/categories/${category.id}/`, category)
}