import { ERROR, LOGIN, LOGOUT } from "./action.type"
import { login as loginService } from '.././services/apiService'

export const login = (data) => async (dispatch) => {
    try {
        const res = await loginService(data)
         if(res.data){
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem('userInfo', JSON.stringify(res.data.user) )
         }
        dispatch({ type: LOGIN, payload: res.data })

        return Promise.resolve(res.data);

    } catch (error) {
        dispatch({ type: ERROR, payload: error.message });
        return Promise.reject(error);
    }
}


export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
};