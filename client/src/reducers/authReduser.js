import { ERROR, LOGIN, LOGOUT, REGISTER } from "../actions/action.type";

const initState = {
  isLoggedIn:
    JSON.parse(localStorage.getItem("token")) &&
    JSON.parse(localStorage.getItem("userInfo")),
  userInfo: JSON.stringify(localStorage.getItem("userInfo")) || null,
  token: "",
  configurations: {},
  error: "",
};


const authReduser = (state = initState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          isLoggedIn: true,
          userInfo: action.payload.user,
          token: action.payload.token,
        };
      case REGISTER:
        break;
      case LOGOUT:
        return { ...state, isLoggedIn: false, token: null, userInfo: null };
      case ERROR:
        return { ...state, error: action.payload };
      default:
        return state;
    }
}


export default authReduser