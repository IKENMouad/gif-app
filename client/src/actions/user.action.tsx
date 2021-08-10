 import UserService from "../services/user.service";
import { ErrorEnumAction, UserEnumAction } from "./action.type";

export default class UserAction {
  userService: UserService = new UserService();
  constructor() {
    // this.userService = _userService;
  }

  fetchedUsersAction = () => async (dispatch: any) => {
    try {
      const response = await this.userService.fetchedUsers();
      dispatch({
        type: UserEnumAction.FETCH_USERS,
        payload: { items: response.data.items },
      });
    } catch (error) {
      dispatch({ type: ErrorEnumAction.ERROR, payload: error.message });
    }
  };

  fetchedUserAction = (id: any) => async (dispatch: any) => {
    try {
      const response = await this.userService.fetchedUser(id);
      if (response.data) {
        dispatch({
          type: UserEnumAction.FETCH_USER,
          payload: { item: response.data.item },
        });
      }
    } catch (error) {
      dispatch({ type: ErrorEnumAction.ERROR, payload: error.message });
    }
  };
}
