import { combineReducers } from "redux";
import { loginReducer } from "./Auth/reducer";

const rootReducers = combineReducers({
  loginReducer,
});

export default rootReducers;
