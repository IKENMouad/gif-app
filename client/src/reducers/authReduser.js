import { AuthEnumAction, ErrorEnumAction } from "../actions/action.type";

const initState = {
  isLoggedIn:
    localStorage.getItem("token") &&
    JSON.parse(localStorage.getItem("userInfo")),
  userInfo: JSON.stringify(localStorage.getItem("userInfo")) || null,
  token: "",
  configurations: {},
  error: "",
};

const authReduser = (state = initState, action) => {
  switch (action.type) {
    case AuthEnumAction.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.payload.user,
        token: action.payload.token,
      };
    case AuthEnumAction.REGISTER:
      break;
    case AuthEnumAction.LOGOUT:
      return { ...state, isLoggedIn: false, token: null, userInfo: null };
    case ErrorEnumAction.ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReduser;
