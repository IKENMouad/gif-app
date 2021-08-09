import { combineReducers } from "redux";
import authReduser from "./authReduser" 
import userReduser from "./userReduser";


export default combineReducers({ auth: authReduser, user: userReduser }); 
