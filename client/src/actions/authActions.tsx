import { AuthService } from "../services/authService";
import { AuthEnumAction, ErrorEnumAction } from "./action.type";



export default class AuthAction {
  private authservice: AuthService = new AuthService();
  constructor() {}

  login = (data: any) => async (dispatch: any) => {
    try {
      const res = await this.authservice.login(data);
      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userInfo", JSON.stringify(res.data.user));
      }
      dispatch({ type: AuthEnumAction.LOGIN, payload: res.data });

      return Promise.resolve(res.data);
    } catch (error) {
      dispatch({ type: ErrorEnumAction.ERROR, payload: error.message });
      return Promise.reject(error);
    }
  };

  logout = () => async (dispatch: any) => {
    dispatch({ type: AuthEnumAction.LOGOUT });
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
  };
}

