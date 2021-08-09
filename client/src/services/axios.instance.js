import axios from 'axios'
const APIURL = 'http://localhost:5000'

const token = localStorage.getItem('token')

export const axiosInstance = axios.create({
    baseURL: APIURL,
    headers: {
        'Authorization': token,
    }
})


