import { ERROR, LOGIN } from "./action.type"
import { login as loginService } from '.././services/apiService'

export const login = (data) => async (dispatch) => {
    try {
        const res = await loginService(data)
        console.log('resData', res)
        dispatch({ type: LOGIN, payload: res.data })
        return Promise.resolve(res.data);

    } catch (error) {
        dispatch({ type: ERROR, payload: error.message })
        return Promise.reject(error);
    }
}