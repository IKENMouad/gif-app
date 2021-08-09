import { fetchedUser, fetchedUsers } from "../services/user.service";
import { ERROR, FETCH_USER, FETCH_USERS } from "./action.type";

export const fetchedUsersAction = () => async (dispatch) => {
  try {
    const response = await fetchedUsers();
    dispatch({ type: FETCH_USERS, payload: { items: response.data.items } });
  } catch (error) { 
    dispatch({ type: ERROR, payload: error.message });
  }
};


export const fetchedUserAction =(id)=> async (dispatch) => {
  
  try {
    const response = await fetchedUser(id);
    if (response.data) {
      dispatch({ type: FETCH_USER, payload: { item: response.data.item } });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.message });
  }
 
};