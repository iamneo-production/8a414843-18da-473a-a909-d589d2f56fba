import { combineReducers } from "redux";
import userReducer from "../features/userSlice"
import roleReducer from "../features/roleSlice"

const rootReducer = combineReducers({
    user: userReducer,
    role:roleReducer


});

export default rootReducer;
