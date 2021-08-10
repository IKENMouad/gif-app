import { axiosInstance as axios, baseUrl } from "./axios.intercepter"

export class AuthService {
  constructor() {}

  register = (data: any) => {
    return axios.post(`${baseUrl}/auth/register`, data);
  };

  login = (data: any) => {
    return axios.post(`${baseUrl}/auth/login`, data);
  };

}