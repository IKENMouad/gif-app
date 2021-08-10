import { axiosInstance as axios, baseUrl } from "./axios.intercepter"


export default class UserService {
  fetchedUsers = () => {
    return axios.get(baseUrl + "/users");
  };

  fetchedUser = (id: any) => {
    return axios.get(baseUrl + "/users/" + id);
  };
}
