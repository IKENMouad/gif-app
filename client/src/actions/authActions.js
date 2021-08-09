import { ERROR, LOGIN, LOGOUT } from "./action.type"
import { login as loginService } from '.././services/apiService'

export const login = (data) => async (dispatch) => {
    try {
        const res = await loginService(data)
        dispatch({ type: LOGIN, payload: res.data })
        const token = res.data.token
        const { _id, email } = res.data.user
        if (res.data && token && _id && email) {
            localStorage.setItem('token', token)
            localStorage.setItem('userInfo', JSON.stringify({ _id, email }))
        }
        // return Promise.resolve(res.data);

    } catch (error) {
        dispatch({ type: ERROR, payload: error.message })
        // return Promise.reject(error);
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    dispatch({ type: LOGOUT })
}