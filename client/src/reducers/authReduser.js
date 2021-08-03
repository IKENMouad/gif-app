import { ERROR, LOGIN, REGISTER } from "../actions/action.type";

const initState = {

    isLoggedIn: false,
    userInfo: {},
    token: '',
    configurations: {},
    error: '',
}


const authReduser = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log('login reducer', action.payload)
            return { ...state, isLoggedIn: true, userInfo: action.payload.user, token: action.payload.token }
        case REGISTER:

            break;
        case ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}


export default authReduser