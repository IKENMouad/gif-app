import { axiosInstance as axios, baseUrl } from "./axios.intercepter";

export class CategoryService {
  constructor() {}

  createCategory = (data: any) => {
    return axios.post(`${baseUrl}/categories`, data);
  };

  fetchCategories = () => {
    return axios.get(`${baseUrl}/categories`);
  };

  fetchCategory = (categoryId: any) => {
    return axios.get(`${baseUrl}/categories/${categoryId}/`);
  };

  updateCategory = (category: any) => {
    return axios.put(`${baseUrl}/categories/${category.id}/`, category);
  };
}
