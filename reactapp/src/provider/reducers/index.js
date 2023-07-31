import { combineReducers } from "redux";
import userReducer from "../features/userSlice"
import roleReducer from "../features/roleSlice"
import tokenReducer from "../features/tokenSlice"

const rootReducer = combineReducers({
    user: userReducer,
    role:roleReducer,
    token:tokenReducer


});

export default rootReducer;
