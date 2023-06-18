import { combineReducers } from "redux";
import userReducer from "../features/userSlice"

const rootReducer = combineReducers({
    user: userReducer,

});

export default rootReducer;
