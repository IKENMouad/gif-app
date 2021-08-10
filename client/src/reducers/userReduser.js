import { ErrorEnumAction, UserEnumAction } from "../actions/action.type";

const initState = {
  users: [],
  user: null,
  isLoaded: false,
  error: "",
};


const userReduser = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserEnumAction.FETCH_USERS:
      return { ...state, users: payload.items, isLoaded: true };

    case UserEnumAction.FETCH_USER:
      console.log("payload", payload);
      return { ...state, user: payload.item, isLoaded: true };

    case ErrorEnumAction.ERROR:
      return { ...state, isLoaded: false, error: payload };
    default:
      return state;
  }
};


export default userReduser;