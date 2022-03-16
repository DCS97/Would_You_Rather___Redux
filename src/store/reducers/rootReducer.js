import { combineReducers } from "redux";
import authedUser from "./authedUser";
import userReducer from "./userReducer";
import questionReducer from "./questionReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  user: authedUser,
  users: userReducer,
  questions: questionReducer,
  login: loginReducer,
});
export default rootReducer;
