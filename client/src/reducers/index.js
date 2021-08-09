import { combineReducers } from "redux";
import authReduser from "./authReduser"
import categoryReduser from "./categoryReducer";


export default combineReducers({ auth: authReduser, category: categoryReduser   }); 