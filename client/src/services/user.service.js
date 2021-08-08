import { axiosInstance as axios, baseUrl } from "./axios.intercepter"


export const fetchedUsers =  ()  =>   {
 return axios.get(baseUrl + "/users");
}


export const fetchedUser = (id) => {
  return axios.get(baseUrl + "/users/" + id);
};